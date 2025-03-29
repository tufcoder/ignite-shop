import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import { X } from "@phosphor-icons/react"

import { ProductContext } from "../context/ProductContext"

import { priceFormatToBRL } from "../utils/price-formatter"

import {
  CartContainer,
  CartFooter,
  CartImageContainer,
  CartProductItem,
  CartProductsContainer,
  CartProductsWrapper,
} from "../styles/components/cart"

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const {
    isBagOpen,
    handleOpenBag,
    bagItems,
    handleRemoveItemInBag
  } = useContext(ProductContext)

  const total = bagItems.reduce(
    (acc, current) => {
      return acc + current.price
    },
    0
  )

  const items = bagItems.map(item => {
    return {
      price: item.defaultPriceId,
      quantity: 1
    }
  })

  async function handleByProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        items,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      console.error('Error redirecting to checkout', error)
    }
  }

  useEffect(() => {
    if (bagItems.length === 0)
      handleOpenBag(false)
  }, [bagItems])

  return (
    <>
      {isBagOpen && (
        <CartContainer>
          <header>
            <button onClick={() => handleOpenBag(false)}>
              <X size={24} weight="bold" />
            </button>
          </header>

          <h2>Sacola de compras</h2>

          <CartProductsWrapper>
            {bagItems.map(item => (
              <CartProductsContainer key={item.id}>
                <CartProductItem>
                  <CartImageContainer>
                    <Image src={item.imageUrl} width={100} height={93} alt="" />
                  </CartImageContainer>

                  <div>
                    <p>{item.name}</p>

                    <strong>{priceFormatToBRL(item.price / 100)}</strong>

                    <button onClick={() => handleRemoveItemInBag(item.id)}>Remover</button>
                  </div>
                </CartProductItem>
              </CartProductsContainer>
            ))}
          </CartProductsWrapper>

          <CartFooter>
            <p>Quantidade <span>{`${bagItems.length} item(s)`}</span></p>

            <strong>Valor total <span>{priceFormatToBRL(total / 100)}</span></strong>

            <button
              onClick={handleByProduct}
              disabled={isCreatingCheckoutSession}
            >
              Finalizar compra
            </button>
          </CartFooter>
        </CartContainer>
      )}
    </>
  )
}
