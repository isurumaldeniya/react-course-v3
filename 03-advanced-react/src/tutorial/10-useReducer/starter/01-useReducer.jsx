import { useState, useReducer } from 'react';
import { data } from '../../../data';

//default state
const defaultState = {
  people: data,
};

//reducer function that will update the state
const reducer = (state, action) => {
  if (action.type === 'Clear_Items') {
    return { ...state, people: [] };
  } else if (action.type === 'Reset_Items') {
    return { ...state, people: data };
  } else if (action.type === 'Remove_Item') {
    let newPeople = state.people.filter((person) => person.id !== action.id);
    return { ...state, people: newPeople };
  }
};

const ReducerBasics = () => {
  // const [people, setPeople] = useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);
  //dispatch will have an action always and the action will be handled in the reducer function. Then it will update the state of the variable.

  const removeItem = (id) => {

    //passing id as another parameter for the dispatch
    dispatch({ type: 'Remove_Item', id: id });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearItems = () => {
    dispatch({ type: 'Clear_Items' });
    // setPeople([]);
  };

  const resetItems = () => {
    dispatch({ type: 'Reset_Items' });
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
