const React = require('react');

const { useState, useRef } = React; //React.Component 를 줄일 수 있다

const HooksRelay = () => {
  const [word, setWord] = useState(`김민우`);
  const [value, setValue] = useState(``);
  const [result, setResult] = useState(``);
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) { // 워드의 -1번째(마지막번째) === 인풋에입력한 값의 첫번째
      setResult(`딩동댕,다음 문제 고고고!`),
      setWord(value),
      setValue(``),
      inputRef.current.focus() // Hooks 에는 input 에 Ref와 current 를 항상 붙여줘야함
    } else {
      setResult(`땡!, 틀렸습니다.`),
      setValue(``)
      inputRef.current.focus()
    }
  }

  const onChangeInput = (e) => {
    setValue(e.target.value );
  }

    return (
      <>
        <div>끝말 잇기 문제 : {word}</div>
        <form action="#" onSubmit={onSubmitForm}>
        <label id="label" htmlFor="wordInput">글자를 입력해주세요-&gt;&gt;</label>
          <input ref={inputRef} id="wordInput" className="wordInput" type="text" value={value} onChange={onChangeInput} />
          <button type="submit">입력</button>
        </form>
        <div>{result}</div>
      </>
    )
}

module.exports = HooksRelay;