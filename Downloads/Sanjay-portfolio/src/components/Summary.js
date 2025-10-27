import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
        Aspiring DevOps Engineer currently interning at Shiwansh Solutions with hands-on experience in CI/CD pipelines, cloud infrastructure, and automation. Skilled in using tools like Git, Jenkins, Docker, and AWS (EC2, S3) to support reliable and scalable deployments. Passionate about streamlining development workflows and continuously improving infrastructure for better software delivery.
      </p>
    </motion.section>
  );
}

export default Summary;
