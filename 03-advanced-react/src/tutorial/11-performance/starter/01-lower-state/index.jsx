import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
    </section>
  );
}

const LowerState = () => {
  const [people, setPeople] = useState(data);
  

  return (
    <section>
      <Counter/>
      <List people={people} />
    </section>
  );
};
export default LowerState;
