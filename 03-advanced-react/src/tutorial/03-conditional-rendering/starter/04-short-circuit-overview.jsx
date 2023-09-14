import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [name, setName] = useState('');

  const [age, setAge] = useState(28);

  return (
    <>
      <h2>short circuit overview</h2>
      <h3>{name || 'Hello World'}</h3>
      <h3>{age || 'Hello World'}</h3>

      <h3>{name && 'Hello World'}</h3>
      <h3>{age && 'Hello World'}</h3>
    </>
  );
};
export default ShortCircuitOverview;
