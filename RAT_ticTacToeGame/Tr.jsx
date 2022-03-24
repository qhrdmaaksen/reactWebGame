import React, {useRef, useEffect, memo} from 'react';
import Td from './Td';
import Table from './Table'

const Tr = memo(({rowData, rowIndex, dispatch}) => {
	console.log('tr rendered')

	const ref = useRef([]);
	useEffect(() => {
		console.log(rowIndex === ref.current[0], dispatch === ref.current[2], rowIndex === ref.current[3]);
		ref.current = [rowData, dispatch, rowIndex];
	}, [rowData, dispatch, rowIndex]);

	return (
			<tr>
				{Array(rowData.length).fill().map((td, i) => (
						<Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{``}</Td>
				))}
			</tr>
	);
});

export default Tr;