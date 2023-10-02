import { useState } from 'react';

const Question = ({ info, title }) => {
  const [showInfo, setShowInfo] = useState(false);

  function showDetails() {
    setShowInfo(!showInfo);
  }

  return (
    <article className="question">
      <header>

      <h3>{title}</h3>
      {showInfo ? (
        <button className="question-btn" onClick={showDetails}>
          -
        </button>
      ) : (
        <button className="question-btn"  onClick={showDetails}>+</button>
      )}
      </header>
      {showInfo && <p> {info}</p>}
    </article>
  );
};

export default Question;
