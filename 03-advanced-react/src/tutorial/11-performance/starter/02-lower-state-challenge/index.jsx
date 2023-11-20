import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import AddPerson from './AddPerson';


const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);


  return (
    <section>
      <AddPerson people={people} setPeople={setPeople}/>
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
