import { useEffect, useState } from "react";
import { share, compare, heart } from "../../assets/icons";

function ShopProduct() {
  const [data, setData] = useState([]);

  // Fetch the JSON data
  useEffect(() => {
    fetch("/shop.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching shop data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => {
          const discountedPrice = product.discount
            ? product.price - (product.price * product.discount) / 100
            : product.price;

          return (
            <div
              key={product.id}
              className="group border rounded-lg overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300 w-full sm:w-[280px] md:w-[446px] lg:w-[350px] mx-auto"
            >
              {/* Discount Badge */}
              {product.discount > 0 && (
                <span className="absolute top-2 right-2 bg-[#E97171] text-white btn-circle  text-xs font-bold px-2 py-4 rounded-full">
                  -{product.discount}%
                </span>
              )}
              {/* New Badge */}
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-[#2EC1AC] text-white btn-circle text-xs font-bold px-2 py-4 rounded-full">
                  New
                </span>
              )}
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 sm:h-48 md:h-64 lg:h-72 object-cover"
              />
              {/* Product Details */}
              <div className="p-4 bg-[#F4F5F7]">
                <h3 className="text-lg font-semibold text-[#3A3A3A]">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <p className="text-lg font-bold text-gray-800">
                    Rp {discountedPrice.toLocaleString()}
                  </p>
                  {product.discount > 0 && (
                    <p className="text-sm text-gray-500 line-through">
                      Rp {product.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
              {/* Hover Actions */}
              <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="mb-4 bg-white text-[#B88E2F] font-bold py-2 px-4 rounded hover:bg-black">
                  Add to cart
                </button>
                <div className="flex space-x-4">
                  <button className="flex items-center text-white hover:text-gray-300">
                    <img src={share} alt="Share" className="mr-2" /> Share
                  </button>
                  <button className="flex items-center text-white hover:text-gray-300">
                    <img src={compare} alt="Compare" className="mr-2" /> Compare
                  </button>
                  <button className="flex items-center text-white hover:text-gray-300">
                    <img src={heart} alt="Like" className="mr-2" /> Like
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopProduct;
