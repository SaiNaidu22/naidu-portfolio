import SectionWrapper from "./SectionWrapper";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {

  const project = {

    title: "Employee Management System",

    description:
      "A production-ready Employee Management System built using ASP.NET Core Web API and React.js. The application includes JWT Authentication, Employee CRUD operations, Leave Management, Attendance Tracking, Dashboard Analytics, Password Reset Workflow, Excel/PDF Export, and cloud deployment using Render, Vercel, and TiDB Cloud.",

    technologies: [
      "ASP.NET Core",
      "React.js",
      "Entity Framework Core",
      "MySQL",
      "JWT",
      "Render",
      "Vercel",
      "TiDB Cloud"
    ],

    github:
      "https://github.com/SaiNaidu22/EmployeeManagementSystem",

    live:
      "https://employee-management-system-ecru-eta.vercel.app/login"

  };

  return (

    <SectionWrapper>

      <section
        id="projects"
        className="py-28 bg-slate-950 text-white"
      >

        <div className="max-w-7xl mx-auto px-8">

          <h2
            className="
            text-5xl
            font-bold
            text-center
            "
          >
            Featured Project
          </h2>

          <p
            className="
            text-center
            text-gray-400
            mt-4
            mb-16
            text-lg
            "
          >
            Production Ready .NET Full Stack Application
          </p>

          <div
            className="
            bg-slate-900
            rounded-2xl
            overflow-hidden
            border
            border-slate-700
            shadow-xl
            hover:shadow-cyan-500/20
            transition
            duration-300
            "
          >

            <ProjectCarousel />

            <div className="p-10">

              <h3
                className="
                text-4xl
                font-bold
                mb-6
                "
              >
                {project.title}
              </h3>

              <p
                className="
                text-gray-300
                leading-8
                text-lg
                mb-10
                "
              >
                {project.description}
              </p>

              <div
                className="
                flex
                flex-wrap
                gap-3
                mb-10
                "
              >
                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-cyan-500/30
                    hover:bg-cyan-500
                    hover:text-black
                    transition
                    "
                  >
                    {tech}
                  </span>

                ))}
              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href={project.live}
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
                  hover:scale-105
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  border
                  border-cyan-500
                  px-6
                  py-3
                  rounded-lg
                  hover:bg-cyan-500
                  hover:text-black
                  transition
                  hover:scale-105
                  "
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </SectionWrapper>

  );

}

export default Projects;