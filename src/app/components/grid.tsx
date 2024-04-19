export default function ThreePoints({ mode }) {
  return (
    <section className="home-objectives">
      <div className="home-content09">
        <div className="home-objectives-list">
          <div className="objective">
            <h3
              className={` text-4xl font-medium md:text-2xl  ${
                mode === "dark" ? "text-[#FFFA0D]" : "text-black"
              }`}
            >
              <span>High-Access Solutions</span>
              <br></br>
            </h3>
            <p
              className={` leading-6 ${
                mode === "dark" ? "text-[#FFFFFF]" : "text-black"
              }`}
            >
              <span>
                We handle many high-access tasks and offer tailored rope access
                solutions for every challenge.
              </span>
            </p>
          </div>
          <div className="objective home-objective1">
            <h3
              className={` text-4xl font-medium md:text-2xl  ${
                mode === "dark" ? "text-[#FFFA0D]" : "text-black"
              }`}
            >
              <span>Rope Access Technicians</span>
              <br></br>
            </h3>
            <p
              className={` leading-6 ${
                mode === "dark" ? "text-[#FFFFFF]" : "text-black"
              }`}
            >
              <span>
                Our IRATA certified team keep disruptions to a minimum with our
                non-intrusive methods.
              </span>
            </p>
          </div>
          <div className="objective home-objective2">
            <h3
              className={` text-4xl font-medium md:text-2xl  ${
                mode === "dark" ? "text-[#FFFA0D]" : "text-black"
              }`}
            >
              <span>Height Safety</span>
              <br></br>
            </h3>
            <p
              className={` leading-6 ${
                mode === "dark" ? "text-[#FFFFFF]" : "text-black"
              }`}
            >
              <span>
                We prioritize safety at heights whilst delivering a
                cost-effective and efficient service to our clients.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
