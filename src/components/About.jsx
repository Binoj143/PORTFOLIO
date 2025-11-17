import React, { useMemo } from 'react';
import '../styles/About.css';
import AIHelper from './AIHelper';

const aboutItems = [
  { label: 'Projects Completed', number: 3 },
  { label: 'Internship Duration', number: '3 Months' }
];

const experiences = [
  {
    company: 'Elite Group Of Companies UAE',
    role: 'Information Technology Administrator',
    dates: 'September 2025 - Present'
  },
  {
    company: 'Beinex',
    role: 'Full-stack Development',
    dates: 'September 2022 - December 2022 (4 months)'
  }
];

const education = [
  {
    degree: 'MCA',
    institution: 'Mar Baselios Institute of Technology and Science',
    period: '08/2023 – 05/2025',
    location: 'Kothamangalam, India'
  },
  {
    degree: 'BSc Computer Science',
    institution: 'UIT Alappuzha',
    period: '07/2019 – 05/2022',
    location: 'Kerala University, India'
  },
  {
    degree: 'Higher Secondary',
    institution: 'GHSS Kakkazhom',
    period: '2019',
    location: 'Alappuzha, India'
  },
  {
    degree: 'Matriculation',
    institution: 'KKPMGHSS Ambalapuzha',
    period: '2017',
    location: 'Alappuzha, India'
  }
];

const About = React.memo(() => {
  const initialAIText = useMemo(
    () =>
      `Elite Group Of Companies UAE - Information Technology Administrator. Responsibilities include system administration, network maintenance, user support, deployment and cloud services, security monitoring, and automation of repetitive tasks.`,
    []
  );
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I'm a motivated MCA Graduate and full-stack developer with hands-on experience as an Information Technology Administrator at Elite Group Of Companies UAE. I specialize in building modern web applications, system administration, and exploring deep learning technologies. Passionate about creating scalable solutions and automating workflows.
      </p>

      <h3>Experience</h3>
      <ul className="experience-list">
        {experiences.map(({ company, role, dates }) => (
          <li key={company}>
            <div>
              <strong>{company}</strong>
              <span>{role}</span>
            </div>
            <small>{dates}</small>
          </li>
        ))}
      </ul>

      <section id="education" className="education-section">
        <h3>Education</h3>
        <ul className="education-list">
          {education.map(({ degree, institution, period, location }) => (
            <li key={`${degree}-${institution}`}>
              <div className="education-heading">
                <strong>{degree}</strong>
                <span>{institution}</span>
              </div>
              <div className="education-meta">
                <small>{period}</small>
                <small>{location}</small>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <AIHelper initial={initialAIText} />

      <ul className="about__metrics">
        {aboutItems.map(({ label, number }) => (
          <li key={label}>
            {label}: <span>{number}</span>
          </li>
        ))}
      </ul>
    </section>
  );
});

About.displayName = 'About';
export default About;