import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const { useRef } = React;

const SearchBar = () => {
  const nameRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value
    }
    console.log(obj)
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <span className='search-input'>
        <label> Get previous info
          <input type='text' ref={nameRef} placeholder='Full Name' required/>
        </label>
        <button className='submit-btn' type='submit'>GetInfo</button>
      </span>
    </form>
  )
}

export default SearchBar;