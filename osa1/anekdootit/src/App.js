
import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0)); 
  const [popular, setPopular] = useState(-1);
  

  function clickHandlerSelected(){
    let rndNumber = Math.floor(Math.random()*7);
    setSelected(rndNumber);
  }

  function clickHandlerVote(){
    
    let highest = 0
    let highestValue = 0;
    let tempArr =  [];
    for (let i = 0; i < points.length; i++) {
      let temp = points[i];
      if (i === selected){
        temp++;
      }
      if (temp > highestValue){
        highestValue = temp;
        highest = i;
      }
      tempArr.push(temp);
    }
    setPoints(tempArr);
    setPopular(highest);
    
  }

  return (
    <div >
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      <p>has {points[selected]} votes</p>
      <button onClick={clickHandlerVote}>Vote</button>
      <button onClick={clickHandlerSelected}>Random anecdote</button>
      <div>
      <h2>Anecdote with most votes</h2>
      <PopularAnecdote popular={popular} anecdotes={anecdotes} points={points} />
      </div>
    </div>
  );
}

const PopularAnecdote = ({popular, anecdotes, points}) => {
  if (popular === -1){
    return(
      <div>
        <p>No votes have been given yet</p>
      </div>
    )
  }
  return (
    <div>
      {anecdotes[popular]}
      <p> has {points[popular]} votes</p>
    </div>
  )
}

export default App;
