import React, { Component } from 'react';

class Try extends Component {

  render() {
    const { tryInfo } = this.props
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li> // key 는 고유해야한다
    )
  }
}

//export default Try;