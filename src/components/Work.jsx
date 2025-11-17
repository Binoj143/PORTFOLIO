import '../styles/Work.css';

const works = [
  { 
    title: 'Text-to-Image Generator', 
    desc: 'AI-powered application that generates images from text descriptions using deep learning. Built with Python, featuring HTML/CSS frontend with JavaScript interactivity.',
    tags: ['Deep Learning', 'Python', 'JavaScript'], 
    link: 'https://github.com/binoj3211/MainPROJ' 
  },
  { 
    title: 'BMI Prediction App', 
    desc: 'Machine learning application for Body Mass Index prediction using CNN (Convolutional Neural Networks). Features an interactive Streamlit interface for easy prediction and data analysis.',
    tags: ['CNN', 'Streamlit', 'Python'], 
    link: 'https://github.com/binoj3211/BMIPREDICTION.git' 
  },
  { 
    title: 'Amazon Clone', 
    desc: 'Full-featured e-commerce platform replica built with Angular. Demonstrates advanced frontend development with component-based architecture and responsive design.',
    tags: ['Angular', 'TypeScript', 'Bootstrap'], 
    link: '#' 
  }
];

export default function Work() {
  return (
    <section id="work">
      <h2>My Work</h2>
      <ul className="work-grid">
        {works.map(({ title, desc, tags, link }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="tags">
              {tags && tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            {link && <a href={link} className="project-cta">View Project</a>}
          </li>
        ))}
      </ul>
    </section>
  );
}