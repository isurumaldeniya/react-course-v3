import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const [colorList, setColorList] = useState(new Values('#57a864').all(10));
  return (
    <div>
      <Form setColorList={setColorList}/>
      <ColorList colorList={colorList}/>
      <ToastContainer position='top-center' />
    </div>
  );
};
export default App;
