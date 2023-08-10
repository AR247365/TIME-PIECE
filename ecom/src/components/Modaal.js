import React from "react"
import { closeModal } from "../features/modal/modalSlice"
import { clearCart } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { calculateTotals } from "../features/cart/cartSlice"

const Modaal = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(closeModal())
    dispatch(clearCart())
    dispatch(calculateTotals())
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-80"></div>

      <div className="flex flex-col items-center justify-around bg-black border border-white w-80 max-w-xs rounded-lg py-7  relative z-10">
        <div>
          <h4 className="text-white text-center text-3xl font-semibold">
            Thanks for shopping
          </h4>
        </div>

        <div className="my-4">
          <Link to="/">
            <button
              onClick={handleClick}
              type="button"
              className="transition-all bg-black border w-40 p-2 border-white text-white hover:bg-zinc-700 active:bg-black rounded-md font-semibold"
            >
              Go back to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Modaal
