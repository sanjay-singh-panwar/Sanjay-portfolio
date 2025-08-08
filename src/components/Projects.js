import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'SHOUSING MANAGEMENT',
    duration: 'Feb 2025 – May 2025',
    company: 'Shiwansh Solutions',
    description:
      'A web-based application to streamline residential society operations. Supports categorization by number of houses, 24/7 complaint logging, automated issue tracking, member-based address search, and property listings. Aimed at efficient digital community interaction.',
    responsibilities:
      'Frontend development, backend development, and database design.'
  },
  {
    title: 'Employee Payroll System',
    duration: 'July 2024 – Nov 2024',
    company: 'Shiwansh Solutions',
    description:
      'Manages employee data including personal details, time-off tracking, salary generation, and role-based access. Admins control system setup while employees securely manage their own records.',
    responsibilities:
      'Frontend development, backend development, and database design.'
  },
  {
    title: 'JOB PORTAL SYSTEM',
    duration: 'Mar 2024 – Jun 2024',
    company: 'Shiwansh Solutions',
    description:
      'An online platform that connects job seekers with employers. Job seekers can register, search, and apply for jobs. Employers post job openings and manage hiring. Built for efficient two-way interaction.',
    responsibilities:
      'Frontend development, backend development, and database design.'
  }
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="container-fluid projects-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Projects</h2>
      <div className="row justify-content-center px-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="project-card p-4 text-start w-100 bg-dark bg-opacity-75 border border-light-subtle rounded-4 shadow-lg">
              <h4 className="project-title text-info mb-2">{project.title}</h4>
              <p className="text-muted mb-1">
                <small>{project.company} • {project.duration}</small>
              </p>
              <p className="project-desc mb-2 text-light">{project.description}</p>
              <p className="project-responsibilities text-white-50">
                <strong>Responsibilities:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
