import React from "react";
import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn m-1">
        Kategorie
      </label>
      <ul
        onClick={() => {
          //   e.target.style.display = "none";
          document.activeElement.blur();
          //   e.target.parentNode.parentNode.style.visibility = "hidden";
        }}
        tabIndex="0"
        className="dropdown-content menu  p-2 text-secondary-content shadow bg-neutral rounded-box w-52"
      >
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className="hover:bg-none focus:bg-transparent target:bg-transparent">
              <a className="hover:bg-accent focus:bg-transparent active:bg-transparent">
                {category}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
