/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import axios from 'axios'

const CurrentUserInfo = ({currentUser}) => {
  const {name, age, gender, weight, height, activityLevel} = currentUser;
  const [BMI, setBMI] = useState('')
  const [BMR, setBMR] = useState('')
  const getBMI = useEffect(() => {
    let weightInKG = Math.round(weight/2.2);
    let heightInCm = Math.round(height*2.54);
    const config = {
      method: 'get',
      url: `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weightInKG}&height=${heightInCm}`,
      headers: {
        'X-RapidAPI-Key': 'd261525b8bmshd2f96c81ef663fcp175fafjsn15778a12c0ca',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };
    axios(config)
      .then((res) => {
        setBMI(res.data.data)
      })
      .catch((err) => {console.log(err, 'ERROR in BMI request - CurrentInfo.jsx')})
    const options = {
      method: 'GET',
      url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
      params: {
        age: age,
        gender: gender,
        height: heightInCm,
        weight: weightInKG,
        activitylevel: activityLevel
      },
      headers: {
        'X-RapidAPI-Key': 'd261525b8bmshd2f96c81ef663fcp175fafjsn15778a12c0ca',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };
    axios(options)
      .then((res) => {
        setBMR(res.data.data)
      })
      .catch(err => console.log(err, 'ERROR in BMR - currentInfo.jsx'))
  }, [activityLevel, age, gender, height, weight])

  return (
    <div className='currentInfo-container'>
      <h2>Current user Info</h2>
      <div className='currentInfo'>Name:<span className='value'> {name}</span></div>
      <div className='currentInfo'>Age:<span className='value'> {age}</span></div>
      <div className='currentInfo'>Gender:<span className='value'> {gender}</span></div>
      <div className='currentInfo'>Weight:<span className='value'> {weight}lbs</span></div>
      <div className='currentInfo'>Height:<span className='value'> {height}in</span></div>
      <div className='currentInfo'>Activity Level:<span className='value'> {activityLevel}</span></div>
      {BMI.bmi ? <span className='currentInfo'>BMI:<span className='value'> {BMI.bmi}</span> Range:<span className='value'> {BMI.healthy_bmi_range}</span></span> : null}
      {BMR.goals ? <span className='currentInfo'>BMR:<span className='value'> {BMR.goals[`maintain weight`]}</span></span> : null}
    </div>
  )
}

export default CurrentUserInfo;