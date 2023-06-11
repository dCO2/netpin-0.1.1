'use client'; 
import { useState } from "react";
import { Input } from 'antd';

const { Search } = Input;

interface PageProps{
  params: {
    SearchEnabled: boolean;
  }
}

export default function Search_({params}: PageProps) {
  const [query, setQuery] = useState("");

  async function onSearch() {
    setQuery("");
  }

  return (
    <Search
      placeholder="search notes..."
      onSearch={onSearch}
      className="ml-auto w-1/2"
      disabled={!params.SearchEnabled}
    />
  );
}
