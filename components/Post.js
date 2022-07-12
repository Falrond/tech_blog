import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post, compact, setExpanded, setSearchTerm }) {
  return (
    <div className="w-11/12 sm:w-full mx-auto rounded-lg shadow-xl mt-6 bg-base-300 ">
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          width={600}
          height={420}
          className="mb-4 rounded"
          alt="image"
        />
      )}
      <div className="px-6 pt-1 pb-4">
        <div className="flex justify-between items-center">
          <span>{post.frontmatter.date}</span>
          <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
        </div>

        <div className="mt-2">
          <Link href={`/blog/${post.slug}`}>
            <a
              onClick={() => {
                if (compact) {
                  setExpanded(false);
                  setSearchTerm("");
                }
              }}
              className="text-2xl font-bold hover:underline"
            >
              {post.frontmatter.title}
            </a>
          </Link>
          <p className="mt-2">{post.frontmatter.excerpt}</p>
        </div>
        {!compact && (
          <div className="flex justify-between items-center mt-2">
            <Link href={`blog/${post.slug}`}>
              <a className="font-semibold text-accent hover:text-accent-focus ">
                Przeczytaj więcej
              </a>
            </Link>
            <div className="flex items-center">
              {/* <img
            src={post.frontmatter.author_image}
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
