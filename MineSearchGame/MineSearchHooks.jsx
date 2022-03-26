import React, {useReducer, createContext, useMemo} from 'react';
import Form from "./Form";
import Table from "./Table";

export const CODE = {
	MINE: -7,
	NORMAL: -1,
	QUESTION: -2,
	FLAG: -3,
	QUESTION_MINE: -4,
	FLAG_MINE: -5,
	CLICKED_MINE: -6,
	OPENED: 0, // 0 이상이면 다 OPENED
}

export const TableContext = createContext({
	tableData: [
		[-1, -1, -1, -1, -1, -1, -1],
		[-7, -1, -1, -1, -1, -1, -1],
		[-1, -7, -1, -7, -7, -1, -1],
		[-1, -1, -1, -1, -1, -1, -1],
		[-1, -1, -1, -1, -1, -1, -1],
	],
	dispatch: () => {},
});

const initialState = { // 초기 state
	tableData: [],
	timer: 0,
	result: '',
};

const plantMine = (row, cell, mine) => {
	console.log(row, cell, mine);
	const candidate = Array(row * cell).fill().map((arr, i) => {
		return i;
	});
	const shuffle = [];
	while (candidate.length > row * cell - mine) {
		const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
		shuffle.push(chosen);
	}
	const data = [];
	for (let i = 0; i < row; i++) {
		const rowData = [];
		data.push(rowData);
		for (let j = 0; j < cell; j++) {
			rowData.push(CODE.NORMAL);
		}
	}
	for (const item of shuffle) {
		const ver = Math.floor(item / cell);
		const hor = item % cell;
		data[ver][hor] = CODE.MINE;
	}
	console.log(data)
	return data;
};

export const START_GAME = 'START_GAME';

const reducer = (state, action) => {
	if (action.type === START_GAME) {
		return {
			...state,
			tableData: plantMine(action.row, action.cell, action.mine)
		};
	} else {
		return state;
	}
}

const MineSearchHooks = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = useMemo(() => ({
		tableData: state.tableData, dispatch
	}), [state.tableData]);

	return (
			<TableContext.Provider value={value}>
				<Form dispatch={dispatch}/>
				<div>{state.timer}</div>
				<Table/>
				<div>{state.result}</div>
			</TableContext.Provider>
	)
}

export default MineSearchHooks;