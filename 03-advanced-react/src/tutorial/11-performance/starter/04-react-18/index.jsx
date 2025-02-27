import { startTransition } from 'react';
import { useTransition } from 'react';
import { useState } from 'react';
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending, setIsPending] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    //since this take lot of time UI will become slow so we can use useTransition hook  to make sure that this function run in background and does not block UI

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        <h4>Loading......</h4>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}
    </section>
  );
};
export default LatestReact;
