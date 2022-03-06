const React = require(`react`); //npm 에서 react 를 불러옴
const { Component } = React; //React.Component 를 줄일 수 있다

class WordRelay extends Component {
  state = {
    text: 'Hello, webpack',
  }
  render() {
    return (
      <h1>{this.state.text}</h1>
    )
  }
}

module.exports = WordRelay; //쪼갠 파일의 컴포넌트를 밖에서도 사용할 수 있도록 설정