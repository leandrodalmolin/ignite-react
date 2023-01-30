import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import tshirt1 from '@/assets/tshirts/1.png'
import tshirt2 from '@/assets/tshirts/2.png'
import tshirt3 from '@/assets/tshirts/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt="" />

        <footer>
          <strong>T-shirt 1</strong>
          <span>£79.90</span>
        </footer>
      </Product>

      <Product>
        <Image src={tshirt2} width={520} height={480} alt="" />

        <footer>
          <strong>T-shirt 2</strong>
          <span>£79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
