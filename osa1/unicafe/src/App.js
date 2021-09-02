import React, {useState} from "react";

const App = ()=> { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div >
      <h1>Give Feedback</h1>
    <Button text={'good'} clickHandler={()=> setGood(good + 1)} />
    <Button text={'neutral'} clickHandler={()=> setNeutral(neutral + 1)} />
    <Button text={'bad'} clickHandler={()=> setBad(bad + 1)} />
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

const Statistics = ({good,neutral,bad})=> {
  let total = good+neutral+bad;
  if (total > 0){
  return (

    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
    <StatisticLine text={'Good'} value={good} />
    <StatisticLine text={'Neutral'} value={neutral} />
    <StatisticLine text={'Bad'} value={bad} />
    <StatisticLine text={'All'} value={total} />
    <StatisticLine text={'Average'} value={(good - bad )/(total)} />
    <StatisticLine text={'Positive'} value={good/(total) } valueChar={'%'} />
        </tbody>
      </table>
    </div>
  )
} else {
  return(
    <div>
      <h2>Statistics</h2>
      <p>No Feedback given</p>
    </div>
  )
}
}

const StatisticLine = ({text, value, valueChar}) => {

  return(
    <tr>
      <td>{text}</td>
      <td>{(valueChar) ? value + '' + valueChar : value}</td>
    </tr>
  )
}

const Button = ({text, clickHandler}) => {
  return (
    <>
      <button onClick={clickHandler}>{text}</button>
    </>
  )
}
export default App;
