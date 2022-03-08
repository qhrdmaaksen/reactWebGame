const React = require(`react`); //npm 에서 react 를 불러옴
const { Component } = React; //React.Component 를 줄일 수 있다

class RelrayFunc extends Component {
  state = {
    word: '김민우',
    value: '',
    result: '',
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) { // 워드의 -1번째(마지막번째) === 인풋에입력한 값의 첫번째
      this.setState({
        result: `딩동댕,다음 문제 고고고!`,
        word: this.state.value,
        value: ``,
      })
      this.input.focus()
    } else {
      this.setState({
        result: `땡!, 틀렸습니다.`,
        value: ``,
      })
      this.input.focus()
    }
  }

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  }

  input;
  onRefInput = (c) => {
    this.input = c;
  }

  render() {
    return (
      <>
        <div>끝말 잇기 문제 : {this.state.word}</div>
        <form action="#" onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChangeInput} />
          <button type="submit">입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = RelrayFunc; //쪼갠 파일의 컴포넌트를 밖에서도 사용할 수 있도록 설정