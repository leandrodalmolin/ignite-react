import Head from "next/head";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import Link from "next/link";
import { stripe } from '@/lib/stripe';

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { GetStaticProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
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
            /** 
             * 1. NextJS prefetches all visible links in the viewport so it can be
             *    quickly loaded when such link is clicked. If the current page have multiples links,
             *    this behaviour can cause performance issues. Setting prefetch as false will only
             *    prefetch data when the link is hovered.
             */
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false} // [1]
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
      }).format(price.unit_amount ? price.unit_amount / 100 : 0)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}