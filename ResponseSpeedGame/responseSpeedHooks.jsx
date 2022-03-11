import React, { useState, useRef } from 'react';


const ResponseCheck = () => {
  const [state, setState] = useState('waiting')
  const [message, setMassage] = useState('클릭하면 시작합니다.')
  const [result, setResult] = useState([])
  const timeout = useRef(null)
  const startTime = useRef(0)
  const endTime = useRef(0)

  const onClickScreen = () => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now')
        setMassage('지금 클릭하세요!')
        startTime.current = new Date()
      }, Math.floor(Math.random() * 1000) + 2000) // 2초~3초 랜덤
      setState('ready')
      setMassage('초록색이 되면 클릭하세요')
    } else if (state === 'ready') { // 성급하게 클릭함
      clearTimeout(timeout.current); // setTimeout 종료
      setState('waiting')
      setMassage('성급하게 클릭했습니다, 잠시 후 초록색일때 클릭하셔야합니다')
    } else if (state === 'now') { // 반응속도 체크 
      endTime.current = new Date()
      setState('waiting')
      setMassage('클릭해서 시작하세요')
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current]
      })
    }
  }

  const onReset = () => {
    setResult([])
  }

  const renderAverage = () => { //hooks 에 사용, 리턴문안에서 임시로 if 문 test하기에 코드 작성해놨음
    return (
      result.length == 0
        ? null
        : <>
          <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
          <button onClick={onReset}>리셋</button>
        </>
    )
  }
  // return (
  //   <>
  //     <div id="screen" className={state} onClick={onClickScreen}>
  //       {message}
  //     </div>
  //     {(() => {                    {/* 리턴문안에서 if 문 사용하기 */}
  //       if (result.length === 0) {
  //         return null
  //       } else {
  //         return <>
  //           <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
  //           <button onClick={onReset}>리셋</button>
  //         </>
  //       }
  //     })}
  //     {/*{renderAverage()}if 문 사용하려고 잠깐 막아놓음*/} 
  //   </>
  // )
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  )
}
// class ResponseCheck extends Component {
//   state = {
//     state: 'waiting',
//     message: '클릭해서 시작하세요',
//     result: [],
//   }
//   timeout; // class에서는  this.timeout 을 선언한거임
//   startTime;
//   endTime;

//   onClickScreen = () => {
//     const { state, message, result } = this.state
//     if (state === 'waiting') {
//       this.setState({
//         state: 'ready',
//         message: '초록색이 되면 클릭하세요',
//       })
//       this.timeout = setTimeout(() => {
//         this.setState({
//           state: 'now',
//           message: '지금 클릭',
//         })
//         this.startTime = new Date()
//       }, Math.floor(Math.random() * 1000) + 2000) // 2초~3초 랜덤
//     } else if (state === 'ready') { // 성급하게 클릭함
//       clearTimeout(this.timeout); // setTimeout 종료
//       this.setState({
//         state: 'waiting',
//         message: '성급하게 클릭했습니다, 잠시 후 초록색일때 클릭하셔야합니다',
//       })
//     } else if (state === 'now') { // 반응속도 체크 
//       this.endTime = new Date()
//       this.setState((prevState) => {
//         return {
//           state: 'waiting',
//           message: '클릭해서 시작하세요',
//           result: [...prevState.result, this.endTime - this.startTime],
//         }
//       })
//     }
//   }

// onReset = () => {
//   this.setState({
//     result: [],
//   })
// }

// renderAverage = () => {
//   const { result } = this.state
//   return (
//     result.length == 0
//       ? null
//       : <>
//         <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
//         <button onClick={this.onReset}>리셋</button>
//       </>
//   )
// }

// render() {
//   const { state, message } = this.state
//   return (
//     <>
//       <div id="screen" className={state} onClick={this.onClickScreen}>
//         {message}
//       </div>
//       {this.renderAverage()}
//     </>
//   )
// }
// }

export default ResponseCheck;