import React from "react";

export default function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-neutral text-base-content">
      <div>
        <p>
          Copyright © {getYear} - All right reserved by Coding
          <span className="text-accent">Bay</span>
        </p>
      </div>
    </footer>
  );
}
