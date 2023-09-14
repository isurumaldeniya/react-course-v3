import { useState } from 'react';

const ToggleChallenge = () => {
  const [value, setvalue] = useState(false);

  const clickButton = () => {
    setvalue(true);
  };

  // function clickButtonNew() {
  //   setvalue(true);
  // }

  const unClickButton = () => {
    setvalue(false);
  };

  return (
    <>
      <h2>toggle challenge</h2>
      {/* here we are not invoking the function directly but just calling it. */}
      {!value && <button onClick={clickButton}>Click!</button>}
      {/* <button className="btn" onClick={() => setvalue(!value)}></button> */}

      {value && (
        <div>
          <h3>You clicked the button!!</h3>
          <button onClick={unClickButton}>Unlcick Me!</button>
        </div>
      )}
    </>
  );
};

export default ToggleChallenge;
