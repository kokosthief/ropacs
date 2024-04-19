import WorkingAtHeightsOnACrane from "~/images/ropacs-rope-access-working-at-heights-on-a-crane.jpg";
import Image from "next/image";

interface AccordionProps {
  mode: "light" | "dark"; // Define mode as a prop
}

export default function SectionOne({ mode }) {
  return (
    <section className="home-growth">
      <div className="home-content10">
        <div className="home-header06 sm:pt-24">
          <div className="home-header07">
            <h2
              className={` pb-4 text-4xl font-medium md:text-6xl ${
                mode === "dark" ? "text-[#FFFA0D]" : "text-black"
              }`}
            >
              Safe &amp; Efficient
            </h2>
          </div>
          <p
            className={` "w-full max-w-screen-md text-xl leading-8 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            ROPACS offers safe and efficient rope access solutions for all your
            industrial maintenance needs.
          </p>
          <p
            className={` "w-full max-w-screen-md text-xl leading-8 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            Our highly skilled technicians specialize in accessing challenging
            areas and confined spaces.
          </p>
        </div>
      </div>
      <div className="home-images mt-10 sm:mt-0">
        <div className="home-square"></div>
        <div className="home-square1"></div>
        <Image
          src={WorkingAtHeightsOnACrane}
          alt="Ropacs in the field working at heights with a crane"
          className="home-image3"
        />
      </div>
    </section>
  );
}
