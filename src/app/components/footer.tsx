import UnderlineLink from "@/components/links/UnderlineLink";

interface AccordionProps {
  mode: "light" | "dark"; // Define mode as a prop
}

export default function Footer({ mode }) {
  return (
    <section className="layout flex flex-col items-center py-2 text-center align-middle">
      <footer
        className={` "flex ${mode === "dark" ? "text-white" : "text-black"}`}
      >
        <span className="mr-2">
          © {new Date().getFullYear()} Ropacs - Website by
        </span>{" "}
        <UnderlineLink href="https://dev.hrwillmott.com">
          HRWILLMOTT
        </UnderlineLink>
      </footer>
    </section>
  );
}
