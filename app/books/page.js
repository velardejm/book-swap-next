"use client";

import { useBookContext } from "../context";

export default function Books() {
  const myBooks = useBookContext();
  console.log(myBooks);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">My Books</h1>
      <ul className="flex flex-col items-center">
        {myBooks.map((book, index) => {
          const { title } = book;
          return (
            <li className="mb-2" key={index}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Swap</button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
