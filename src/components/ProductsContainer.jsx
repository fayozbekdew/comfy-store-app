import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import { BsFillGridFill, BsList } from "react-icons/bs"

function ProductsContainer() {
   const { meta } = useLoaderData()
   const totalProducts = meta.pagination.total

   const [layout, setLayout] = useState('grid')

   const setActiveStyles = (pattern) => {
      return `text btn btn-circle text-sm ${pattern === layout
         ? "btn-primary btn-primary-content"
         : "btn-ghost btn-base-content"
         }`
   }
   return (
      <>
         <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
            <h4 className="font-medium text-md">{totalProducts} product{totalProducts > 1 && "s"}</h4>
            <div className="flex gap-x-2">
               <button type="button" className={setActiveStyles("grid")} onClick={() => { setLayout("grid") }}><BsFillGridFill /></button>
               <button type="button" className={setActiveStyles("list")} onClick={() => { setLayout("list") }}><BsList /></button>
            </div>
         </div>
         {totalProducts === 0
            ? (<div className="text-2xl mt-16 font-bold">Sorry, no product matched your search </div>)
            : layout === "grid"
               ? (<ProductsGrid />)
               : (<ProductsList />)
         }

      </>
   )
}

export default ProductsContainer