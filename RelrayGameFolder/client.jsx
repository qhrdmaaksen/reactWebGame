const React = require('react');
const ReactDOM = require('react-dom');

//const RelrayFunc = require(`./RelayGameClass`); // 클래스 RelayGameClass 파일
//ReactDOM.render(<RelrayFunc />, document.querySelector(`#root`)); // RelayGameClass 파일 참조

const RelrayChangeHooks = require(`./RelayGameHooks`)

ReactDOM.render(<RelrayChangeHooks />, document.querySelector('#root'))