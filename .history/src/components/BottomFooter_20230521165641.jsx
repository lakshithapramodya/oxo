import React from "react";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";

export default function BottomFooter() {
  return (
    <div className=" mt-8">
      <div className="flex">
        <FaLinkedin color="#7d7a7f" size="30px" />
        <FaFacebookSquare color="#7d7a7f" />
        <FaTwitter color="#7d7a7f" />
      </div>
      <p className="text-[#7d7a7f] ">
        © Copyrights 2020 Oxo All rights reserved.
      </p>
    </div>
  );
}
