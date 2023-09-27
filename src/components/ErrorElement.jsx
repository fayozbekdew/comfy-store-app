import { useRouteError } from "react-router-dom";

import React from 'react'

function ErrorElement() {
   const error = useRouteError()
   console.log(error)
   return (
      <div className="text-4xl font-bold text-center">There was an error...</div>
   )
}

export default ErrorElement