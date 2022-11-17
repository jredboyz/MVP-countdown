/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const { useRef } = React;

const SearchBar = ({getUser}) => {
  const nameRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value
    }
    getUser(obj)
  }


  return (
    <div className='searchBar-container'>
      <form onSubmit={(e) => submitHandler(e)}>
        <span className='search-input'>
          <label>
            <h2>Get Previous Info</h2>
            <input type='text' ref={nameRef} placeholder='Full Name' required/>
          </label>
          <button className='submit-btn' type='submit'>GetInfo</button>
        </span>
      </form>
      <p className='definitions'>
        Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. (source: <a href={'https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm'}>www.nhlbi.nih.gov</a>)
      </p>
    </div>
  )
}

//https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm
export default SearchBar;