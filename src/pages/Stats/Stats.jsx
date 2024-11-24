import React from "react";
import { trophy, guarantee, shipping, support } from "../../assets/icons";


const Stats = () => {
  const stats = [
    {
      icon: trophy,
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      icon: guarantee,
      title: "Warranty Protection",
      subtitle: "Over 2 years",
    },
    {
      icon: shipping,
      title: "Free Shipping",
      subtitle: "Order over 150 $",
    },
    {
      icon: support,
      title: "24 / 7 Support",
      subtitle: "Dedicated support",
    },
  ];

 
  return (
    <div className="bg-[#FAF3EA] py-12 w-full font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-2 grid gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <img
                src={stat.icon}
                alt={`${stat.subtitle} Icon`}
                className="w-12 h-12"
              />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-gray-800 text-xl sm:text-2xl font-bold">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium mt-1">
                {stat.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
