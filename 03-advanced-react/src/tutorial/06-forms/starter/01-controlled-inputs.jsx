import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (event) => {
  //   //event comes from the onChange event
  //   setName(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    /**
     * when a form is submit in HTML, it typically triggers a full-page refresh or navigation to a new page.
     * This is the DEFAULT behavior of a HTML FORM SUBMISSION. 
     * so we want to prevent that behavior by using preventDefault() on the submit event.Then we can send an 
     * API request or update UI without leaving/refreshing the current page
     */
    console.log(name, email, password)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>

        {/* id of the input and the htmlFor in the label should be match
        what is doing is when you click the label (name) since it now matches with the input field 
        it will move courser to the input field  */}
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </div>

      <div className="form-row">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </div>

      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
