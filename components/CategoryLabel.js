import React from "react";
import Link from "next/dist/client/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "bg-yellow-600",
    CSS: "bg-blue-600",
    Python: "bg-green-600",
    PHP: "bg-purple-600",
    Ruby: "bg-red-600",
  };
  return (
    <div
      className={`px-2 py-1 text-sm  ${colorKey[children]} font-semibold rounded text-gray-100`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        <a>{children}</a>
      </Link>
    </div>
  );
}
