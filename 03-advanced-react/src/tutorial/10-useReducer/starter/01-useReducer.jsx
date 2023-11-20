import { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_ITEMS, REMOVE_ITEM, RESET_ITEMS } from './constant';
import reducer from './reducer';

//default state
const defaultState = {
  people: data,
};

//reducer function that will update the state

const ReducerBasics = () => {
  // const [people, setPeople] = useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);
  //dispatch will have an action always and the action will be handled in the reducer function. Then it will update the state of the variable.

  const removeItem = (id) => {
    //passing id as another parameter for the dispatch
    dispatch({ type: REMOVE_ITEM, id: id });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearItems = () => {
    dispatch({ type: CLEAR_ITEMS });
    // setPeople([]);
  };

  const resetItems = () => {
    dispatch({ type: RESET_ITEMS });
    // setPeople(data);
  };

  return (
    <div>
      {state.people.length !== 0 ? (
        <div>
          {state.people.map((person) => {
            const { id, name } = person;
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <button onClick={() => removeItem(id)}>remove</button>
              </div>
            );
          })}
          <button
            className="btn"
            style={{ marginTop: '2rem' }}
            onClick={clearItems}
          >
            clear items
          </button>
        </div>
      ) : (
        <button className="btn" onClick={resetItems}>
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
