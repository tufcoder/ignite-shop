import { useContext } from "react";
import { Handbag } from "@phosphor-icons/react";

import { ProductContext } from "../context/ProductContext";

import { ButtonCartContainer } from "../styles/components/button-cart";

export function ButtonCart() {
  const { handleOpenBag, bagItems, isItemInBag } = useContext(ProductContext)

  function handleClickBag() {
    handleOpenBag(bagItems.length > 0)
  }

  return (
    <ButtonCartContainer
      onClick={handleClickBag}
      data-items={bagItems.length}
      hasItems={bagItems.length > 0}
      disabled={bagItems.length > 0 ? false : true}
    >
      <Handbag size={24} weight="bold" />
    </ButtonCartContainer>
  )
}
