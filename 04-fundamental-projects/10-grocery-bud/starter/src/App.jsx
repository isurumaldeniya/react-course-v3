import { useState } from 'react';
import Form from './Form';
import Items from './Items';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

const defaultList = JSON.parse(localStorage.getItem('itemList') || '[]' );
// console.log(defaultList)
const setLocalStorage = (itemList) => {
  localStorage.setItem('itemList', JSON.stringify(itemList));
};
const App = () => {
  function addItem(item) {
    const newItem = {
      name: item,
      isComplete: false,
      id: nanoid(),
    };
    const newItemList = [...itemList, newItem]
    setItemList(newItemList);
    setLocalStorage(newItemList);
    toast.success('item added');
  }

  function editItem(itemId, isComplete){
    // console.log('i   ' + isComplete)
    // console.log(itemId)
    const newItemList = itemList.map((item) => {
      if(item.id === itemId){
        item.isComplete = isComplete;
        return item
      }else{
        return item
      }
    })
    // console.log(newItemList)
    setLocalStorage(newItemList);
  }
  function removeItem(id) {

    const newItemList = itemList.filter((item) => item.id != id)
    setItemList(newItemList);
    // console.log(newItemList)

    setLocalStorage(newItemList);
    toast.success('item deleted');
  }
  const [itemList, setItemList] = useState(defaultList);

  return (
    <div>
      <section className="section-center">
        <ToastContainer position="top-center" />
        <Form addItem={addItem} />
        <Items itemList={itemList} removeItem={removeItem} editItem = {editItem}/>
      </section>
    </div>
  );
};

export default App;
