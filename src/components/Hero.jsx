import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      bg-slate-900
      text-white
      flex
      items-center
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            "
          >
            Naidu
            <br />
            Sai Manikanta
          </h1>

          <div className="mt-5">

            <TypeAnimation
              sequence={[
                ".NET Full Stack Developer",
                2000,
                "ASP.NET Core Developer",
                2000,
                "React Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="
              text-3xl
              font-semibold
              text-cyan-400
              "
            />

          </div>

          <p
            className="
            text-gray-300
            text-lg
            mt-6
            leading-8
            max-w-xl
            "
          >
            Passionate about building scalable,
            secure, and modern web applications
            using ASP.NET Core Web API,
            React.js, Entity Framework Core,
            MySQL, and cloud deployment.
          </p>

          {/* Buttons */}

          <div className="flex gap-4 mt-10 flex-wrap">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-cyan-500
              hover:bg-cyan-600
              px-6
              py-3
              rounded-lg
              font-semibold
              transition
              "
            >
              Download Resume
            </a>

            <a
              href="https://github.com/SaiNaidu22"
              target="_blank"
              rel="noopener noreferrer"
              className="
              border
              border-cyan-400
              px-6
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
              rel="noopener noreferrer"
              className="
              border
              border-cyan-400
              px-6
              py-3
              rounded-lg
              hover:bg-cyan-500
              transition
              "
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >

          <div
            className="
            relative
            w-[360px]
            h-[360px]
            "
          >

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-cyan-500
              blur-3xl
              opacity-20
              "
            />

            <img
              src="/profile.png"
              alt="Naidu Sai Manikanta"
              className="
              relative
              w-full
              h-full
              object-cover
              rounded-full
              border-4
              border-cyan-400
              shadow-2xl
              "
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;