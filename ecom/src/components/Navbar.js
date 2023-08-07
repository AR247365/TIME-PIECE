import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart)
  const [cartItemCount, setCartItemCount] = useState(amount)
  useEffect(() => {
    setCartItemCount(amount)
  }, [amount])
  return (
    <>
      <nav className=" ">
        <div className="  m-1 p-3 max-w-4xl w-full mx-auto flex justify-between items-center">
          <h3 className="text-3xl min-[350px]:text-4xl font-bold text-white">
            Redux Toolkit
          </h3>
          <div className="relative">
            <Link to="/ShopContain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=" w-8 h-8 min-[350px]:w-10 min-[350px]:h-10  stroke-white active:stroke-zinc-600 hover:stroke-zinc-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
            <div className="absolute top-[-0.375rem] right-[-0.375rem] w-4 h-4 rounded-full bg-primary-light flex items-center justify-center">
              <p className="text-base font-semibold min-[350px]:text-xl text-white">
                {cartItemCount}
              </p>
            </div>
          </div>
        </div>
      </nav>
      <hr />
      <h1 className="text-white m-4 mb-6 text-center font-medium text-2xl min-[380px]:text-3xl  min-[480px]:text-4xl">
        TIMEPIECES
      </h1>
      <br />
    </>
  )
}

export default Navbar
