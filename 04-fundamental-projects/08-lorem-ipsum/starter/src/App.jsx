import { useState } from 'react';
import text from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [textArray, setTextArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newArray = [...text];

    //truncating array with length property
    newArray.length = count;
    setTextArray(newArray);
  };

  return (
    <div>
      <h2 className="title">Tired of boring lorem ipsum?</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs</label>
        <input
          type="number"
          id="number"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={(event) => setCount(event.currentTarget.value)}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <section>
        {textArray.map((quote, index) => {
          return <p key={index}>{quote}</p>;
        })}
      </section>
    </div>
  );
};
export default App;
