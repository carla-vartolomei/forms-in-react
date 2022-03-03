import React from 'react';
import './form.css';

const Form = () => {
  
  const onChangeHandler = e => {
    console.log(e)
  }

   return (
     <form>
       <h1>My first form in react</h1>
       <label htmlFor='firstName'>First name</label>
       <input id='firstName'/>
     </form>
   );
}

export default Form;
