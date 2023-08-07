import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />

      <div>
        <p className="text-zinc-600 text-3xl text-center font-semibold">
          Disclaimer
        </p>
        <br />
        <p className="text-zinc-600 text-center font-semibold">
          This website is for educational and practice purposes only. The
          product images & product names used are for demonstration purposes and
          belong to their respective owners. This website is not affiliated
          with, endorsed by, or sponsored by Jacob & Co. or any other brand.
        </p>
      </div>
      <br />
      <p className="text-zinc-600 text-center ">
        <Link to="/Terms" className="hover:text-zinc-400 active:bg-black">
          Terms of Use
        </Link>
      </p>
      <br />
      <br />
    </>
  )
}

export default Footer
