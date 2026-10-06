import AnimatedSection from "./AnimatedSection";
const About = () => {
  return (
    <AnimatedSection>
    <section id="about" className="p-12 max-w-4xl mx-auto text-center scroll-mt-16">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-300 leading-7">
        Backend-focused Software Engineer with 7+ years of experience designing
        and building scalable web applications, RESTful APIs, and distributed
        backend systems using Node.js, NestJS, and Express.js.
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        I specialize in cloud-native and serverless architectures on AWS,
        working with services such as Lambda, API Gateway, DynamoDB, S3,
        CloudWatch, and Bedrock. I have experience building event-driven and
        real-time systems using WebSockets, while focusing on performance,
        reliability, and scalability across distributed services and databases.
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        One of my key contributions includes building a serverless error
        monitoring and analysis system using AWS Lambda, CloudWatch, and
        Amazon Bedrock for intelligent log analysis and automated insights.
      </p>

      <p className="text-gray-500 mt-4">
        I focus on solving complex backend challenges and building reliable,
        scalable systems that deliver real-world business value.
      </p>
    </section>
    </AnimatedSection>
  );
};

export default About;