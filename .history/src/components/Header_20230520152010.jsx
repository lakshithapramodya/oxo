import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="mx-auto mt-8 flex items-center justify-between px-28 md:max-w-7xl">
      <img className="cursor-pointer" src="./images/logo.png" alt="oxo logo" />
      <nav className="hidden items-center space-x-14 lg:flex">
        <span className="navBtn">Home</span>
        <span className="navBtn">What We Do</span>
        <span className="navBtn">Why Us?</span>
        <span className="navBtn">Our Work</span>
        <button className="btn bg-[#007bcf]">Get Started Free</button>
      </nav>
      <Bars3Icon className="h-7 lg:hidden" />
    </header>
  );
}
