"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";

import IconButton from "@/components/buttons/IconButton";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

import Hero from "@/app/components/hero";
import Accordian from "@/app/components/accordian";
import Grid from "@/app/components/grid";
import SectionOne from "@/app/components/section-one";
import SectionTwo from "@/app/components/section-two";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";

export default function HomePage() {
  const [mode, setMode] = useState<"dark" | "light">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e?: MediaQueryListEvent) => {
      const matches = e ? e.matches : mediaQuery.matches;
      setMode(matches ? "dark" : "light");
    };

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  };

  return (
    <main
      className={`z-50 flex w-full flex-col items-center  overflow-hidden ${
        mode === "dark" ? "dark:bg-[#242530]" : ""
      }`}
    >
      <Head>
        <title>Rope Access Solutions for Industrial Maintenance - ROPACS</title>
      </Head>
      <div className="fixed right-10 top-6 hidden md:block">
        <IconButton
          onClick={toggleMode}
          variant={mode === "dark" ? "light" : "dark"}
          className="animate-pulse focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          icon={mode === "dark" ? IoMdSunny : IoMdMoon}
          aria-label={
            mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        />
      </div>
      <Hero />
      <Accordian mode={mode} />
      <Grid mode={mode} />
      <SectionOne mode={mode} />
      <SectionTwo mode={mode} />
      <CTA mode={mode} />
      <Footer mode={mode} />
    </main>
  );
}
