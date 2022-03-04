import React, {useState} from 'react';
import './form.css';

const intialState = {
  firstName: '',
  lastName: '',
  biography: '', 
  transport: '',
  agree: false,
  breakfast: false, 
  lunch: false, 
  dinner: false, 
}
  
const Form = () => {
  const [formState, setFormState] = useState(intialState);

  const onChangeHandler = e => {
    const value =
      e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value;
    setFormState({
      ...formState, 
      [e.target.name]: value,
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
      <label htmlFor='transport'>Choose your favorite transport</label>
      <select
        id='transport'
        name='transport'
        onChange={onChangeHandler}
        value={formState.transport}
      >
        <option>None selected</option>
        <option value='planes'>Planes</option>
        <option value='trains'>Trains</option>
        <option value='cars'>Cars</option>
        <option value='boats'>Boats</option>
      </select>
      <fieldset>
        <legend>Select your meals</legend>
        <input
          type='checkbox'
          id='breakfast'
          name='breakfast'
          onChange={onChangeHandler}
          checked={formState.breakfast}
        />
        <label htmlFor='breakfast'>Breakfast</label>
        <input
          type='checkbox'
          id='lunch'
          name='lunch'
          onChange={onChangeHandler}
          checked={formState.lunch}
        />
        <label htmlFor='lunch'>Lunch</label>
        <input
          type='checkbox'
          id='dinner'
          name='dinner'
          onChange={onChangeHandler}
          checked={formState.dinner}
        />
        <label htmlFor='dinner'>Dinner</label>
      </fieldset>
      <label htmlFor='agree'>I agree to the TOC!</label>
      <input
        type='checkbox'
        id='agree'
        name='agree'
        onChange={onChangeHandler}
        checked={formState.agree}
      />
       <button type='submit'>Save</button>
       <button type='button' onClick={onClickHandler}>Clear values</button>
      </form>
   );
}

export default Form;
