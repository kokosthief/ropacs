import React, { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import WorkingAtHeights from "~/images/ropacs-rope-access-working-at-heights.jpg";

interface AccordionProps {
  mode: "light" | "dark"; // Define mode as a prop
}

export default function Accordian({ mode }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      // If the clicked accordion is already open, close it
      setActiveIndex(-1);
    } else {
      // Open the clicked accordion
      setActiveIndex(index);
    }
  };

  return (
    <section className="home-data">
      <div className="">
        <h2
          className={` pb-4 text-4xl font-medium md:text-6xl ${
            mode === "dark" ? "text-[#FFFA0D]" : "text-black"
          }`}
        >
          <span>
            Safe &amp; Efficient Rope Access solutions for High-Access
            Challenges
          </span>
        </h2>
        <p
          className={` "w-full max-w-screen-md text-xl leading-8 ${
            mode === "dark" ? "text-[#FFFFFF]" : "text-black"
          }`}
        >
          At ROPACS, our IRATA-certified team is dedicated to precision and
          safety, offering cost-efficient tailored services for maintenance,
          inspections, and more.
        </p>
      </div>
      <div className="items-middle flex w-full flex-col md:flex-row md:gap-20">
        <div className="flex flex-col items-center md:max-w-96 ">
          <Image
            src={WorkingAtHeights}
            alt="Ropacs in the field"
            className="w-100% "
          />
        </div>

        <div className="my-12 flex w-full max-w-screen-md flex-col justify-evenly gap-2">
          {accordionData.map((item, index) => (
            <div
              key={index}
              data-role="accordion-container"
              className={`flex w-full cursor-pointer flex-col items-baseline rounded-xl border border-b-[1px] border-gray-100  p-4 pb-[var(--dl-space-space-oneandhalfunits)] pt-[var(--dl-space-space-oneandhalfunits)] shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring ${
                mode === "dark" ? "bg-[#242530]" : "bg-[#f9ebda]"
              } ${activeIndex === index ? "bg-[#242530]" : ""}`}
            >
              <div
                onClick={() => toggleAccordion(index)}
                className="flex w-full flex-row justify-between "
              >
                <div onClick={() => toggleAccordion(index)}>
                  <h3
                    className={`}  pb-2 text-2xl font-medium 
                    md:text-5xl ${
                      mode === "dark" ? "text-[#FFFA0D] " : "text-black"
                    }`}
                  >
                    <span>{item.title}</span>
                    <br />
                  </h3>
                </div>
                <button
                  className="icon-container-root-class-name3"
                  onClick={() => toggleAccordion(index)}
                >
                  <Plus />
                </button>
              </div>
              <p
                data-role="accordion-content"
                className={`leading-6] w-full max-w-screen-md font-medium ${
                  mode === "dark" ? "text-[#f9ebda]" : "text-[#242530]"
                } ${activeIndex === index ? "block" : "hidden"}`}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const accordionData = [
  {
    title: "Industrial Maintenance",
    content:
      "At ROPACS, we excel in rope access inspection, using specialized techniques to access even the most challenging locations, guaranteeing comprehensive assessments and ensuring your investment's longevity.",
  },
  {
    title: "Rope Access Inspection",
    content:
      "When it comes to structural repairs, ROPACS delivers top-notch solutions for industrial maintenance. Our highly skilled IRATA Rope Access technicians are experts in accessing confined spaces, offering efficiency and safety in every project.",
  },
  {
    title: "Structural Repairs",
    content:
      "For structural repairs, ROPACS is your trusted partner. Our highly skilled IRATA Rope Access technicians specialize in accessing challenging areas and confined spaces to provide top-notch solutions. With a focus on safety and efficiency, we ensure your industrial maintenance needs are met with excellence.",
  },
  {
    title: "Tailored Solutions",
    content:
      "Our tailored rope access solutions are meticulously designed to meet your industrial needs. We prioritize safety, cost-efficiency, and skilled technicians to provide versatile and precise services for your unique challenges.",
  },
];
