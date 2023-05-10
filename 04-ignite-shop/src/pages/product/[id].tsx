import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import Stripe from "stripe"

interface ProductsProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        description: string;
        price: string;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductsProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true);
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            });

            const { checkoutUrl } = response.data;
            window.location.href = checkoutUrl;
        } catch (error) {
            setIsCreatingCheckoutSession(false);
            alert('Checkout redirection failed!');
        }
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>{product.description}</p>
                    <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Buy now</button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        /**
         * Possible strategy:
         * Fetch and build static pages only for the most popular products
         * and leave the fallback to handle the rest of the pages,
         * building static versions when the page is visited.
         */
        paths: [
            { params: { id: 'prod_NGVqzP69NNs4zx' } }
        ],
        /**
         * In case no static page is available, these are the fallback options:
         * 
         * - false: show 404
         * - true: generate static page on the go. During the page load,
         *   you can show placeholders (skeleton screens) using "isFallback"
         *   from useRouter hook in the "getStaticProps" function
         * - 'blocking': does not show anything until the full page is loaded
         */
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        }
    }

    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                description: product.description,
                price: new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP'
                }).format(price.unit_amount ? price.unit_amount / 100 : 0),
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}