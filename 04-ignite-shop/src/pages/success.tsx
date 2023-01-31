import { ImageContainer } from "@/styles/pages/success";
import { SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Thank you for your order!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Woohoo <strong>Leandro</strong>, your <strong>t-shirt</strong> is already on its way.
            </p>

            <Link href="/">Back to catalog</Link>
        </SuccessContainer>
    )
}