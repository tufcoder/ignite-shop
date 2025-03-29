import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { Handbag } from "@phosphor-icons/react"

import { ProductContext, ProductType } from "../context/ProductContext"

import { priceFormatToBRL } from "../utils/price-formatter"

import { ProductContainer } from "../styles/components/product"

interface ProductProps {
  product: ProductType
}

export function Product({ product }: ProductProps) {
  const { handleAddItemInBag, isItemInBag } = useContext(ProductContext)

  const disabled = isItemInBag(product)

  function handleAddItem(product: ProductType) {
    handleAddItemInBag(product)
  }

  return (
    <ProductContainer className="keen-slider__slide" aria-label={product.name}>
      <Link href={`/product/${product.id}`} prefetch={false}>
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt=""
          placeholder="blur"
          blurDataURL={product.blurDataUrl}
        />
      </Link>

      <footer>
        <p>
          <strong>{product.name}</strong>
          <span>{priceFormatToBRL(product.price / 100)}</span>
        </p>
        <button
          onClick={() => handleAddItem(product)}
          disabled={disabled}
        >
          <Handbag size={32} weight="bold" />
        </button>
      </footer>
    </ProductContainer>
  )
}
