import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src="./images/logo.png" alt="" />
      <nav className="flex space-x-4">
        <span>Home</span>
        <span>What We Do</span>
        <span>Why Us?</span>
        <span>Our Work</span>
        <button>Get Started Free</button>
      </nav>
    </header>
  );
}
