"use client";

import React, { useState, useEffect } from "react";

import Logo from "~/images/logo-icon.png";
import Button from "@/components/buttons/Button";
import IconButton from "@/components/buttons/IconButton";

import { TbPhone, TbMailFilled } from "react-icons/tb";
import Image from "next/image";

interface HeroProps {
  mode: "light" | "dark"; // Define mode as a prop
}

export default function Hero() {
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
    <section className="relative  z-50  flex max-h-screen min-h-screen w-full flex-col items-center bg-cover bg-no-repeat dark:bg-black ">
      <video
        muted
        preload="auto"
        playsInline
        autoPlay
        loop
        className="absolute inset-0 h-screen object-cover dark:opacity-40 "
      >
        <source src="videos/hero-video.mov" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="flex w-full flex-row items-center justify-center pb-10 ">
          <Image
            className="-mr-12 w-36  md:-mr-10 md:w-56"
            src={Logo}
            alt="Ropacs Logo"
          />
          <h1 className="font-secondary   mr-4 text-7xl font-[600] text-white md:-ml-10 md:pr-3 md:text-4xl lg:text-9xl">
            <span className=""></span>ROPACS
          </h1>
        </div>
        <h2 className="font-primary hero-line-height mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl ">
          Working at Heights <br />
          Industrial Rope Access IRATA Experts
        </h2>

        <div className="flex scale-110 flex-wrap gap-10 pt-6">
          <a
            href="mailto:info@ropacs.com"
            aria-label="Email us for a consultation"
            target="_blank"
            className="scale-125"
          >
            <IconButton
              className=" h-[40px] w-[40px]  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 active:bg-indigo-500"
              // variant={mode === "dark" ? "light" : "dark"}
              isLoading={false}
              icon={TbMailFilled}
              aria-label="Email Ropacs for a consultation"
            />
          </a>

          <a
            href={phoneLink}
            aria-label="Call for consultation"
            target="_blank"
            className="scale-125"
          >
            <Button
              className="h-[40px]  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 active:bg-indigo-500"
              // variant={mode === "dark" ? "light" : "dark"}
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
