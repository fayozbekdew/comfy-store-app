import { Hero } from "../components"
import { customFetch } from "../utils"
import { FeaturedProducts } from "../components"

const url = "/products?featured=true"

export const loader = async () => {
   const request = await customFetch(url)
   const products = request.data.data
   return { products }
}

function Landing() {

   return (
      <>
         <section className="py-20">
            <Hero />
            <FeaturedProducts />
         </section>
      </>
   )
}

export default Landing