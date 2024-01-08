import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import { useMemo } from 'react';
import slowFunction from './slowFunction';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);


  //every time the component rerender removePerson is created as a new function.
  // so it's state is changing hence even though it does not invoke it's value is changing.
  // since the value of the removePerson is changing List component which has removePerson as a PROP also re-rerender even we have use memo. 

  //to mitigate this issue we use useCallback hook
  //using useCallback we can create a function once if the state of the array does not change the function does not created again even the component re-render
  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    // we need to pass the dependency of `people` to make sure the function will be re created when the state change.
    [people]
  );

  //using useMemo will remember the value return by slowFunction and does not need to invoked it again in each re-render
  const value = useMemo(() => slowFunction(), [])

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>

      {/* if people props does not change it will not re-render the List component */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
