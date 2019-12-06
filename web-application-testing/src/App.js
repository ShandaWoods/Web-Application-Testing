import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Display from './Components/Display';


function App() {
  //app will hold state, will convert it to a class component
  //display will be passed the number of balls and strikes as props to render
  // <Display balls={this.state.balls} />
  //dashboard will have the buttons to change the number of strikes, balls, fouls and hits
  // <Dashboard strikes={incremenentStrikes />}
  //the functions for changing these will live in App and be passed to dashboard as props
  //these functions will need to have baseball logic
  //ie, if four balls reset state of balls and strikes to 0
  //the logic is all for a hitter "at bat", so don't need to persist anything

  return (
    <div className="App">
        <div className="display-container"
        style={{
          border: "solid black",
          width: "80%",
          margin: "0 auto",
          height: "50vh",
        }}
        >
        <h1 style={{
          margin:"0 auto"
        }}>Display Container</h1>
        
        </div>
        <hr/>
        <div className="dashboard-container"
        style={{
          border: "solid black",
          width: "80%",
          margin: "0 auto",
          height: "20vh",
        }}
        >
        <h1 style={{
          margin:"0 auto"
        }}>Dashboard Container</h1>
        
        </div>
    </div>
  );
}

export default App;
