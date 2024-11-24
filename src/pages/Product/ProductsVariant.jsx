import React from "react";
import { facebook, linkedin, twitter, arrow, star } from "../../assets/icons";
import { sofaset2, sofaset21, sofaset31, sofaset41 } from "../../assets/images";

const Breadcrumb = ({ path }) => (
  <nav className="bg-[#F9F1E7] w-full p-4  h-[90px] rounded-lg mb-6">
    <ol className="flex flex-wrap items-center text-sm text-gray-500 container mx-auto py-4">
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <li>
            <a href={item.href} className="hover:text-gray-700">
              {item.label}
            </a>
          </li>
          {index < path.length - 1 && (
            <li>
              <img src={arrow} alt="arrow" className="mx-2" />
              
            </li>
            
          )}
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

const ProductsVariant = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "#", label: " | Asgaard Sofa " },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumb path={breadcrumbs} />

      <div className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col  space-x-4 lg:space-y-4 lg:space-x-0">
              {[sofaset2, sofaset21, sofaset31, sofaset41].map((img, index) => (
                <div
                  key={index}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-[#F9F1E7] rounded-lg overflow-hidden border cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full lg:w-[420px] h-96 mt-4 lg:mt-0 lg:ml-6 rounded-lg overflow-hidden border">
              <img
                src={sofaset2}
                alt="Asgaard Sofa"
                className="w-full h-full object-cover bg-[#F9F1E7]"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-[#000]">Asgaard Sofa</h1>
            <p className="text-lg font-semibold text-gray-700">Rs. 250,000.00</p>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1 text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
              </div>
              <span className="text-sm text-gray-500">(5 Customer Reviews)</span>
            </div>

            {/* Description */}
            <p className="text-gray-600">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio that boosts a clear midrange and extended highs for premium
              sound.
            </p>

            {/* Sizes */}
            <div>
              <h4 className="text-sm font-semibold">Size</h4>
              <div className="flex space-x-2 mt-2">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="border px-4 py-1 rounded hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="text-sm font-semibold">Color</h4>
              <div className="flex space-x-2 mt-2">
                {["bg-blue-500", "bg-black", "bg-yellow-500"].map(
                  (color, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full border ${color}`}
                    ></div>
                  )
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button className="px-4 py-2">-</button>
                <input
                  type="text"
                  value="1"
                  className="w-12 text-center border-l border-r"
                  readOnly
                />
                <button className="px-4 py-2">+</button>
              </div>
              <button className="px-6 py-2 bg-black text-white rounded">
                Add To Cart
              </button>
              <button className="px-6 py-2 border rounded">
                + Compare
              </button>
            </div>

            {/* Extra Info */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>SKU:</strong> SS001
              </p>
              <p>
                <strong>Category:</strong> Sofas
              </p>
              <p>
                <strong>Tags:</strong> Sofa, Chair, Home, Shop
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <strong>Share:</strong>
                <a href="#" className="hover:text-gray-700">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#" className="hover:text-gray-700">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="#" className="hover:text-gray-700">
                  <img src={twitter} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsVariant;
