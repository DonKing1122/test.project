'use client';

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <input
      value={input}
      onChange={e => {
        setInput(e.target.value);
        onSearch(e.target.value);
      }}
      type="text"
      placeholder="Search"
      className="border w-[200px] p-1"
    />
  );
}
