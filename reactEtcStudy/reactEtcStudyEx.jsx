const React = require(`react`); //npm 에서 react 를 불러옴
const {Component} = React; //React.Component 를 줄일 수 있다

class CprogramUses extends Component {
	state = {
		text: 'Hello, webpack',
		value: ``,
	}
	calculate = (e) => {

	}
	render() {
		return (
				<>
					<div>
						<h1>{this.state.text}</h1>
						<input type="text" id="inputValue" onChange={this.calculate} value={this.state.value}/>
					</div>
				</>
		)
	}
}

module.exports = CprogramUses; //쪼갠 파일의 컴포넌트를 밖에서도 사용할 수 있도록 설정