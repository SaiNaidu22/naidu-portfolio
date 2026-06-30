import SectionWrapper from "./SectionWrapper";
function Timeline() {

  const timeline = [

    {
      year: "2022",
      title: "Started B.Tech",
      description:
        "Joined Koneru Lakshmaiah Education Foundation, Computer Science Engineering."
    },

    {
      year: "2024",
      title: "AWS Cloud Practitioner",
      description:
        "Earned AWS Certified Cloud Practitioner certification."
    },

    {
      year: "2025",
      title: "Salesforce AI Associate",
      description:
        "Completed Salesforce AI Associate certification."
    },

    {
      year: "2026",
      title: "Employee Management System",
      description:
        "Designed and deployed a full-stack Employee Management System using ASP.NET Core Web API, React.js, MySQL, Render, and Vercel."
    },

    {
      year: "2026",
      title: "Graduated",
      description:
        "Completed B.Tech in Computer Science Engineering with 8.94 CGPA."
    }

  ];

  return (
<SectionWrapper>
    <section
      id="timeline"
      className="bg-slate-900 text-white py-28"
    >

      <div className="max-w-5xl mx-auto px-8">

        <h2
          className="text-4xl font-bold text-center mb-16"
        >
          My Journey
        </h2>

        <div className="relative border-l-2 border-cyan-500 ml-5">

          {

            timeline.map((item, index) => (

              <div
                key={index}
                className="mb-14 ml-10"
              >

                {/* Circle */}

                <span
                  className="
                  absolute
                  -left-[11px]
                  w-5
                  h-5
                  bg-cyan-500
                  rounded-full
                  "
                  style={{
                    marginTop: "6px"
                  }}
                />

                <p
                  className="
                  text-cyan-400
                  font-semibold
                  "
                >
                  {item.year}
                </p>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mt-2
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  text-gray-300
                  mt-3
                  leading-7
                  "
                >
                  {item.description}
                </p>

              </div>

            ))

          }

        </div>

      </div>

    </section>
    </SectionWrapper>

  );

}

export default Timeline;