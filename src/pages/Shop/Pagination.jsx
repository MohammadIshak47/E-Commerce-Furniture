import React from "react";

const Pagination = () => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    onClick: () => setActive(index),
    className: `text-sm sm:text-base px-4 py-2 rounded-full ${
      active === index
        ? "bg-gray-800 text-white"
        : "bg-transparent text-gray-600 hover:bg-gray-200"
    }`,
  });

  const next = () => {
    if (active < 5) setActive(active + 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8 py-12">
      {/* Square Button for Previous - Removed */}
     

      {/* Page Numbers */}
      <div className="flex items-center gap-2 sm:gap-3">
        {[1, 2, 3].map((index) => (
          <button
            key={index}
            {...getItemProps(index)}
            className={`w-12 h-12  text-[#000] flex items-center justify-center rounded-md ${
              active === index
                ? "bg-[#B88E2F] text-[#000]"
                : "bg-[#F9F1E7] text-[#000] hover:bg-gray-200"
            }`}
          >
            {index}
          </button>
        ))}
      </div>

      {/* Rectangle Button for Next */}
      <button
        onClick={next}
        disabled={active === 5}
        className="px-6 py-2 rounded-md w-22 h-12 text-gray-600 hover:text-[#000] disabled:text-gray-400 bg-[#F9F1E7] hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
