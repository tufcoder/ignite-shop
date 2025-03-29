import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";
import { generateBlurDataUrl } from "../utils/functions";

import {
  ImageContainer,
  ProductsContainer,
  SuccessContainer
} from "../styles/pages/success";

interface SuccessProps {
  customerName: string
  products: {
    id: string
    imageUrl: string
    blurDataUrl: string
  }[]
}

export default function Success({ customerName, products }:SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ProductsContainer>
          {products.map(product => (
            <ImageContainer key={product.id}>
              <Image
                src={product.imageUrl}
                width={120}
                height={110}
                alt=""
                placeholder="blur"
                blurDataURL={product.blurDataUrl}
              />
            </ImageContainer>
          ))}
        </ProductsContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product

    return {
      id: item.price.id,
      imageUrl: product.images[0],
      blurDataUrl: '',
    }
  })

  products.map((product) => {
    product.blurDataUrl = generateBlurDataUrl();
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
