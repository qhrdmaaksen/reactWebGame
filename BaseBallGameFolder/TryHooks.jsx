import React from 'react';

const TryHooks = ({ tryInfo }) => { // hooks 에서 props 구조 분해 사용
  return (
    <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li> // key 는 고유해야한다
  )
}

export default TryHooks;