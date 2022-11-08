import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { Container } from "../styles/pages/app";
import { CartProvider } from "use-shopping-cart";
import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCart } from "../components/ShoppingCart";
import { Header } from "../components/Header";

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
          <Header />

          <Component {...pageProps} />
          <ShoppingCart />
        </Dialog.Root>
      </Container>
    </CartProvider>
  )
}
