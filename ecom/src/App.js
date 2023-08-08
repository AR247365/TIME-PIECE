import React from "react"
import Navbar from "./components/Navbar"
import ProdContain from "./components/ProdContain"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import { useSelector } from "react-redux"

function App() {
  const { isOpen } = useSelector((state) => state.modal)
  return (
    <div>
      <div>
        {isOpen && <Modal />}
        <Navbar />
        <ProdContain />
        <Footer />
      </div>
    </div>
  )
}

export default App
