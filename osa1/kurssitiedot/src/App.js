import React from 'react'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  );
}
const Part = (props) => {
  return (
    <p>
        {props.part} {props.exercises}
      </p>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part} exercises={props.exercises} />
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}/>
      <Part part={part1} exercises={exercises1} />
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>

  )
}

export default App;
