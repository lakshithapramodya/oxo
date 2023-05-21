import React from "react";
import Dropdown from "./DropDown";

export default function Header() {
  return (
    <header className="mx-auto mt-8 flex max-w-[95%] items-center justify-between sm:max-w-[75%]">
      <img
        className="cursor-pointer aspect-none"
        src="./images/logo.webp"
        alt="oxo logo"
        loading="lazy"
        width="auto"
        height="auto"
      />
      <nav className="hidden items-center space-x-14 lg:flex">
        <span className="navBtn">Home</span>
        <span className="navBtn">What We Do</span>
        <span className="navBtn">Why Us?</span>
        <span className="navBtn">Our Work</span>
        <button className="btn bg-[#007bcf]">Get Started Free</button>
      </nav>

      <Dropdown />
    </header>
  );
}
