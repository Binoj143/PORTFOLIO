import React from 'react';
import '../styles/Skill.css';

const skillItem = [
  { label: 'Python', desc: 'Programming', level: 90, icon: 'fab fa-python' },
  { label: 'Angular', desc: 'Frontend Framework', level: 85, icon: 'fab fa-angular' },
  { label: 'Flask', desc: 'Backend Framework', level: 80, icon: 'fas fa-flask' },
  { label: 'MySQL', desc: 'Database', level: 75, icon: 'fas fa-database' },
  { label: 'JavaScript', desc: 'Scripting', level: 85, icon: 'fab fa-js-square' },
  { label: 'HTML/CSS/Bootstrap', desc: 'UI Development', level: 95, icon: 'fab fa-html5' },
  { label: 'GitHub', desc: 'Version Control', level: 80, icon: 'fab fa-github' },
  { label: 'Deep Learning', desc: 'ML Techniques', level: 70, icon: 'fas fa-brain' }
];

const Skill = React.memo(() => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul className="skills-grid">
        {skillItem.map(({ label, desc, level, icon }, index) => (
          <li key={label} style={{ '--skill-index': index }}>
            <div className="skill-icon">
              <i className={icon}></i>
            </div>
            <div className="skill-title">{label}</div>
            <p className="skill-desc">{desc}</p>
            <div className="skill-progress" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100">
              <div 
                className="skill-progress-bar" 
                style={{ '--skill-percent': `${level}%`, width: `${level}%` }}
              >
                <span className="skill-level" aria-hidden="true">{level}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
});

Skill.displayName = 'Skill';
export default Skill;