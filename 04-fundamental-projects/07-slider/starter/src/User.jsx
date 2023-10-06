import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function User({ user, nextPerson, previousPerson }) {
  const { image, name, title, quote } = user;
  return (
    <section className="slider-container">
      <article className="slide">
        <img src={image} alt="name" className="person-img" />
        <h5>{name}</h5>
        <p className="title">{title}</p>
        <p className="text"> {quote}</p>
      </article>
      <button type="button" className="next" onClick={nextPerson}>
        <FiChevronRight />
      </button>
      <button type="button" className="prev" onClick={previousPerson}>
        <FiChevronLeft />
      </button>
    </section>
  );
}
