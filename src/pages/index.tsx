import { GetStaticProps } from "next";
import Head from "next/head";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { ProductType } from "../context/ProductContext";
import { Product } from "../components/product";
import { stripe } from "../lib/stripe";
import { generateBlurDataUrl } from "../utils/functions";

import { HomeContainer } from "../styles/pages/home";

interface HomeProps {
  products: ProductType[]
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
          <Product key={product.id} product={product} />
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
      price: price.unit_amount,
      blurDataUrl: '',
      defaultPriceId: price.id,
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
