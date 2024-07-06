import React, { useState } from "react";

const Dropdown = ({}) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onClick={toggleDropdown}
      >
        {selectedOption || "Select an option"}
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-32 overflow-y-scroll z-10">
          {options.map((option) => (
            <li
              key={option}
              className="cursor-pointer select-none relative py-2 px-4 text-sm text-gray-900 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {/* {option === selectedOption && (
                <svg
                  className="absolute inset-y-0 right-0 mr-3 h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 12l-4-4 1.5-1.5L9 9.086l6.5-6.5L17 5l-8 8z"
                    clipRule="evenodd"
                  />
                </svg>
              )} */}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
