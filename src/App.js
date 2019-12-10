import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state= { sprint: 'chatterbox' }
    console.log('constructor 실행')
  }


  changeSprint = ()=>{
    this.setState({sprint: 'react'})
    console.log('setState 실행')
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.sprint !== this.state.sprint) console.log('componentDidUpdate 실행')
  }

  render() {
    const { sprint } = this.state
    console.log('render 실행')
      return sprint.length ? 
        (<><div>{this.state.sprint} sprint office hour</div>
        <button onClick={this.changeSprint}>next</button></>) : (<div>Loading..</div>)
  }
}

export default App;
