import { useRouter } from "next/router";
import { AppProps } from "next/app";
import Image from "next/image";

import { ProductContextProvider } from "../context/ProductContext";
import { Cart } from "../components/cart";
import { ButtonCart } from "../components/button-cart";

import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg'

import {
  Container,
  Header,
} from "../styles/pages/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isSuccess = router.pathname === '/success'

  return (
    <ProductContextProvider>
      <Container>
        <Header style={{justifyContent: isSuccess ? 'center' : 'space-between'}}>
          <Image src={logoImg} alt="" />

          {!isSuccess && <ButtonCart />}
        </Header>

        <Component {...pageProps} />

        <Cart/>
      </Container>
    </ProductContextProvider>
  )
}
