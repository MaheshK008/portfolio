import AnimatedSection from "./AnimatedSection";
const About = () => {
  return (
    <AnimatedSection>
    <section className="p-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-300 leading-7">
        Backend-focused Software Engineer with 6+ years of experience building scalable 
        web applications and RESTful APIs using Node.js, NestJS, and Express.js.
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        I specialize in designing serverless architectures on AWS, working with services 
        like Lambda, API Gateway, DynamoDB, and CloudWatch. I have experience building 
        real-time systems using WebSockets and optimizing performance across multiple databases.
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        One of my key contributions includes building a serverless error monitoring system 
        using AWS Lambda, CloudWatch, and Bedrock for intelligent log analysis.
      </p>

      <p className="text-gray-500 mt-4">
        I enjoy solving complex backend problems and building scalable systems for real-world applications.
      </p>
    </section>
    </AnimatedSection>
  );
};

export default About;