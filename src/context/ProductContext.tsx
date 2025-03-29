import { createContext, ReactNode, useState } from "react";

export type ProductType = {
  id: string
  name: string
  imageUrl: string
  price: number
  blurDataUrl: string
  defaultPriceId?: string
}

export type ProductContextType = {
  isBagOpen: boolean,
  handleOpenBag: (value: boolean) => void,
  bagItems: ProductType[],
  handleAddItemInBag: (product: ProductType) => void
  handleRemoveItemInBag: (id: string) => void
  isItemInBag: (product: ProductType) => boolean
}

export const ProductContext = createContext({} as ProductContextType)

interface ProductContextProviderProps {
  children: ReactNode
}

export function ProductContextProvider(
  { children }: ProductContextProviderProps
) {
  const [isBagOpen, setIsBagOpen] = useState(false)
  const [bagItems, setBagItems] = useState<ProductType[]>([])

  function handleOpenBag(value: boolean) {
    setIsBagOpen(value)
  }

  function isItemInBag(product: ProductType) {
    return bagItems.find(item => item.id === product.id) ? true : false
  }

  function handleAddItemInBag(product: ProductType) {
    setBagItems(state => {
      const existingItem = state.find(item => item.id === product.id)

      if (!existingItem) {
        return [...state, product]
      }

      return state
    })
  }

  function handleRemoveItemInBag(id: string) {
    setBagItems(state => state.filter(item => item.id !== id))
  }

  return (
    <ProductContext.Provider
      value={{
        isBagOpen,
        handleOpenBag,
        bagItems,
        handleAddItemInBag,
        handleRemoveItemInBag,
        isItemInBag,
      }}
    >
      { children }
    </ProductContext.Provider>
  )
}
