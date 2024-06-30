"use client";
import { useState, useEffect } from "react";

export default function Form({ ...props }) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    let inputFields = [];

    for (const prop in props) {
      inputFields.push(prop);
    }

    setFields(inputFields);
  }, []);

  return (
    <>
      <ul>
        {fields.map((field) => (
          <li>{field}</li>
        ))}
      </ul>
    </>
  );
}
