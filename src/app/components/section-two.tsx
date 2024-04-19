import Image from "next/image";
import WorkingAtHeightsAbove from "~/images/ropacs-rope-access-height-work.jpg";

interface AccordionProps {
  mode: "light" | "dark"; // Define mode as a prop
}

export default function SectionTwo({ mode }) {
  return (
    <section className="home-experience">
      <div className="home-images1 mb-36">
        <div className="home-square2"></div>
        <Image
          src={WorkingAtHeightsAbove}
          alt="Ropacs in the field working at heights high above"
          className="home-image4"
        />
      </div>
      <div className="home-content11">
        <div className="home-header08">
          <div className="home-header-container2">
            <div className="home-header09">
              <h2
                className={` pb-4 text-4xl font-medium md:text-6xl ${
                  mode === "dark" ? "text-[#FFFA0D]" : "text-black"
                }`}
              >
                ROPACS
              </h2>
            </div>
            <p
              className={` "w-full max-w-screen-md text-xl leading-8 ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              Get a tailored approach to your high-access projects
            </p>
          </div>
          <div className="home-checkmarks">
            <div className="home-check">
              <div className="home-mark">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span
                className={` "w-full max-w-screen-md text-xl leading-8 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                <span className="home-text35">Safe and Accurate</span>
                <span>
                  : We deliver precision and quality in every time at high
                  safety standards.
                </span>
              </span>
            </div>
            <div className="home-check1">
              <div className="home-mark1">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span
                className={` "w-full max-w-screen-md text-xl leading-8 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                <span className="home-text38">Minimal Disruption:</span>
                <span>
                  {" "}
                  We keeps workspaces compact, ensuring minimal disruption on
                  site.
                </span>
              </span>
            </div>
            <div className="home-check2">
              <div className="home-mark2">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span
                className={` "w-full max-w-screen-md text-xl leading-8 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                <span className="home-text41">Cost-Efficiency:</span>
                <span>
                  {" "}
                  Save time and costs with our efficient rope access services
                </span>
              </span>
            </div>
            <div className="home-check3">
              <div className="home-mark3">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                </svg>
              </div>
              <span
                className={` "w-full max-w-screen-md text-xl leading-8 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                <span className="home-text44">Swift Response:</span>
                <span>
                   We work efficiently and on time to ensure projects are
                  completed on time.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-testimonial">
          <div className="home-content12">
            <span
              className={` home-text46  ${
                mode === "dark" ? "text-[#FFFA0D]" : "text-black"
              }`}
            >
              Testimonial
            </span>
            <p
              className={` home-text47  ${
                mode === "dark" ? "text-[#FFFFFF]" : "text-black"
              }`}
            >
              &quot;Joris and the team exceeded my expectations with their
              efficiency and commitment to safety. I couldn&apos;t be happier
              with their services.&quot;
            </p>
          </div>
          <div className="home-information">
            <div className="home-author">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-icon10"
              />
              <span
                className={` home-name  ${
                  mode === "dark" ? "text-[#FFFA0D]" : "text-black"
                }`}
              >
                Emma de Tuin
              </span>
            </div>
            {/* <img alt="image" src="/logoipsum-2.svg" className="home-from" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
