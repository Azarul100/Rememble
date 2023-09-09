import React, {useContext} from 'react';
import { AppContext } from '../App';

function Letter({position, attempt}) {
    const {board} = useContext(AppContext);
    const letter = board[attempt][position]
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter