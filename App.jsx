//import React from 'react';
import React, {Component} from 'react';
import Greeting from './Greeting/Greeting';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

    constructor(props) {
      super(props)
       this.state = {
        name: ' '
      }
    }

      setName(updatedName) {
      this.setState({ name: updatedName }
        );
    }
  
    render() {
      return (
        <>
          <div class="form-group">
          <input onChange={({target: {value}}) => this.setName(value)}
    placeholder="Enter your name"
  />
          </div>
          <Greeting className='' name={this.state.name}></Greeting>
  
        </>
      )
    }
  }
//export our component 
