const WorkHighlights = () => {
  return (
    <section id="projects" className="p-12 max-w-5xl mx-auto">
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
            for asynchronous processing.
          </p>
        </div>

        {/* Highlight 2 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Serverless Backend Systems
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Built REST APIs using API Gateway and Lambda with secure authentication 
            and scalable cloud architecture.
          </p>
        </div>

        {/* Highlight 3 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Real-Time Communication
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Worked with WebSockets and event-driven systems to enable real-time updates 
            and communication between services.
          </p>
        </div>

        {/* Highlight 4 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Data Processing Pipelines
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Built ETL pipelines using AWS Glue and Athena for large-scale data 
            transformation and analytics.
          </p>
        </div>

        {/* Highlight 5 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Scalable API Design
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Designed and optimized RESTful APIs with Node.js and Express 
            focusing on performance and maintainability.
          </p>
        </div>

        {/* Highlight 6 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-lg font-semibold">
            Cloud Monitoring & Logging
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Implemented monitoring solutions using AWS CloudWatch and automated 
            error analysis for system reliability.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WorkHighlights;