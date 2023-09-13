import { useState, useEffect } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Hello World!');
    //if we update the value inside the function since we using
    //UseState to update the value, when update is happening component get rerender.
    //so if we call sayHello() function inside the component it will be called everytime
    //value is updated due to rerendering the component.

    //So if we update the value inside the sayHello() it will result an infinite loop
  };

  //calling sayHello
  sayHello();

  //useEffect cannot contain functions that returns Promises
  //But we can invoke functions that return promises inside useEffect

  const asyncFunction = async () => {
    await fetch();
  };
  useEffect(() => {
    asyncFunction(); //async function is getting INVOKED inside the useEffect
    console.log('Hello From Use Effect!');
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
