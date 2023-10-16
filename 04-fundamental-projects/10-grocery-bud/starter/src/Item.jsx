import { useState } from 'react';

function Item({ item, removeItem, editItem }) {
  const { name, isComplete, id } = item;

  const [complete, setComplete] = useState(isComplete);

  const edit = (id) => {
    setComplete(!complete)
    editItem(id, !complete)
  }

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={complete}
        onChange={() => edit(id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: complete && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
