import React from 'react';

const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    );
  }
  
  const Total = ({parts}) => {
    return (
      <b>Number of exercises {parts.map(part => part.exercises).reduce((x,y) => x + y ) }</b>
    );
  }
  const Part = (props) => {
    return (
      <p>
          {props.name} {props.exercises}
        </p>
    );
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id} />)}
      </div>
    );
  }
  
  const Course = ({course}) => {
    return(
    <div>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
    </div>
    )
  }


export default Course;