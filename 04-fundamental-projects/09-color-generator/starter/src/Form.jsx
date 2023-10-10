import { useState } from "react";
import Values from "values.js";

function Form({setColorList}){

  const [color, setColor] = useState('#57a864');

  function handleSubmit(event){
    event.preventDefault();
    setColorList(new Values(color).all(10))
  }

  return <section className="container">
    <h1 className="title">Color Generator</h1>
    <form className="color-form" onSubmit={handleSubmit}>
      <input type="color" id="color" value={color} onChange={(event) => setColor(event.currentTarget.value)} />
      <input type="text" value={color} onChange={(event) => setColor(event.currentTarget.value)} />
      <button type="submit" className="btn" style={{backgroundColor: color}}>submit</button>
    </form>
  </section>
}

export default Form;