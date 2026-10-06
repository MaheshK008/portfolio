const WorkHighlights = () => {
  return (
    <section id="projects" className="p-12 max-w-5xl mx-auto scroll-mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Work Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Highlight 1 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Event-Driven Architecture
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Designed scalable backend systems using AWS services like SNS, SQS, and Lambda 
            for asynchronous processing and reliable service communication.
          </p>
        </div>

        {/* Highlight 2*/}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Distributed Systems & Resilience
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Worked with distributed-system patterns including idempotency,
            retry mechanisms, circuit breakers, transactional outbox, and
            asynchronous processing.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Serverless Backend Systems
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Built REST APIs using API Gateway and Lambda with secure authentication 
            and scalable cloud-native architecture.
          </p>
        </div>

        {/* Highlight 4 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Scalable API Design
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Designed and developed RESTful APIs using Node.js, TypeScript,
            NestJS, and Express.js with a focus on scalability and maintainability
          </p>
        </div>

        {/* Highlight 6 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Observability & Production Reliability
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Worked with CloudWatch logging, error monitoring, debugging,
            application observability, and production support to improve system
            reliability.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WorkHighlights;