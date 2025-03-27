import { useRouter } from "next/router"

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aut harum sequi accusamus? Debitis officiis libero vitae, illum nemo illo, vero optio sequi repellendus architecto dignissimos numquam corporis consequuntur consectetur?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
