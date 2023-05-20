import React from "react";

export default function Header() {
  return (
    <header className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-20">
      <img className="cursor-pointer" src="./images/logo.png" alt="oxo logo" />
      <nav className="flex items-center space-x-14">
        <span className="navBtn">Home</span>
        <span className="navBtn">What We Do</span>
        <span className="navBtn">Why Us?</span>
        <span className="navBtn">Our Work</span>
        <button className="btn bg-[#007bcf]">Get Started Free</button>
      </nav>
    </header>
  );
}
