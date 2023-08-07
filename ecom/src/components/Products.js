import React from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"

function Products({ id, title, price, img, amount, mrp }) {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, img, amount: 1, mrp }))
  }
  return (
    <>
      <div>
        <div>
          <div className="p-4">
            <div
              className="w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                paddingTop: "100%", // Maintain 1:1 aspect ratio
                maxWidth: "100%",
              }}
            ></div>
            <div className="mt-3">
              <h1 className="text-white text-center font-semibold">
                Jacob & Co.
              </h1>
              <h1 className="text-white text-center mt-1 font-semibold h-12 overflow-hidden">
                {title}
              </h1>
              <p className="text-center text-white pt-0 mt-0 font-semibold">
                ${mrp}
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className="font-semibold border-2 border-white py-2 px-4 bg-black text-white rounded hover:bg-zinc-700 active:bg-black disabled:opacity-50 mt-4 w-full flex items-center justify-center"
            >
              Add to cart
            </button>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Products
