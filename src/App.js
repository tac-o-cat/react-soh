import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor 실행')
  }
  componentDidMount(){
    console.log('componentDidMount 실행')
  }
  render() {
    console.log('render 실행')
    return (
      <div>react sprint office hour</div>
    )
  }
}

export default App;
