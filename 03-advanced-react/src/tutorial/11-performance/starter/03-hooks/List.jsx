import Item from './Person';
import { memo } from 'react';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson}/>;
      })}
    </div>
  );
};

//since we wrap the List component(child component of the index) event the index component change it does not re-render the List component
export default memo(List);
