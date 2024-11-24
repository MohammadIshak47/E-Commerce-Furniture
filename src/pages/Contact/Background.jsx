import { contact, image1 } from "../../assets/images";

const Background = () => {
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
          <img
            src={image1}
            alt="Description of Image"
            className="w-20 h-20 rounded-full object-cover"
          />
          <h2 className="text-4xl font-semibold text-black">Contact Us</h2>
          <h4 className="font-medium breadcrumbs text-md">
            <ul className="flex gap-2 text-sm text-black">
              <li>
                <a href="#" className="hover:underline text-xl">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Background;
