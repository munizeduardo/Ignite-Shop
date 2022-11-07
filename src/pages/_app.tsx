import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { Handbag, X } from 'phosphor-react'
import logoImg from '../assets/logo.svg'
import Image from "next/image";

import { Container, Header } from "../styles/pages/app";
import { CartProvider } from "use-shopping-cart";
import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCart } from "../components/ShoppingCart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const stripeKey = process.env.STRIPE_PUBLIC_KEY

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
    >
      <Container>
        <Dialog.Root>
          <Header>
            <Image src={logoImg} alt="" />
            
              <Dialog.Trigger>
                <Handbag size={32} color="white" weight="bold" />
              </Dialog.Trigger>
            
          </Header>

          <Component {...pageProps} />
          <ShoppingCart />
        </Dialog.Root>
      </Container>
    </CartProvider>
  )
}
