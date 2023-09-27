import { Form, useLoaderData, Link } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import FormRange from "./FormRange"
import FormCheckbox from "./FormCheckbox"


function Filters() {
   const { meta, params } = useLoaderData()
   const { company, category, shipping, order, price } = params
   console.log(params)
   return (
      <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
         <FormInput
            type="search"
            label="Search Product"
            name="search"
            size="md"
         />

         <FormSelect
            label="Select Category"
            name="category"
            defaultValue={category}
            list={meta.categories}
            size="input-md"

         />

         <FormSelect
            label="Select Company"
            name="company"
            defaultValue={company}
            list={meta.companies}
            size="input-md"
         />

         <FormSelect
            label="Sort By"
            name="order"
            defaultValue={order}
            list={["a-z", "z-a", "highy", "low"]}
            size="input-md"
         />

         <FormRange
            label="select price"
            name="price"
            size="range-md"
            price={price}
         />

         <FormCheckbox
            label="free shipping"
            size="range-sm"
            name="shipping"
            defaultValue={shipping}

         />




         <button type="submit" className="btn btn-primary btn-sm">search</button>
         <Link to="/products" className="btn btn-accent btn-sm">reset</Link>
      </Form>
   )
}

export default Filters