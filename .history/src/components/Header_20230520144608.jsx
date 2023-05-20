import React from "react";

export default function Header() {
  return (
    <header className="mx-auto mt-8 flex max-w-[70rem] items-center justify-between">
      <img src="./images/logo.png" alt="oxo logo" />
      <nav className="flex space-x-8 font-semibold text-[#1d265f]">
        <span>Home</span>
        <span>What We Do</span>
        <span>Why Us?</span>
        <span>Our Work</span>
        <button>Get Started Free</button>
      </nav>
    </header>
  );
}
