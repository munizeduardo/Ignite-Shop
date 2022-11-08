import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImagesWrapper, QuantityTooltip, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
    quantity: number
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const [cartQuantity, setCartQuantity] = useState(0)
  const { cartCount, clearCart } = useShoppingCart()

  const totalTshirts = products.reduce((total, products) => total + products.quantity, 0)

  useEffect(() => {
    setCartQuantity(cartCount)
    if (cartQuantity > 0) {
      clearCart()
    }
  }, [cartQuantity, cartCount, clearCart])

  return (
    <>
      <Head>
        <title>Order placed | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesWrapper>
        {products.map((product) => (
          <ImageContainer key={product.name}>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
              {product.quantity > 1 && 
                <QuantityTooltip>
                  {product.quantity}
                </QuantityTooltip>
              }
            
          </ImageContainer>        
        ))}
        </ImagesWrapper>

        <h1>Order placed!</h1>

        <p>
          Yay! <strong>{customerName}</strong>, your {products.length > 1 ?  `${totalTshirts} t-shirts are ` : 't-shirt is ' }  on the way!
        </p>

        <Link href="/">
          Return to the catalog
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map(item => {
    const product = item.price.product as Stripe.Product
    return { name: product.name, imageUrl: product.images[0], quantity: item.quantity }
  })
  

  return {
    props: {
      customerName,
      products
    }
  }
}