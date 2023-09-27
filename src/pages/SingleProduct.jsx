import { useLoaderData } from "react-router-dom"
import { formatPrice, customFetch, generateAmountOptions } from "../utils"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../features/cart/cartSlice"

export const loader = async ({ params }) => {
   const request = await customFetch(`/products/${params.id}`)
   console.log(request.data.data)
   return { product: request.data.data }
}

function SingleProduct() {
   const { product } = useLoaderData()
   const { image, title, price, description, colors, company } = product.attributes
   const [productColor, setProductColor] = useState(colors[0])
   const dollarAmount = formatPrice(price)

   const [amount, setAmount] = useState(1)
   const handleAmount = (e) => {
      setAmount(parseInt(e.target.value))
   }

   const dispatch = useDispatch()

   const cartProduct = {
      cartId: product.id + productColor,
      productID: product.id,
      image,
      title,
      price,
      amount,
      productColor,
      company
   }

   const addToCart = () => {
      dispatch(addItem(cartProduct))
   }
   return (
      <section className="my-20">
         <div className="text-md breadcrumbs">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/products">Products</Link>
               </li>
            </ul>
         </div>
         <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:w-full lg:gap-x-16">
            <img src={image} alt={`${title} image`} className="lg:w-full w-96 h-96 rounded-lg object-cover" />
            <div>
               <h1 className="capitalize text-3xl font-bold">{title}</h1>
               <h3 className="text-xl text-neutral-content mt-2 font-bold">{company}</h3>
               <p className="mt-3 text-xl">{dollarAmount}</p>
               <p className="mt-6 leading-8">{description}</p>
               <div className="form-control w-full max-w-xs">
                  <div className="flex flex-col gap-y-5 text-md font-medium tracking-wider capitalize">
                     <span>Colors:</span>
                     <span>
                        {colors.map((color) => {
                           return (
                              <button
                                 key={color}
                                 type="button"
                                 className={`badge h-6 w-6 mr-2 ${color === productColor && "border-2 border-secondary"
                                    }`}
                                 style={{ background: color }}
                                 onClick={() => {
                                    setProductColor(color);
                                 }}
                              ></button>
                           );
                        })}
                     </span>
                  </div>
               </div>
               <div className="form-control mb-5">
                  <label htmlFor="" className="label">
                     <h4 className="text-md font-medium tracking-wider capitalize">
                        Amount:
                     </h4>
                  </label>
                  <select
                     id="amount"
                     value={amount}
                     className="select select-secondary select-bordered select-md"
                     onChange={handleAmount}
                  >
                     {generateAmountOptions(10)}
                  </select>
               </div>
               <button className="btn btn-primary" onClick={addToCart}>add to bag</button>
            </div>
         </div>
      </section>
   )
}

export default SingleProduct