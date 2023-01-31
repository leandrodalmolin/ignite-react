import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>T-shirt X</h1>
                <span>£10.00</span>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente corporis, vel sint est libero odio harum similique? Cupiditate, incidunt asperiores, commodi error, amet sapiente doloremque sit deleniti nesciunt omnis maiores?</p>

                <button>Buy now</button>
            </ProductDetails>
        </ProductContainer>
    )
}