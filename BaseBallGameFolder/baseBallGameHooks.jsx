import React, { useState } from 'react'
import TryHooks from './TryHooks';
const { memo } = React ;

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const array = []
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
    array.push(chosen)
  }
  return array;
}

const BaseBallFunc = memo(() => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (value === answer.join('')) {
      setResult('홈런')
      setTries((prevTries) => {
        return (
          [...prevTries, { try: value, result: '홈런' }]
        )
      })
      alert('게임을 다시 시작합니다.')
      setValue('')
      setAnswer(getNumbers())
      setTries([])
    } else { // 답이 틀렸다면
      const answerArray = value.split('').map((v) => parseInt(v))
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 10 번 이상 틀렸을 경우
        setResult(`10 번 넘게 틀려서 실패했습니다. 답은 ${answer.join(',')}였습니다.`)
        alert('게임을 다시 시작합니다.')
        setValue('')
        setAnswer(getNumbers())
        setTries([])
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return (
            [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }]
          )
        })
        setValue('')
      }
    }
  }

  const onChangeInput = (e) => {
    console.log(answer);
    setValue(e.target.value)
  }

  console.log('렌더링')
  return (
    <>
      <h1>{result}</h1>
      <form action="#" onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i) => { // 화살표 함수에서 중괄호는 리턴을 뜻하며 리턴과 중괄호를 없앨 시 바로 리턴된다 실무에서도 자주보게될듯
          return ( //  달라지는 부분은 중괄호라고 생각하자,
            <TryHooks key={`${i + 1}차 시도 : `} tryInfo={v} /> // html 에서는 속성이라 부르지만 리액트에서는 props 라고 불림 
          )
        })}
      </ul>
    </>
  )
})



export default BaseBallFunc; 