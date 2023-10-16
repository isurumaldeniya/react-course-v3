import { useState } from 'react';

function Form({ addItem }) {
  const [item, setItem] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    addItem(item);
    setItem('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          id="task"
          className='form-input'
          required={true}
          value={item}
          onChange={(event) => setItem(event.currentTarget.value)}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
