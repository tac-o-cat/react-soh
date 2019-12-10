import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor 실행')
    this.state = {message:'loading...'}
  }
  componentDidMount(){
    console.log('componentDidMount 실행')
    setTimeout(()=>{
      this.setState({message:'IM16 react sprint'})
    }, 3000)
  }
  render() {
    const { message } = this.state
    console.log('render 실행')
    return (
      <div>{message}</div>
    )
  }
}

export default App;
