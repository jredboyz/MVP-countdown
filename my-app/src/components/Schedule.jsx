/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import axios from 'axios'

const Schedule = ({currentUser}) => {
  const {name, age, gender, weight, height, activityLevel} = currentUser;
  const [BmrObj, setBmrObj] = useState(null)
  const [lowCal, setLowCal] = useState(null)
  const [BMR, setBMR] = useState(null)

  const getBMR = useEffect(() => {
    let weightInKG = Math.round(weight/2.2);
    let heightInCm = Math.round(height*2.54);
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
        console.log(res.data.data)
        setBmrObj(res.data.data)
        setBMR(res.data.data.goals['maintain weight'])
        setLowCal(Math.round(res.data.data.goals['maintain weight']) - 700)
      })
      .catch(err => console.log(err, 'ERROR in BMR - currentInfo.jsx'))
  }, [activityLevel, age, gender, height, weight])
  useEffect(() => {
    console.log(BMR, 'BMR')
  })

  return (
    <>
      {(BMR > 1800) ?
      <div className='schedule'>
        <h2>Example Week</h2>
        {BmrObj ? <p>Amount of calories to eat per day to lose 1lb per week: {Math.round(BmrObj.goals['Weight loss'].calory)}</p> : null}
        <div className='schedule-container'>
          <div className='weekday-container'>
            <span className='weekday'> Monday </span>
            <span className='calorie-input'> Calorie Limit: </span>
            <span className='calorie'>{lowCal ? lowCal : null}</span>
          </div>
          <div className='weekday-container'>
            <span className='weekday'> Tuesday </span>
            <span className='calorie-input'> Calorie Limit: </span>
            <span className='calorie'>{lowCal ? lowCal : null}</span>
          </div>
          <div className='weekday-container'>
            <span className='weekday'> Wednesday </span>
            <span className='calorie-input'> Calorie Limit: </span>
            <span className='calorie'>{lowCal ? lowCal : null}</span>
          </div>
          <div className='weekday-container'>
            <span className='weekday'> Thursday </span>
            <span  className='calorie-input' > Calorie Limit: </span>
            <span className='calorie'>{lowCal ? lowCal : null}</span>
          </div>
          <div className='weekday-container'>
            <span className='weekday'> Friday </span>
            <span className='calorie-input'> Calorie Limit: </span>
            <span className='calorie'>{lowCal ? lowCal : null}</span>
          </div>
          <div className='weekday-container'>
            <span className='weekday'> Saturday </span>
            <span className='calorie-input'> Calorie Limit: </span>
            <span className='calorie'>{BmrObj ? Math.round(BmrObj.goals['maintain weight']) : null}</span>
          </div>
          <div className='weekday-container-last'>
            <span className='weekday'> Sunday </span>
            <span className='calorie-input'> Calorie Limit: </span>
            <span className='calorie'>{BmrObj ? Math.round(BmrObj.goals['maintain weight']) : null}</span>
          </div>
        </div>
      </div> :
      <p className='warning'>Please consult a doctor when losing weight. It is recommened to consume at least 1500 calories per day.</p>}
    </>
  )
}

export default Schedule;