import React from "react"
import { removeItem, increase, decrease } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"

const ShopProd = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()

  return (
    <div className="mx-3 md:mx-0 mb-8 flex flex-col md:flex-row justify-center md:justify-between items-center p-4 md:p-6">
      {/* Image */}
      <div className="w-52 h-52  mb-4 md:mb-0">
        <img src={img} alt={title} className="w-full h-full object-cover " />
      </div>

      {/* Title, Amount, and Plus/Minus */}
      <div className="flex-1">
        <h4 className="text-white text-lg ml-4 sm:text-xl font-semibold text-center md:text-left my-1 md:my-0">
          {title}
        </h4>
        <div className="flex items-center md:ml-4 justify-center md:justify-start space-x-2 my-2 md:my-0">
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id))
                return
              }
              dispatch(decrease({ id }))
            }}
            className="p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6"
              />
            </svg>
          </button>
          <p className="text-white text-sm sm:text-base font-semibold">
            {amount}
          </p>
          <button onClick={() => dispatch(increase({ id }))} className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-center md:text-right">
        <h4 className="text-white text-lg sm:text-xl font-semibold">
          ${price}
        </h4>
      </div>
    </div>
  )
}

export default ShopProd
