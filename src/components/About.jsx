import SectionWrapper from "./SectionWrapper";
function About() {
  return (
     <SectionWrapper>
    <section
   
      id="about"
      className="bg-slate-950 text-white py-28"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-14
          items-center
          "
        >

          {/* Left */}

          <div>

            <h3
              className="text-2xl font-semibold mb-6"
            >
              .NET Full Stack Developer
            </h3>

            <p
              className="
              text-gray-300
              leading-8
              text-lg
              "
            >
              I'm Naidu Sai Manikanta, a Computer Science graduate
              passionate about building scalable full-stack web
              applications using ASP.NET Core Web API, React.js,
              Entity Framework Core, and MySQL.

              I enjoy solving real-world problems through clean,
              maintainable code while continuously learning modern
              technologies and software development best practices.
            </p>

          </div>

          {/* Right */}

          <div
            className="
            grid
            grid-cols-2
            gap-6
            "
          >

            <div
              className="
              bg-slate-900
              rounded-xl
              p-6
              shadow-lg
              "
            >
              <h4 className="text-cyan-400 text-3xl font-bold">
                8.94
              </h4>

              <p className="text-gray-300">
                B.Tech CGPA
              </p>
            </div>

            <div
              className="
              bg-slate-900
              rounded-xl
              p-6
              shadow-lg
              "
            >
              <h4 className="text-cyan-400 text-3xl font-bold">
                1+
              </h4>

              <p className="text-gray-300">
                Major Project
              </p>
            </div>

            <div
              className="
              bg-slate-900
              rounded-xl
              p-6
              shadow-lg
              "
            >
              <h4 className="text-cyan-400 text-3xl font-bold">
                10+
              </h4>

              <p className="text-gray-300">
                Technologies
              </p>
            </div>

            <div
              className="
              bg-slate-900
              rounded-xl
              p-6
              shadow-lg
              "
            >
              <h4 className="text-cyan-400 text-3xl font-bold">
                2
              </h4>

              <p className="text-gray-300">
                Certifications
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
    </SectionWrapper>

  );
}

export default About;