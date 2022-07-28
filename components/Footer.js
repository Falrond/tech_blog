import React from "react";

export default function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-neutral text-base-content">
      <div>
        <p>
          Copyright © {getYear} - Wszystkie prawa zastrzeżone przez codersbay
        </p>
      </div>
    </footer>
  );
}
