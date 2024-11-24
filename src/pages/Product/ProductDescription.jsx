
import React, { useState } from "react";
import { sofa1,sofa2 } from "../../assets/images";
const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white p-6 lg:p-12">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-6 border-b pb-4">
        {["Description", "Additional Information", "Reviews [5]"].map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-2 text-sm lg:text-base font-semibold ${
              activeTab === tab.toLowerCase()
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "description" && (
          <div className="space-y-6 mx-12">
            <p className="text-sm lg:text-base text-[#9F9F9F] mx-16 tracking-wide leading-loose">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable
              active stereo speaker takes the unmistakable look and sound of Marshall,
              unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-sm lg:text-base text-[#9F9F9F] mx-16 tracking-wide leading-loose">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
              engineering. Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
              a clear midrange and extended highs for a sound that is both articulate and
              pronounced. The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap enables easy and
              stylish travel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden border border-gray-200 bg-[#F9F1E7]">
                <img
                  src={sofa1}
                  alt="Sofa 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200 bg-[#F9F1E7]">
                <img
                  src={sofa2}
                  alt="Sofa 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "additional information" && (
          <div className="text-sm lg:text-base text-gray-700">
            <p>Additional product specifications and details will be displayed here.</p>
          </div>
        )}

        {activeTab === "reviews [5]" && (
          <div className="text-sm lg:text-base text-gray-700">
            <p>Customer reviews and feedback will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
