import React from 'react';
import '../App.css';
import profileImg from '../assets/Avi.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">Junior DevOps Engineer | Intern at Shiwansh Solutions</h4>
              <p className="text-muted">
                I’m a passionate DevOps Engineer with hands-on experience in automating infrastructure, streamlining CI/CD pipelines, and managing scalable cloud-based deployments. I specialize in tools and technologies such as  <strong>AWS</strong>, <strong>Docker</strong>, <strong>Jenkins</strong>, <strong>Git</strong>, <strong>Terraform</strong>, and <strong>Linux</strong>. I curently work at <strong>Shiwansh Solutions</strong> where I contribute to building and maintaining robust DevOps workflows that support development teams in delivering secure, reliable, and scalable applications.
              </p>
              <p className="text-muted">
                I'm also proficient with tools like <strong>Git</strong>, <strong>Amazon EC2</strong>, and <strong>Amazon S3</strong>, and have strong foundations in Linux, Docker, Jenkins, and Terraform.
              </p>
              <p className="text-muted mb-0">
                 My goal is to design and maintain efficient, secure, and scalable infrastructure that enables fast and reliable software delivery. I'm committed to continuous learning and actively explore new tools and practices in the DevOps ecosystem to improve automation, deployment, and system reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
