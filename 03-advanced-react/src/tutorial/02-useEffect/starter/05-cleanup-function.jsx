import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <>
      <h1>Cleanup Function</h1>
      <button onClick={toggleState}>Toggle</button>
      {/* {state ? <SecondComponent /> : null} */}
      {state && <SecondComponent />}
    </>
  );
};

//when we mount and unmount the second Component the useEffect will rerun since all he things inside the
//component will rerender when mounting

const SecondComponent = () => {
  useEffect(() => {
    console.log('This is interesting');

    const inId = setInterval(() => {
      console.log('Hello from interval');
    }, 1000);

    //we can return clearInterval function to cleanUp the unfinished functions inside the useEffect
    return () => {
      clearInterval(inId);
    };
  }, []);

  return <h1>Hello World</h1>;
};

export default CleanupFunction;
