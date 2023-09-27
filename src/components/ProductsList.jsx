import { useLoaderData, Link } from "react-router-dom"
import { formatPrice } from "../utils"

function ProductsList() {
   const { products } = useLoaderData()
   return (
      <div className="mt-12 grid gap-y-8">
         {products.map((product) => {
            const { title, image, price, company } = product.attributes
            const dollarAmount = formatPrice(price)
            return (
               <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 group"
               >
                  <img
                     src={image}
                     alt={`${title} image`}
                     className="h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300 rounded-lg"
                  />
                  <div className="ml-0 sm:ml-16">
                     <h3 className="capitalize font-medium text-lg">{title}</h3>
                     <h4 className="capitalize font-medium text-lg text-neutral-content">{company}</h4>
                  </div>
                  <p className="font-medium ml-0 sm:ml-auto text-lg">{dollarAmount}</p>


               </Link>
            )
         })}
      </div>
   )
}

export default ProductsList