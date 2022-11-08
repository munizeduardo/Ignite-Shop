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

interface HomeProductProps {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  defaultPriceId: string,
  currency: string,
  formattedPrice: string
}

interface HomeProps {
  products: HomeProductProps[]
}



export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  async function handleAddItem(product: HomeProductProps) {
    addItem({
      price: product.price,
      currency: product.currency,
      id: product.defaultPriceId,
      sku: product.id,
      name: product.name,
      image: product.imageUrl
    })
  }

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
                  <button onClick={() => handleAddItem(product)}>
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
      currency: price.currency,
      description: product.description,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
