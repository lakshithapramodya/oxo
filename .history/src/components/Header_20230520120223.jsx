import React from "react";

export default function Header() {
  return (
    <header className="flex  items-center justify-between">
      <img src="./images/logo.png" alt="" />
      <nav className="text-red-500">Home</nav>
    </header>
  );
}
