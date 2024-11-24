

const RelatedProduct = () => {
    const products = [
      {
        id: 1,
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/src/assets/images/image 1.png",
      },
      {
        id: 2,
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: null,
        discount: null,
        image: "/src/assets/images/image 2.png",
      },
      {
        id: 3,
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: "-50%",
        image: "/src/assets/images/image 3.png",
      },
      {
        id: 4,
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        originalPrice: null,
        discount: "New",
        image: "/src/assets/images/product4.png",
      },
    ];
  
    return (
        <>
        <hr></hr>
      <div className="flex items-center justify-center py-8  px-6 lg:px-16">
        <div className="w-full max-w-screen-xl">
          <h2 className="text-center text-2xl lg:text-3xl text-[#000000] font-bold mb-8">
            Related Products
          </h2>
  
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 lg:h-56 object-cover"
                  />
                  {product.discount && (
                    <span
                      className={`absolute top-4 right-4 text-sm font-bold px-2 py-4 btn-circle rounded-full ${
                        product.discount === "New"
                          ? "bg-[#2EC1AC] text-white"
                          : "bg-[#E97171] text-white"
                      }`}
                    >
                      {product.discount}
                    </span>
                  )}
                </div>
  
                {/* Product Details */}
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-[#000000]">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-black">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Show More Button */}
          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-[#B88E2F] bg-[#FFF] text-[#B88E2F] rounded-lg hover:bg-black hover:text-white transition">
              Show More
            </button>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default RelatedProduct;
  