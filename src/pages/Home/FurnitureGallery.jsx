import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
} from "../../assets/images";

const FurnitureGallery = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Share your setup with
          <span className="text-black font-bold"> #FuniroFurniture</span>
        </h2>

        {/* Gallery */}
        <div className="mt-8 grid grid-cols-12 lg:grid-cols-4 md:grid-cols-4 gap-2">
          

         
          {/* First Row */}
          <img
            src={gallery1}
            alt="Furniture 1"
            className="  rounded-lg shadow-md w-[120px] h-[382px] object-cover"
          />
          <img
            src={gallery2}
            alt="Furniture 2"
            className="col-span-2 rounded-lg shadow-md w-full h-[400px] object-cover"
          />
          <img
            src={gallery3}
            alt="Furniture 3"
            className="col-span-2 rounded-lg shadow-md w-full h-[300px] object-cover"
          />

          {/* Second Row */}
          <img
            src={gallery4}
            alt="Furniture 4"
            className="col-span-2 row-span-1 rounded-lg shadow-md w-full h-[300px] object-cover"
          />
          <img
            src={gallery5}
            alt="Furniture 5"
            className="col-span-2 rounded-lg shadow-md w-full h-full object-cover"
          />
          <img
            src={gallery6}
            alt="Furniture 6"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />

          {/* Third Row */}
          <img
            src={gallery7}
            alt="Furniture 7"
            className="col-span-2   rounded-lg shadow-md w-full h-full object-cover"
          />
          <img
            src={gallery8}
            alt="Furniture 8"
            className=" rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FurnitureGallery;
