import axios from "axios"
import { useState } from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"

import { stripe } from "../../lib/stripe"
import { generateBlurDataUrl, priceFormatToBRL } from "../../utils/functions"

import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from "../../styles/pages/product"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    blurDataUrl: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  async function handleByProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      console.error('Error redirecting to checkout', error)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleByProduct} disabled={isCreatingCheckoutSession}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await stripe.products.list()

  const paths = response.data.map((product) => ({
    params: {
      id: product.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'] // not a list, so dont need data.default_price
  })

  const price = product.default_price as Stripe.Price
  const imageUrl = product.images[0]

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: imageUrl,
        price: priceFormatToBRL(price.unit_amount / 100),
        blurDataUrl: generateBlurDataUrl(),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
