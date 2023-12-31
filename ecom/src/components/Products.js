import React from "react"
import { useDispatch } from "react-redux"
import { addToCart, calculateTotals } from "../features/cart/cartSlice"
import { openModal } from "../features/modal/modalSlice"

function Products({ id, title, price, img, mrp }) {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, img, amount: 1, mrp }))
    dispatch(calculateTotals())
    dispatch(openModal())
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
                Brand Name
              </h1>
              <h1 className="text-white text-center mt-1 font-semibold h-8 ">
                {title}
              </h1>
              <p className="text-center text-white pt-0 mt-0 font-semibold">
                ${mrp}
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className=" transition-all font-semibold border-2 border-white py-2 px-4 bg-black text-white rounded hover:bg-zinc-700 active:bg-black disabled:opacity-50 mt-4 w-full flex items-center justify-center"
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
