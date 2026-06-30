import SectionWrapper from "./SectionWrapper";
function Skills() {

  const skillGroups = [

    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap"
      ]
    },

    {
      title: "Backend",
      skills: [
        "ASP.NET Core Web API",
        "C#",
        "Entity Framework Core",
        "LINQ",
        "REST APIs"
      ]
    },

    {
      title: "Database",
      skills: [
        "MySQL",
        "TiDB Cloud"
      ]
    },

    {
      title: "Programming",
      skills: [
        "C#",
        "Java",
        "SQL"
      ]
    },

    {
      title: "Tools",
      skills: [
        "VS Code",
        "GitHub",
        "Postman"
      ]
    },

    {
      title: "Deployment",
      skills: [
        "Render",
        "Vercel"
      ]
    }

  ];

  return (
    <SectionWrapper>
    <section
      id="skills"
      className="bg-slate-900 text-white py-28"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2
          className="text-4xl font-bold text-center mb-16"
        >
          Technical Skills
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {skillGroups.map((group) => (

            <div
              key={group.title}
              className="
              bg-slate-800
              rounded-xl
              p-6
              shadow-lg
              hover:-translate-y-2
              transition
              duration-300
              "
            >

              <h3
                className="
                text-2xl
                font-semibold
                mb-6
                text-cyan-400
                "
              >
                {group.title}
              </h3>

              <div
                className="
                flex
                flex-wrap
                gap-3
                "
              >

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-700
                    text-sm
                    hover:bg-cyan-500
                    transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
    </SectionWrapper>

  );

}

export default Skills;