import SectionWrapper from "./SectionWrapper";
function Contact() {

  return (
<SectionWrapper>
    <section
      id="contact"
      className="bg-slate-950 text-white py-28"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2
          className="text-4xl font-bold text-center mb-16"
        >
          Get In Touch
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-12
          "
        >

          {/* Left Side */}

          <div>

            <h3
              className="text-3xl font-semibold mb-6"
            >
              Let's Connect
            </h3>

            <p
              className="
              text-gray-300
              leading-8
              mb-10
              "
            >
              I'm currently looking for opportunities as a
              .NET Full Stack Developer.

              Feel free to contact me regarding
              internships, full-time roles,
              collaborations, or freelance work.
            </p>

            <div className="space-y-6">

              <div>

                <h4 className="text-cyan-400 font-semibold">
                  Email
                </h4>

                <p>
                  sain41159@gmail.com
                </p>

              </div>

              <div>

                <h4 className="text-cyan-400 font-semibold">
                  Phone
                </h4>

                <p>
                  +91 8639212446
                </p>

              </div>

              <div>

                <h4 className="text-cyan-400 font-semibold">
                  Location
                </h4>

                <p>
                  Andhra Pradesh, India
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div
            className="
            bg-slate-900
            rounded-xl
            p-8
            shadow-lg
            "
          >

            <div className="space-y-5">

              <a

                href="mailto:sain41159@gmail.com"

                className="
                block
                bg-cyan-500
                hover:bg-cyan-600
                text-center
                py-3
                rounded-lg
                font-semibold
                transition
                "

              >

                Email Me

              </a>

              <a

                href="https://github.com/SaiNaidu22"

                target="_blank"

                className="
                block
                border
                border-cyan-500
                text-center
                py-3
                rounded-lg
                hover:bg-cyan-500
                transition
                "

              >

                GitHub

              </a>

              <a

                href="https://www.linkedin.com/in/sai-manikanta-naidu"

                target="_blank"

                className="
                block
                border
                border-cyan-500
                text-center
                py-3
                rounded-lg
                hover:bg-cyan-500
                transition
                "

              >

                LinkedIn

              </a>

              <a

                href="/resume.pdf"

                target="_blank"

                className="
                block
                border
                border-cyan-500
                text-center
                py-3
                rounded-lg
                hover:bg-cyan-500
                transition
                "

              >

                Download Resume

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
    </SectionWrapper>

  );

}

export default Contact;