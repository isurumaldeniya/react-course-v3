import { useState } from 'react';
import reviews from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  // const [user, setUser] = useState({});

  const nextPerson = () => {
    if (index !== reviews.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const previousPerson = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  };

  const selectRandomPerson = () => {
    const randomIndex = Math.floor(Math.random()*4);
    setIndex(randomIndex);

  }


  return (
    <main>

      <article className='review'>
        <div className='btn-container'>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronLeft />
          </button>
          <button className='prev-btn' onClick={previousPerson}>
            <FaChevronRight/>
          </button>
        </div>
        <h2>{reviews[index].name}</h2>
        <div className='img-container'>
          <img src={reviews[index].image} className='person-img'></img>
        </div>
        <p>src={reviews[index].text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={selectRandomPerson}>Suprise Me
          </button>
        </div>
      </article>
     
    </main>
  );
};
export default App;
