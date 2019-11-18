import React, {Component} from 'react';
// import logo from './superman.png';
import './App.css';
import GenerateEmployee from './GenerateEmployee.js'
import DisplayEmployee from './DisplayEmployee.js'
import sampleEmployee from './SampleEmployee.js'
import GenerateSimpson from './GenerateSimpson';
import DisplaySimpson from './DisplaySimpson.js'
import sampleSimpson from './SampleSimpson.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // we can set up our sampleEmployee as the default
      // to always display an employee
      // employee:  sampleEmployee
      simpson: sampleSimpson

    };
  }

    getEmployee() {
    // Employee collection via fetch
    fetch("https://randomuser.me/api?nat=fr")
      .then(response  =>  response.json())
      .then(data  => {
        // Once the data is collected, we update our state with the new data
        this.setState({
          employee:  data.results[0],
        });
    });
}

getSimpson() {
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
    .then(response  =>  response.json())
    .then(data  => {
      this.setState({
        simpson: data[0],
      });
      console.log(data)
  });
}



  render (){
    return(
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <DisplaySimpson  simpson ={this.state.simpson}  />
      {/* <DisplayEmployee  employee={this.state.employee}  /> */}
      {/* <DisplayEmployee employee={sampleEmployee}/> */}

      {/* <GenerateEmployee selectEmployee={() =>  this.getEmployee()}/> */}
      <GenerateSimpson selectSimpson={() => this.getSimpson()}/>

      </header>
      
    </div>
  );
}
}

export default App;
