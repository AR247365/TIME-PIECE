import React from "react"
import { closeModal } from "../features/modal/modalSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black border border-white w-80 max-w-xs rounded-lg p-6">
        <h4 className="mb-4 text-white text-center text-lg font-semibold">
          ITEM ADDED TO CART
        </h4>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="bg-black border border-white text-white hover:bg-primary-light py-2 px-4 rounded-md font-semibold"
          >
            CONTINUE SHOPPING
          </button>
          <Link to="/ShopContain">
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="bg-black border border-white text-white hover:bg-red-light py-2 px-4 rounded-md font-semibold"
            >
              GO TO CART
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Modal
