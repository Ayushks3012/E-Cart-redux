import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <>
    <Header/>

    <div style={{paddingTop:"100px"}} className="px-5">
      
      <h1 className="text-4xl font-bold text-red-600 text-center mb-5">My Wishlist</h1>

      <div className="grid grid-cols-4 gap-4">
          <div className="rounded border border-red-800 p-2 shadow shadow-red-800">
            <img width={'100%'} height={'200px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
            <div className="text-center">
              <h3 className="text-xl font-bold">Title</h3>
              <div className="flex justify-evenly items-center mt-3">
                <button className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                <button className='text-xl'><i className="fa-solid fa-cart-plus text-green-600"></i></button>
              </div>
            </div>

          </div>
      </div>
      
    </div>
    </>
  )
}

export default Wishlist