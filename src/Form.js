import React, {useState} from 'react';
import './form.css';

const intialState = {
  firstName: '',
  lastName: '',
  biography: ''
}
  
const Form = () => {
  const [formState, setFormState] = useState(intialState);

  const onChangeHandler = e => {
    setFormState({
      ...formState, 
      [e.target.name]: e.target.value
    })
  };

  const onClickHandler = () => setFormState(intialState);

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(formState);
  }

  return (
     <form onSubmit={onSubmitHandler}>
      <h1>My Awesome Form</h1>
      <span>
        {`Your name is ${formState.firstName} ${formState.lastName}`}
      </span>
      <label htmlFor='firstName'>First name</label>
      <input
        id='firstName'
        name='firstName'
        onChange={onChangeHandler}
        value={formState.firstName} />
      <label htmlFor='lastName'>Last name</label>
      <input
        id='lastName'
        name='lastName'
        onChange={onChangeHandler}
        value={formState.lastName} />
      <label htmlFor='biography'>Biography</label>
      <textarea
        id='biography'
        name='biography'
        rows='5'
        onChange={onChangeHandler}
        value={formState.biography}
      />
       <button type='submit'>Save</button>
       <button type='button' onClick={onClickHandler}>Clear values</button>
      </form>
   );
}

export default Form;
