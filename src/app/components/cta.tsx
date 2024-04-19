"use client";

import React, { useState, useEffect } from "react";

import Button from "@/components/buttons/Button";

import { TbPhone, TbMailFilled } from "react-icons/tb";

interface AccordionProps {
  mode: "light" | "dark"; // Define mode as a prop
}

export default function CTA({ mode }) {
  const [phoneLink, setPhoneLink] = useState("tel:+31627211010");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    if (!isMobile) {
      setPhoneLink(
        "https://api.whatsapp.com/send?phone=31627211010&_ga=2.113846863.934298603.1704190840-536151416.1704190839"
      );
    }
  }, []);

  return (
    <section
      className="home-experience py-28"
      style={{
        background:
          "linear-gradient(152.92deg, rgb(170, 217, 243, 0.2) 4.54%, rgba(31, 49, 147, 0.17) 34.2%, rgb(249, 234, 218, 0.1) 77.55%)",
      }}
    >
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 text-center md:px-8 md:text-center">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h3
            className={` pb-4 text-4xl font-semibold md:text-6xl ${
              mode === "dark" ? "text-[#FFFA0D]" : "text-black"
            }`}
          >
            Professional Rope Access Services
          </h3>
          <p
            className={` pb-4 text-3xl font-semibold sm:text-4xl ${
              mode === "dark" ? "text-[#FFFA0D]" : "text-black"
            }`}
          >
            Email / Call Joris to Get Started
          </p>
        </div>
        <div className="mt-4 flex scale-110 flex-col flex-wrap items-center justify-center gap-8 pt-6 text-center sm:flex-row sm:gap-16 ">
          <a
            href="mailto:info@ropacs.com"
            aria-label="Email us for a consultation"
            target="_blank"
            className="scale-125"
          >
            <Button
              className="h-[40px]  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 active:bg-indigo-500"
              leftIcon={TbMailFilled}
              aria-label="Email Ropacs for a consultation"
            >
              <p className=" ml-2 text-xs">info@ropacs.com</p>
            </Button>
          </a>
          <a
            href={phoneLink}
            aria-label="Call for consultation"
            target="_blank"
            className="scale-125"
          >
            <Button
              className="h-[40px] transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 active:bg-indigo-500"
              leftIcon={TbPhone}
            >
              <p className=" ml-2 text-xs">+31 (0) 627 211 010</p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
