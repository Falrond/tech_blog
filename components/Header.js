import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-neutral shadow-lg nav ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 items-center text- md:justify-start mb-4 md:mb-0">
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
            <span className="ml-3 text-xl font-semibold">
              Coding<span className="text-accent">Bay</span>{" "}
            </span>
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
