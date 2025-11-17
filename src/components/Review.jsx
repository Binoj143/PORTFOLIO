import '../styles/Review.css';

const reviews = [
  {
    name: 'Mentor',
    content: 'Binoj is hardworking and always eager to learn.',
    company: 'BEINEX',
    imgSrc: '/images/beinex.png'
  }
];

export default function Review() {
  return (
    <section id="reviews">
      <h2>Testimonials</h2>
      <ul>
        {reviews.map(({ name, content, company, imgSrc }) => (
          <li key={name} className="review-card">
            <img src={imgSrc} alt={`${name} avatar`} className="review-img" />
            <p className="review-content">"{content}"</p>
            <p className="review-author">{name}</p>
            <span className="review-company">{company}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
