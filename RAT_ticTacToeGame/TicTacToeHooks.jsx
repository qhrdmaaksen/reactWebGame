import React, {useState, useReducer, useCallback} from 'react';
import Table from './Table'

const initialState = {
	winner: '',
	turn: 'O',
	tableData: [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]
};
export const CLICK_CELL = 'CLICK_CELL';
export const SET_WINNER = 'SET_WINNER'; // 변수로 따로 빼두는게 좋다

const reducer = (state, action) => { // 액션을 dispatch 할때마다 reducer 가 실행
	console.log('reducerFunc')
	switch (action.type) {
		case SET_WINNER:
			// state.winner = action.winner ; 이렇게 하면 안된다
			return {
				...state, // 새로운 객체를 만들어서 값을 바꿔줘야한다.
				winner: action.winner
			};
		case CLICK_CELL: {
			const tableData = [...state.tableData];
			tableData[action.row] = [...tableData[action.row]]; // immer 라는 라이브러리로 가독성 해결
			tableData[action.row][action.cell] = state.turn;
			return {
				...state,
				tableData,
			};
		}
	}
}

const TicTacToeHooks = () => {
	console.log('TicTacToeHooksFunc')
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [winner, setWinner] = useState('');
	// const [turn, setTurn] = useState('');
	// const [tableData, setTableData] = useState([['', '', ''],['', '', ''],['', '', '']]);
	const onClickTable = useCallback(() => {
		dispatch({type: SET_WINNER, winner: 'O'}) // 디스패치안에는 액션을 만들어주고 액션안에 타입을 만들어줘야한다
	}, []);

	return (
			<>
				<Table onClick={onClickTable} tableData={state.tableData}/>
				{state.winner && <div>{state.winner}님의 승리!</div>}
			</>
	)
}

export default TicTacToeHooks;
