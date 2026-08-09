import Header from "../components/Header";

const View = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <div>
            <img
              width={"350px"}
              height={"250px"}
              src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
              alt=""
            />
            <div className="flex justify-between items-center mt-5">
                <button className="bg-blue-700 text-white p-2 rounded">Add to Wishlist</button>
                <button className="bg-green-700 text-white p-2 rounded mr-5">Add to Cart</button>
              </div>
          </div>
          <div>
            <h3 className="font-bold">PID: id</h3>
            <h1 className="font-bold text-5xl">Title</h1>
            <h4 className="font-bold text-2xl text-red-600">$ 230</h4>
            <h4 className="font-bold">Brand: Brand</h4>
            <h4 className="font-bold">Category: Category</h4>
            <p>
              <span className="font-bold">Description </span> : Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Libero eveniet
              consequuntur, officia reprehenderit obcaecati minima eos
              asperiores dolorem repellat architecto nam accusantium itaque
              debitis repellendus eum corrupti at officiis quo?
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
