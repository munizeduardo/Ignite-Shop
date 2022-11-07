import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Head from 'next/head'
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { Handbag } from 'phosphor-react'
import { HomeContainer, Product } from "../styles/pages/home"

import Link from "next/link"
import { useShoppingCart } from "use-shopping-cart"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    formattedPrice: string
    price: number
    currency: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (       
              <Product
                className="keen-slider__slide"
                key={product.id}
              >
                <Link href={`/product/${product.id}`}  prefetch={false}>
                  <Image src={product.imageUrl} width={520} height={480} alt="" />
                </Link>

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.formattedPrice}</span>
                  </div>
                  <button onClick={() => addItem(product)}>
                    <Handbag size={32} color="white" weight="bold" />
                  </button>
                </footer>
              </Product>           
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      formattedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      price: price.unit_amount,
      currency: price.currency
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
