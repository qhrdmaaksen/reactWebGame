import React, {useEffect, useRef, useState} from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumber');
  const candidate = Array(45).fill().map((v, i) => i + 1)
  const shuffle = []
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
  }
  const bonusNumber = shuffle[shuffle.length - 1]
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c)
  return [...winNumbers, bonusNumber]
}

const lottoHooks = () => {
  const [winNumbers, setWinNumbers] = useState(getWinNumbers())
  const [winBalls, setWinBalls] = useState([])
  const [bonus, setBonus] = useState(null)
  const [redo, setRedo] = useState(false)
  const timeouts = useRef([])

  useEffect = (() => {
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]])
      }, (i + 1) * 1000)
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6])
      setRedo(true)
    }, 7000)
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v)
      })
    }
  }, [timeouts.current]) // input 이 빈 배열이면 componentDidMount 랑 똑같다
  // 배열에 요소가 있다면 componentDidMount && componentDidUpdate 둘 다 수행
  // 조건문이 들어갈 수 있다
  // 바뀔때 작동

  const onClickRedo = () => {
    console.log('onClickRedo');
    setWinNumbers(getWinNumbers())
    setWinBalls([])
    setBonus(null)
    setRedo(false)
    timeouts.current = []
  }

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={this.onClickRedo}>한 번 더 !</button>}
    </>
  )
}

export default lottoHooks ;