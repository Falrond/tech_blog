import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-neutral shadow-lg nav ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 items-center text-md:justify-start mb-4 md:mb-0">
            {/* <span className="ml-3 text-xl font-semibold">
              CODE<span className="text-accent">ADO</span>{" "}
            </span> */}
            <span className="ml-3 text-2xl font-bold text-secondary-content mr-2 ">
              codersbay
            </span>

            <Image
              src="/images/codersbay_logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base font-semibold md:ml-auto">
          <Link href="/blog">
            <a className="mx-5 cursor-pointer uppercase hover:text-accent">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-5 cursor-pointer uppercase hover:text-accent">
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
