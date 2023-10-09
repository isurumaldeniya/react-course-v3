import { useState } from 'react';
import { people } from '../../../data';
import Person from './Person';

function List() {
  const [person, setPerson] = useState(people);

  return (
    <div>
      {people.map((person) => {
        return <Person person={person} key={person.id} />;
      })}
    </div>
  );
}

export default List;
