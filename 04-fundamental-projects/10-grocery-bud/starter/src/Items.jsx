import Item from './Item';

function Items({ itemList, removeItem, editItem }) {

  console.log(itemList)
  return (
    <div className="items">
      {itemList.map((item, index) => {
        return <Item key={index} item={item} removeItem={removeItem} editItem={editItem}/>;
      })}
    </div>
  );
}

export default Items;
