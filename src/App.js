import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
  }

  hideHeader = ()=>{
    this.setState({show: false})
  }

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.hideHeader}>헤더 지우기</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("헤더 컴포넌트가 unmount합니다..");
  }
  render() {
    return (
      <h1>저를 지우지 마세요😭😭</h1>
    );
  }
}

export default App;
