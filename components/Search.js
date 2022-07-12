import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResults from "./SearchResults";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [expanded, setExpanded] = useState(false);

  function close() {
    setExpanded(false);
  }

  function expand() {
    if (searchTerm !== "") setExpanded(true);
  }

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === "") {
        setSearchResults([]);
        setExpanded(false);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);
        const results = await res.json();
        setSearchResults(results);
        setExpanded(true);
      }
    };
    getResults();
  }, [searchTerm]);

  return (
    <div className="relative  p-4">
      <div className="container mx-auto flex item-center justify-center md:justify-end">
        <div className="relative text-gray-600 w-72">
          <form>
            <input
              // onBlur={close}
              onFocus={expand}
              type="search"
              name="search"
              id="search"
              className="input input-bordered h-10 px-5 pr-10 rounded-full text-base-content text-sm focus:outline-none w-72"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Wyszukaj..."
            />

            <FaSearch className="absolute top-0 right-0 text-accent mt-3 mr-4" />
          </form>
        </div>
      </div>
      {expanded ? (
        <SearchResults
          results={searchResults}
          expanded={expanded}
          setExpanded={setExpanded}
          setSearchTerm={setSearchTerm}
        />
      ) : null}
    </div>
  );
}
