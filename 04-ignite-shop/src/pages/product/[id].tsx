import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Stripe from "stripe"

interface ProductsProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        description: string;
        price: string;
    }
}

export default function Product({ product }: ProductsProps) {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button>Buy now</button>
            </ProductDetails>
        </ProductContainer>
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
        fallback: false
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
                }).format(price.unit_amount ? price.unit_amount / 100 : 0)
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}