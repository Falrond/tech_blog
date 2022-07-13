import React, { useEffect, useRef, useState } from "react";
import Post from "./Post";

export default function SearchResults({
  results,
  setExpanded,
  setSearchTerm,
  searchBarRef,
}) {
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (
      !myRef.current.contains(e.target) &&
      e.target !== searchBarRef.current
    ) {
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
      className="absolute top-20 right-0 md:right-10 z-10  bg-neutral w-full md:w-4/12 rounded-2xl"
    >
      <div className="px-6 pb-6">
        {/* <h2 className="text-3xl mb-3">{results.length} Wyniki</h2> */}
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
