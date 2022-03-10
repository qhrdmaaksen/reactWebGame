import React, { PureComponent, memo } from 'react'; // class 의 pure component 와 같이 hooks 에서는 memo 를 추가해준다

const TryHooks = memo(({ tryInfo }) => { // hooks 에서 props 구조 분해 사용 ,  memo 추가 ( state 나 props 가 바뀌었을때만 렌더링을 해줌)
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li> // key 는 고유해야한다
  )
})
export default TryHooks;