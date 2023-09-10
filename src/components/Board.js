import React, { useState, useContext } from 'react'
import { boardDefault } from '../Words'
import Letter from './Letter'
import { AppContext } from '../App'

function Board() {
    const {currAttempt, gameOver} = useContext(AppContext);
    let rowID1 = '';
    let rowID2 = '';
    let rowID3 = '';
    let rowID4 = '';
    let rowID5 = '';
    let rowID6 = '';



    if(currAttempt.attempt === 0)
    {
        if(gameOver.gameOver)
        {
            rowID1 = '';
            rowID2 = '';
            rowID3 = '';
            rowID4 = '';
            rowID5 = '';
            rowID6 = '';
        }
        else 
        {
            rowID2 = 'rowHidden';
            rowID3 = 'rowHidden'
            rowID4 = 'rowHidden'
            rowID5 = 'rowHidden'
            rowID6 = 'rowHidden'
        }
    }

    if(currAttempt.attempt === 1)
    {
        if(gameOver.gameOver)
        {
            rowID1 = '';
            rowID2 = '';
            rowID3 = '';
            rowID4 = '';
            rowID5 = '';
            rowID6 = '';
        }
        else 
        {
            rowID1 = 'rowHidden';
            rowID3 = 'rowHidden'
            rowID4 = 'rowHidden'
            rowID5 = 'rowHidden'
            rowID6 = 'rowHidden'
        }
    }

    if(currAttempt.attempt === 2)
    {
        if(gameOver.gameOver)
        {
            rowID1 = '';
            rowID2 = '';
            rowID3 = '';
            rowID4 = '';
            rowID5 = '';
            rowID6 = '';
        }
        else 
        {
            rowID1 = 'rowHidden';
            rowID2 = 'rowHidden'
            rowID4 = 'rowHidden'
            rowID5 = 'rowHidden'
            rowID6 = 'rowHidden'
        }
    }

    if(currAttempt.attempt === 3)
    {
        if(gameOver.gameOver)
        {
            rowID1 = '';
            rowID2 = '';
            rowID3 = '';
            rowID4 = '';
            rowID5 = '';
            rowID6 = '';
        }
        else 
        {
            rowID1 = 'rowHidden';
            rowID2 = 'rowHidden'
            rowID3 = 'rowHidden'
            rowID5 = 'rowHidden'
            rowID6 = 'rowHidden'
        }
    }

    if(currAttempt.attempt === 4)
    {
        if(gameOver.gameOver)
        {
            rowID1 = '';
            rowID2 = '';
            rowID3 = '';
            rowID4 = '';
            rowID5 = '';
            rowID6 = '';
        }
        else 
        {
            rowID1 = 'rowHidden';
            rowID2 = 'rowHidden'
            rowID3 = 'rowHidden'
            rowID4 = 'rowHidden'
            rowID6 = 'rowHidden'
        }
    }

    if(currAttempt.attempt === 5)
    {
        if(gameOver.gameOver)
        {
            rowID1 = '';
            rowID2 = '';
            rowID3 = '';
            rowID4 = '';
            rowID5 = '';
            rowID6 = '';
        }
        else 
        {
            rowID1 = 'rowHidden';
            rowID2 = 'rowHidden'
            rowID3 = 'rowHidden'
            rowID4 = 'rowHidden'
            rowID5 = 'rowHidden'
        }
    }

    if(gameOver.gameOver)
    {
        rowID1 = '';
        rowID2 = '';
        rowID3 = '';
        rowID4 = '';
        rowID5 = '';
        rowID6 = '';
    }



  return (
    <div className='board'>
        <div className='row' id = {rowID1}>
            <Letter position={0} attempt={0}/>
            <Letter position={1} attempt={0}/>
            <Letter position={2} attempt={0}/>
            <Letter position={3} attempt={0}/>
            <Letter position={4} attempt={0}/>
        </div>
        <div className='row' id={rowID2}>
            <Letter position={0} attempt={1}/>
            <Letter position={1} attempt={1}/>
            <Letter position={2} attempt={1}/>
            <Letter position={3} attempt={1}/>
            <Letter position={4} attempt={1}/>
        </div>
        <div className='row' id={rowID3}>
            <Letter position={0} attempt={2}/>
            <Letter position={1} attempt={2}/>
            <Letter position={2} attempt={2}/>
            <Letter position={3} attempt={2}/>
            <Letter position={4} attempt={2}/>
        </div>
        <div className='row' id={rowID4}>
            <Letter position={0} attempt={3}/>
            <Letter position={1} attempt={3}/>
            <Letter position={2} attempt={3}/>
            <Letter position={3} attempt={3}/>
            <Letter position={4} attempt={3}/>
        </div>
        <div className='row' id={rowID5}>
            <Letter position={0} attempt={4}/>
            <Letter position={1} attempt={4}/>
            <Letter position={2} attempt={4}/>
            <Letter position={3} attempt={4}/>
            <Letter position={4} attempt={4}/>
        </div>
        <div className='row' id={rowID6}>
            <Letter position={0} attempt={5}/>
            <Letter position={1} attempt={5}/>
            <Letter position={2} attempt={5}/>
            <Letter position={3} attempt={5}/>
            <Letter position={4} attempt={5}/>
        </div>
    </div>
  )
}

export default Board