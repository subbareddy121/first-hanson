
import './App.css';
import './Project.css';
import Func from './Functionmsg';
import Clmethod from './Classmsg';

import React, { Component } from 'react'


class App extends Component {
  constructor(){
      super();
        this.state = {
            msg1: false,
            msg2: false
        }
}

fnMsg(){
  this.setState({msg1: !this.state.msg1 })
}

clsmsg(){
  this.setState({msg2: !this.state.msg2 })
}


  render(){
    return(
      <div className="App">
      <h1>Styling Using Functional and Class Component</h1>

      <button className='btn' onClick={ ()=>this.fnMsg() }>Functional component styling</button>
      <button className='btn' onClick={ ()=>this.clsmsg() }>Class component styling</button>

      {
          this.state.msg1 ? <Func/> :null
        }
      
      {
          this.state.msg2 ? <Clmethod/> :null
        }
      
    </div>
    )
  }

}

export default App;
