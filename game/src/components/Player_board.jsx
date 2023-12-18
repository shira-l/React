import { useState } from 'react'
import Buttons from './Buttons'
import React from 'react';

function Player_board(props) {
    let player  = props.m_player;
    const [number, setNumber] = useState(player.number)
    

    const calculateAverage = (array) => {
        let total = 0;
        array.forEach((item) => {
            total += item;
        });
        return Math.floor(total / array.length);
    }


    const QuitPlayer = () => {
     props.changeDeletePlayer(false)
       setNumber(player.number)
        
    }


    const updatePlayer = (Number) => {
       player.number = Number;
       player.steps++;
        if (Number == 100) {
            player.score.push(player.steps);
           player.average = calculateAverage(player.score);
        }
        setNumber(Number);
        props.updatePlayers(player);
        
    }


    const new_Game = () => {
        setWin(false)
        player.number = Math.floor(Math.random() * 99);
        player.steps = 0;
        setNumber(player.number)
        props.updatePlayers(player);
    }
    if (props.deletePlayer&&number==100 ) {
        QuitPlayer()
    }

    return (

        <div className='player_board' style={props.disabled == false ? { boxShadow: ' rgb(249 47 96) 0px 0px 4px, rgb(250 144 167) 0px 0px 15px, rgb(250 177 192 / 68%) 0px 0px 35px, rgb(255, 255, 255) 0px 0px 100px' } : null}>
            <p><h1>GET TO 💯</h1><br />Gamer: {player.name} <br />Number: {number}<br />Steps: {player.steps}</p>
            {number==100 ? <p className='win'>you did it</p> : null}
            <div className='buttons'>
                <Buttons player={player} updatePlayer={updatePlayer} disabled={number!=100 && props.disabled} win={number==100} new_Game={new_Game} Quit={props.Quit} />
            </div>
            <p>Score: {player.score.length == 0 ? 0 : player.score.map(score => `${score} `)}</p>
        </div>
    )

}
export default Player_board
