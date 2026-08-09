import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />

      <div style={{paddingTop:"100px",backgroundColor:"beige"}} className='container px-4 mx-auto'>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded border border-red-800 p-2 shadow shadow-red-800">
            <img width={'100%'} height={'200px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
            <div className="text-center">
              <h3 className="text-xl font-bold">Title</h3>
              <Link to={'/id/view'} className='bg-red-800 text-white p-2 rounded inline-block mt-2 '>View More...</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home