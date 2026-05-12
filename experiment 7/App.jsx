import './App.css'
import React from 'react'


function Student(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>Course: {props.course}</p>
            <p>Marks: {props.marks}</p>
        </div>
    )
}


function App() {
  return (
    <div className="container">
      <h1>Student information</h1>
      <div className="box">
        <Student name="Smriti Patel" course="Computer Science" marks="95" />
        <Student name="Aryan Singh" course="Mathematics" marks="85" />
        <Student name="Suresh Kumar" course="Physics" marks="77" />
      </div>
    </div>
  )
}

export default App
