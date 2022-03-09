import React, { Component } from 'react';
import Try from './Try';


function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class BaseBallFunc extends React.Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  }

  onSubmitForm = () => {

  }

  onChangeInput = () => {

  }

  fruits = [
    { fruit: '사과', taste: '맛있다' },
    { fruit: '바나나', taste: '맛없다' },
    { fruit: '포도', taste: '시다' },
    { fruit: '귤', taste: '달달하다' }
  ]

  render() {
    return (
      <>
        <h1></h1>
        <form action="#" onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries}</div>
        <ul>
          {this.fruits.map((v, i) => { // 화살표 함수에서 중괄호는 리턴을 뜻하며 리턴과 중괄호를 없앨 시 바로 리턴된다 실무에서도 자주보게될듯
            return ( // 달라지는 부분은 중괄호라고 생각하자,
              <Try value={v} index={i} /> // html 에서는 속성이라 부르지만 리액트에서는 props 라고 불림
            )
          })}
        </ul>
      </>
    )
  }
}

export default BaseBallFunc; 