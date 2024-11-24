import { carousel1, carousel2 } from "../../assets/images"; // Update paths accordingly
import { rightarrow, vector } from "../../assets/icons"; // Update paths accordingly

const Room = () => {
  return (
    <section className="bg-[#fdf8f4] py-12">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 lg:text-5xl leading-tight">
            50+ Beautiful rooms <br /> inspiration
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our designer already made a lot of beautiful <br /> prototypes of
            rooms that inspire you.
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-yellow-600 hover:bg-yellow-500 font-medium rounded-md shadow-md">
            Explore More
          </button>
        </div>

        {/* Right Section - Carousel */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="relative">
            {/* Main Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={carousel1}
                  alt="Inner Peace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-md">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    01 <img src={vector} alt="vector" /> Bed Room
                  </p>
                  <h3 className="text-xl font-bold text-gray-800">Inner Peace</h3>
                </div>
                <button className="absolute bottom-4 right-4 bg-yellow-600 text-white p-3 rounded-full shadow-md">
                  <img src={rightarrow} alt="Next" />
                </button>
              </div>

              {/* Secondary Image */}
              <div className="overflow-hidden rounded-lg shadow-lg h-[446px]">
                <img
                  src={carousel2}
                  alt="Dining Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
