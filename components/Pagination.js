import React from "react";
import Link from "next/link";

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  //   if (numPages === 1) return <></>;

  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <li className="btn mr-1 cursor-pointer">Poprzednia</li>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link key={i} href={`/blog/page/${i + 1}`}>
            <li
              className={`btn mr-1 cursor-pointer text-lg ${
                i + 1 === currentPage && "text-accent font-semibold"
              }`}
            >
              {i + 1}
            </li>
          </Link>
        ))}
        {!isLast && (
          <Link href={nextPage}>
            <li className="btn mr-1 cursor-pointer">Następna</li>
          </Link>
        )}
      </ul>
    </div>
  );
}
