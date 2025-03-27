import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from "../lib/stripe";
import { generateBlurDataUrl, priceFormatToBRL } from "../utils/functions";

import { HomeContainer, Product } from "../styles/pages/home";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    blurDataUrl: string
  }[]
}

export default function Home({ products }:HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide" aria-label={product.name}>
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt=""
                placeholder="blur"
                blurDataURL={product.blurDataUrl}
              />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const imageUrl = product.images[0]

    return {
      id: product.id,
      name: product.name,
      imageUrl: imageUrl,
      price: priceFormatToBRL(price.unit_amount / 100),
      blurDataUrl: '',
    }
  })

  // feito dessa forma para o JSON não serializar com uma Promise
  products.map((product) => {
    product.blurDataUrl = generateBlurDataUrl();
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
