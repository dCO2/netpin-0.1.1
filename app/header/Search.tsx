'use client'; 
import { useState } from "react";
import { Input } from 'antd';

const { Search } = Input;

export default function Search_() {
  const [query, setQuery] = useState("");

  async function onSearch() {
    // e.preventDefault();
    setQuery("");
  }

  return (
    <Search
      placeholder="Search Notes..."
      onSearch={onSearch}
      className="ml-auto w-1/2"
    />
  );
}
