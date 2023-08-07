import React from "react"
import { useSelector, useDispatch } from "react-redux"
import ShopProd from "./ShopProd"
import { Link } from "react-router-dom"
import { clearCart } from "../features/cart/cartSlice"
import { useEffect } from "react"

import { calculateTotals } from "../features/cart/cartSlice"

const ShopContain = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  if (amount < 1) {
    return (
      <section className="grid place-items-center h-screen">
        {/* cart header */}
        <header>
          <h2 className="text-white text-center font-black text-4xl">
            Your cart is currently empty
          </h2>
          <div className="text-center mt-4">
            <button className="font-semibold border-2 border-white py-2 px-4 bg-black text-white rounded hover:bg-zinc-700 active:bg-black disabled:opacity-50">
              <Link to="/">Go back to Homepage</Link>
            </button>
          </div>
        </header>
      </section>
    )
  }
  return (
    <section>
      <nav className=" ">
        <div className="  m-1 p-3 max-w-4xl w-full mx-auto flex justify-between items-center">
          <h3 className="text-4xl min-[350px]:text-5xl font-bold text-white">
            Your cart
          </h3>
          <div className="relative">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=" w-7 h-7 min-[350px]:w-10 min-[350px]:h-10  stroke-white active:stroke-zinc-600 hover:stroke-zinc-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      <hr className=" mb-3" />
      {/* cart items */}
      <main>
        <div>
          {cartItems.map((item) => {
            return <ShopProd key={item.id} {...item} />
          })}
        </div>
        <hr className=" mb-10" />
        {/* cart footer */}
        <footer className="m-10">
          <div className=" flex justify-around">
            <h4 className="text-white text-xl font-medium">Total</h4>
            <span className="text-white text-xl font-medium ">${total}</span>
          </div>
          <div className="flex justify-center m-5">
            <button
              onClick={() => {
                dispatch(clearCart())
              }}
              className="text-white text-xl font-medium border hover:bg-zinc-700 active:bg-black rounded-xl border-white m-2 p-2"
            >
              Clear cart
            </button>
          </div>
        </footer>
      </main>
    </section>
  )
}

export default ShopContain