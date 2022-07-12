import React, { useEffect, useRef, useState } from "react";
import Post from "./Post";

export default function SearchResults({ results, setExpanded, setSearchTerm }) {
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setExpanded(false);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div
      ref={myRef}
      className="absolute top-20 right-0 md:right-10 z-10 border-4 border-gray-500 w-full md:w-6/12 rounded-2xl"
    >
      <div className="p-10">
        <h2 className="text-3xl mb-3">{results.length} Results</h2>
        {results.map((result, index) => (
          <Post
            key={index}
            post={result}
            compact={true}
            setExpanded={setExpanded}
            setSearchTerm={setSearchTerm}
          />
        ))}
      </div>
    </div>
  );
}
