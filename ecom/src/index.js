import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { store } from "./store"
import { Provider } from "react-redux"

import { lazy, Suspense } from "react"

const LazyTerms = lazy(() => import("./components/Terms"))
const LazyShopContain = lazy(() => import("./components/ShopContain"))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="text-white text-center text-2xl font-bold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/terms" element={<LazyTerms />} />
          <Route path="/ShopContain" element={<LazyShopContain />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
)
