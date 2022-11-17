/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const { useRef } = React;

const UserForm = ({postUser}) => {
  const nameRef = useRef(null)
  const ageRef = useRef(null)
  const genderRef = useRef(null)
  const weightRef = useRef(null)
  const heightRef = useRef(null)
  const activityRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      weight: weightRef.current.value,
      height: heightRef.current.value,
      activityLevel: activityRef.current.value
    }
    postUser(obj)
    console.log(obj)
  }

  return (
    <form onSubmit={(e) => submitHandler(e)} className='form-container'>
      <h2>Enter Information Here</h2>
      <label>
        Full Name
        <input type='text' ref={nameRef} required/>
      </label>
      <label>
        Age
        <input type='number' ref={ageRef}  required/>
      </label>
      <label>
        Gender
        <select ref={genderRef} required>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </label>
      <label>
        Weight(lb)
        <input type='number' ref={weightRef} required/>
      </label>
      <label>
        Height(in)
        <input type='number' ref={heightRef} required/>
      </label>
      <label>
        Activity Level
        <select ref={activityRef} required>
          <option value='level_1'>Sedentary: little or no exercise</option>
          <option value='level_2'>Exercise 1-3 times/week</option>
          <option value='level_3'>Exercise 4-5 times/week</option>
          <option value='level_4'>Daily exercise or intense exercise 3-4 times/week</option>
          <option value='level_5'>Intense exercise 6-7 times/week</option>
          <option value='level_6'>Very intense exercise daily, or physical job</option>
        </select>
      </label>
      <button className='submit-btn' type='submit'>Submit</button>
    </form>
  )
}
/*
{
‘level _ 1’ : “Sedentary: little or no exercise”,
‘level _ 2’ : “Exercise 1-3 times/week”,
‘level _ 3’ : “Exercise 4-5 times/week”,
‘level _ 4’ : “Daily exercise or intense exercise 3-4 times/week”,
‘level _ 5’ : “Intense exercise 6-7 times/week”,
‘level _ 6’ : “Very intense exercise daily, or physical job”
}
*/

export default UserForm;