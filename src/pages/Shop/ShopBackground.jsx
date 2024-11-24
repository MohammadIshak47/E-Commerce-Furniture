
import { contact } from "../../assets/images"
import ProductSearch from "./ProductSearch"



const ShopBackground = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center"
        style={{
          backgroundImage: `url(${contact})`,
          height: "400px",
        }}
      >
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-transparent">
        
          <h2 className="text-4xl font-semibold text-[#000]">Shop</h2>
          <h4 className="font-medium breadcrumbs text-md">
            <ul className="flex gap-2 text-sm text-black">
              <li>
                <a href="#" className="hover:underline text-xl">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
            </ul>
          </h4>
        </div>
      </div>


    </>
  )
}

export default ShopBackground
