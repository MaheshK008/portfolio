const experiences = [
  {
    title: "Client: Daolanto UG (Germany)",
    duration: "Jan 2023 – Present",
    subtitle: "Backend Developer | AWS | Serverless",
    companies: [
      "LeoIntelli Consulting (Jan 2023 – Jun 2025)",
      "Storypeach Technologies (Jul 2025 – Present)",
    ],
    points: [
      "Designed and developed scalable serverless APIs using AWS Lambda and API Gateway",
      "Designed and implemented event-driven communication using Amazon SQS and Amazon SNS to decouple services and ensure reliable asynchronous processing.",
      "Integrated DynamoDB, S3, Glue, and Athena for data processing pipelines",
      "Implemented monitoring and logging using AWS CloudWatch"
    ],
  },
  {
    title: "Software Engineer – Indium Software",
    duration: "May 2022 – Oct 2022",
    points: [
      "Developed frontend applications using React and JavaScript",
      "Built reusable UI components and improved application performance",
      "Integrated REST APIs and optimized UI responsiveness",
    ],
  },
  {
    title: "Software Engineer – Approlabs Pvt Ltd",
    duration: "May 2021 – Apr 2022",
    subtitle: "Projects: Reapmor, Freshpiks, 22Yards",
    points: [
      "Developed backend services using Node.js and NestJS",
      "Built REST APIs and integrated MySQL database",
      "Implemented Razorpay payment gateway integration",
      "Worked on microservices-based architecture",
    ],
  },
  {
    title: "Reveal IQ",
    duration: "Aug 2019 – Apr 2021",
    subtitle: "Intern → Full-Time (from Jan 2020)",
    points: [
      "Started as an intern and transitioned to a full-time backend developer",
      "Built backend services using Node.js and MongoDB",
      "Worked with WebSockets for real-time communication",
      "Designed REST APIs and microservices architecture",
    ],
  },
];

const Experience = () => {
  return (
    <section className="p-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Experience
      </h2>

      <p className="text-center text-gray-400 mb-10">
        My journey from intern to building scalable backend systems on AWS
      </p>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>

            <p className="text-sm text-gray-400 mt-1">
              {exp.duration}
            </p>

            {exp.subtitle && (
              <p className="text-sm text-blue-400 mt-2">
                {exp.subtitle}
              </p>
            )}

            {exp.companies && (
              <ul className="text-l text-gray-400 mt-2 list-disc ml-5 font-semibold hover:text-blue-400 transition">
                {exp.companies.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            )}

            <ul className="list-disc ml-5 mt-4 text-gray-300 space-y-2">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;