const skills = [
  "Node.js", "NestJS", "Express.js",
  "AWS", "API Gateway", "DynamoDB", "CloudWatch",
  "MongoDB", "MySQL", "PostgreSQL", "TypeScript",
  "WebSockets", "Microservices","JavaScript", "System Design", "RESTful APIs",
];

const Skills = () => {
  return (
    <section className="p-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Tech Stack & Expertise</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-2 text-sm border rounded-full transition ${
              skill === "Node.js" || skill === "AWS" || skill === "MongoDB" || skill === "JavaScript"
                ? "border-blue-500 text-blue-400"
                : "border-gray-600 bg-white/5 hover:bg-white/10 hover:scale-105"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;