const Footer = () => {
  return (
    <>
    <hr></hr>
    <footer className="bg-[#FFF] p-10 text-gray-700">
      <div className="container mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Column - Logo and Address */}
          <div>
            <h1 className="text-2xl font-bold mb-4 py-2 ">Funiro.</h1>
            <p className=" text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h6 className="font-bold text-lg mb-2 text-[#9F9F9F]">Links</h6>
            <ul className="py-2 space-y-6 text-[#000]">
              <li className="mb-1">
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-900">
                  Shop
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h6 className="font-bold text-lg mb-2 py-2 text-[#9F9F9F]">Help</h6>
            <ul className="py-2 space-y-6 text-[#000] ">
              <li className="mb-1 ">
                <a href="#" className="hover:text-gray-900">
                  Payment Options
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-900">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="font-bold text-lg mb-2 py-2 text-[#9F9F9F]">
              Newsletter
            </h6>
            <form className="flex flex-col sm:flex-row  items-center  space-y-3 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-2 rounded text-[#000] bg-[#FFF] focus:outline-none focus:ring focus:ring-gray-500 underline "
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="p-2 rounded text-[#000] bg-[#FFF] cursor-pointer hover:bg-gray-700 hover:text-white underline focus:outline-none focus:ring focus:ring-gray-500"
              />
            </form>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-10 border-t border-gray-300 pt-4 ml-2">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
   </>
  );
};

export default Footer;
