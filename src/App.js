import React from 'react';
import './App.css';
import Input from './Input'
import WrittenDiaries from './WrittenDiaries'

class App extends React.Component {
  constructor() {
    super()
    this.state = { logs: [], log:''}
  }

  onMessageChange = (text)=>{
    this.setState({log: text})
  }
  
  // onSubmit에서는 setState를 실행합니다. 
  onSubmit = (log) => {
    this.setState({logs: this.state.logs.concat(log), log: ''})
  }

  render() {
    const { log, logs } = this.state
    return (
      <>
        <h1>one line diary</h1>
        <WrittenDiaries logs={logs} />
        {/* 스테이트 끌어올리기를 위한 함수 onSubmit을 Input 컴포넌트에 내려줍니다. */}
        <Input onMessageChange={this.onMessageChange} onSubmit={this.onSubmit} log={log}/>
      </>
    )
  }
}

export default App;
