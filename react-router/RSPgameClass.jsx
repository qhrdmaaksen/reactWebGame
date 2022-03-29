import React, { PureComponent } from 'react';

/*라이프 사이클 = 클래스의 경우 -> constructor -> rendering -> ref 부분실행 -> componentDidMount -> (setState or props바뀔때 -> shouldComponentUpdate(true)
 -> render -> componentDidUpdate -> 부모가 나를 없앨을때 -> componentWillUnmount -> 소멸 */

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px'
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => {
    return v[1] === imgCoord
  })[0]
}

class RSP extends PureComponent {
  state = {
    result: '',
    imgCoord: rspCoords.바위, // 이미지의 좌표
    score: 0,
  };

  interval;

  // 보통 componentDidMount 여기에 비동기 요청을 많이 함
  componentDidMount() { // 첫번째 렌더가 처음 성공적으로 실행되었다면 componentDidMount 가 실행됨, 하지만 setState로 리렌더링이 될때엔 실행되진않음
    this.interval = setInterval(this.changeHand, 300) // 계속 반복되는 코드, 이런 코드 경우 종료 시키지않는다면 계속해서 반복작업을하기때문에 종료코드를 항상 넣어줘야함
    // 손 움직이게 
  }

  componentDidUpdate() { // 리렌더링 후에 실행됨

  }

  //componentWillUnmount 여기에 보통 비동기 요청 정리를 많이 함 
  componentWillUnmount() { // 컴포넌트가 제거되기 직전에 실행됨 , 부모가 자식 컴포넌트를 없앴을때 실행됨
    clearInterval(this.interval)
  }

  changeHand = () => {
    const { imgCoord } = this.state
    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위,
      })
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보,
      })
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위,
      })
    }
  }


  onClickBtn = (choice) => () => { // 고차함수 , button 에있는 onClick 에서 () => 를 빼와서 해당 함수에 넣어줬다.
    const { imgCoord } = this.state
    clearInterval(this.interval)
    const myScore = scores[choice]
    const cpuScore = scores[computerChoice(imgCoord)]
    const diff = myScore - cpuScore
    if (diff === 0) {
      this.setState({
        result: '비겼습니다.'
      })
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다.',
          score: prevState.score - 1,
        }
      })
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 300) // 0,1 초 뒤 손 움직이게 
    }, 2000) // 2초 뒤 결과 확인
  }

  render() {
    const { result, score, imgCoord } = this.state
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score} 점</div>
      </>
    )
  }
}

export default RSP;
