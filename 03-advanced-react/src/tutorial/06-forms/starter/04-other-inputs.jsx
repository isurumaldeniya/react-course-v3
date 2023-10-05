import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [check, setCheck] = useState(false);
  const [framework, setFramework] = useState('angular');

  function isChecked(event) {
    setCheck(event.target.checked);
    console.log(check);
  }

  function selectFramework(event){
    setFramework(event.target.value);
  }

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkBox"
            name="freeShipping"
            checked={check}
            onChange={isChecked}
          />
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="framework" id="framework" value={framework} onChange={selectFramework}>
            {frameworks.map((framework, index) => {
              return <option key={index}>{framework}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
