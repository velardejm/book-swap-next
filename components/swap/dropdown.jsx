import React, { useState } from "react";

const Dropdown = ({ books, offerredBook, setOfferredBook }) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setOfferredBook(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onClick={toggleDropdown}
      >
        {offerredBook?.title || "Select an option"}
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-32 overflow-y-scroll z-10">
          {books.map((book, index) => (
            <li
              key={index}
              className="cursor-pointer select-none relative py-2 px-4 text-sm text-gray-900 hover:bg-gray-100"
              onClick={() => handleOptionClick(book)}
            >
              {book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
