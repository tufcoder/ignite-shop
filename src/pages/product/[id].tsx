import { useContext } from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { CaretLeft } from "@phosphor-icons/react"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"

import { ProductContext } from "../../context/ProductContext"
import { stripe } from "../../lib/stripe"
import { generateBlurDataUrl } from "../../utils/functions"
import { priceFormatToBRL } from "../../utils/price-formatter"

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  ProductNavigation,
} from "../../styles/pages/product"
import Link from "next/link"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    blurDataUrl: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { handleAddItemInBag, isItemInBag } = useContext(ProductContext)
  const { isFallback } = useRouter()

  const disabled = isItemInBag(product)

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <ProductNavigation>
        <Link href="/">
          <CaretLeft size={32} /> Voltar
        </Link>
      </ProductNavigation>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatToBRL(product.price / 100)}</span>

          <textarea disabled value={product.description} />

          <button
            onClick={() => handleAddItemInBag(product)}
            disabled={disabled}
          >
            Colocar na sacola
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
  const detailed_description = product.metadata?.descricao_detalhada || null

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: imageUrl,
        price: price.unit_amount,
        blurDataUrl: generateBlurDataUrl(),
        description: detailed_description ?? product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
