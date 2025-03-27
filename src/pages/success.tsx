import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efeturada</h1>

      <ImageContainer></ImageContainer>

      <p>
        Lorem <strong>ipsum dolor sit amet</strong> consectetur <strong>adipisicing</strong> elit. Officiis possimus modi sed, voluptates maiores iusto impedit, obcaecati porro laudantium ea minima, architecto quis commodi? Saepe, alias? Similique quia natus cum.
      </p>

      <Link href="">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}
