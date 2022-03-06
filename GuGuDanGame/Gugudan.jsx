const React = require('react')

const GuGuDan = () => {//함수 컴포넌트를 활용한 구구단
  //구조분해 할당
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = React.useState(``);
  const [value, setValue] = React.useState(``);
  const [gameName, setGameName] = React.useState(`vitamin777 99단 GAME Hooks`);
  const inputRef = React.useRef(null);//ref 사용하기

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prevResult) => {//예전 값 사용
        return `축하합니다, 정답은 ` + value + ` 입니다.`;
      }) 
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue(``);
      inputRef.current.focus();
    } else {
      setResult(`땡! 틀렸습니다!`);
      setValue(``);
      inputRef.current.focus(); //ref 사용하기
    }
  }
  console.log(`렌더링`);
  return (
    <React.Fragment>
      <div>{gameName}</div>
      <div>{first} 곱하기 {second} 는 ?</div>
      <form  onSubmit={onSubmitForm}>
        <input type="number" ref={inputRef} onChange={onChangeInput} value={value} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </React.Fragment>);
}

module.exports = GuGuDan ;