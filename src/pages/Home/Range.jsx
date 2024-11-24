import React, { useEffect, useState } from "react";

const Range = () => {
  const [categories, setCategories] = useState([]);

  // Fetch data from JSON API
  useEffect(() => {
    fetch("/categories.json") // Assuming this is served from the public folder
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Browse The Range</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center items-center mt-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col justify-between items-center rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-4 aspect-h-5 w-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <h2 className="w-full text-lg font-medium text-gray-800 items-center text-center bg-white space-x-4 py-3">
                  {category.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Range;
