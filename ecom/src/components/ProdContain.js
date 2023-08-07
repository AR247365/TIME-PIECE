import React from "react"
import Products from "./Products"
import cartItems from "../cartItems" // Import your product data

function ProdContain() {
  return (
    <div>
      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 min-[940px]:grid-cols-4">
        {cartItems.map((item) => (
          <Products key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ProdContain
