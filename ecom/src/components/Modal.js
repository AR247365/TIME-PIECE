// import React from "react"
// import { closeModal } from "../features/modal/modalSlice"
// import { useDispatch } from "react-redux"
// import { Link } from "react-router-dom"

// const Modal = () => {
//   const dispatch = useDispatch()
//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       {/* Background overlay */}
//       <div className="fixed inset-0 bg-black opacity-80"></div>

//       <div className="flex flex-col items-center justify-around bg-black border border-white w-80 max-w-xs rounded-lg py-8 relative z-10">
//         <div>
//           <h4 className="text-white text-center text-2xl font-semibold">
//             Item added to cart
//           </h4>
//         </div>

//         <div className="mt-4">
//           <button
//             onClick={() => dispatch(closeModal())}
//             type="button"
//             className="bg-black border w-40 p-2 border-white text-white hover:bg-zinc-700 active:bg-black rounded-md font-semibold"
//           >
//             Continue shopping
//           </button>
//         </div>

//         <div className="mt-3">
//           <Link to="/ShopContain">
//             <button
//               onClick={() => dispatch(closeModal())}
//               type="button"
//               className="bg-black border w-40 p-2 border-white text-white hover:bg-zinc-700 active:bg-black rounded-md font-semibold"
//             >
//               Go to cart
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal

import React from "react"
import { closeModal } from "../features/modal/modalSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-80"></div>

      <div className="  flex flex-col items-center justify-around bg-black border border-white w-80 max-w-xs rounded-lg py-8 relative z-10">
        <div>
          <h4 className="text-white text-center text-2xl font-semibold">
            Item added to cart
          </h4>
        </div>

        <div className="mt-4">
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="transition-all bg-black border w-40 p-2 border-white text-white hover:bg-zinc-700 active:bg-black rounded-md font-semibold"
          >
            Continue shopping
          </button>
        </div>

        <div className="mt-3">
          <Link to="/ShopContain">
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="transition-all bg-black border w-40 p-2 border-white text-white hover:bg-zinc-700 active:bg-black rounded-md font-semibold"
            >
              Go to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Modal
