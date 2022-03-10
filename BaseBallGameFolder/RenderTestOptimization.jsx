import React, { PureComponent } from 'react';

class Test extends PureComponent { // pureComponent  는 shouldComponentUpdate 필요할때 렌더링을 자동으로 ? 해줌 , 단점은 참조관계(객체,배열등)가있는 복잡한 경우 판단하기 어려워하다?
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: { a: 'b', c: 'd'},
    array: [5, 3, 6]
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) { // 컴포넌트 최적화 (필요할때만 렌더링?)
  //   if (this.state.counter !== nextState.counter) { // 현재 카운터와 미래의 카운터가 같지않으면 렌더링
  //     return true
  //   }
  //   return false
  // }

  onClick = () => {
    this.setState({
      array: [...this.state.array, 1], // 기존 배열에 새로운 배열을 추가할때엔 이렇게 작성하는 습관을 들이자
    })
  }

  render() {
    console.log('렌더링', this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}