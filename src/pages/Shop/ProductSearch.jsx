
import { filter,biground,viewlist } from "../../assets/icons";

const ProductSearch = () => {
  return (
    <div className="flex flex-wrap items-center  justify-between p-4 bg-[#F9F1E7] border-b border-gray-200">
      {/* Left Section */}
      <div className="flex items-center mx-32  gap-4">
        <div className="flex items-center gap-2  text-sm text-[#000] px-3 py-2  hover:bg-gray-100">
          <img src={filter}/>
          Filter
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded hover:bg-gray-200">
            <img src={biground}/>
          </button>
          <button className="p-2 rounded hover:bg-gray-200">
           <img src={viewlist}/>
          </button>
          
        </div>
        |
        <div className="text-sm text-gray-700 ">
     
        Showing <span className="font-semibold">1–16</span> of{" "}
        <span className="font-semibold">32</span> results
      </div>
      </div>

      {/* Center Section */}
      

      {/* Right Section */}
      <div className="flex items-center text-[#000] gap-4 mx-32">
        <div className="flex items-center  gap-2">
          <span className="text-sm ">Show</span>
          <select
            className="text-sm border-gray-300 rounded-md shadow-sm bg-[#FFF] h-[40px] w-[60px] focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Sort by</span>
          <select
            className="text-sm border-gray-300 bg-[#FFF] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-[40px]"
          >
            <option value="default">Default</option>
            <option value="price_low_to_high">Price: Low to High</option>
            <option value="price_high_to_low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
