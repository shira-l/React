import { useState } from 'react'
import Buttons from './Buttons'


function Player_board(props) {


    const [player, setPlayer] = useState(props.player);
    const [win, setWin] = useState(false);


    const calculateAverage = (array) => {
        let total = 0;
        array.forEach((item) => {
            total += item;
        });
        return total / array.length;
    }

    const upDatePlayer = (number) => {
        let upDate_player = player;
        upDate_player.number = number;
        upDate_player.steps++;
        if (number == 100) {
            setWin(true)
            upDate_player.score.push(upDate_player.steps);
            upDate_player.average = calculateAverage(upDate_player.score);
        }
        setPlayer(upDate_player)
        props.upDatePlayers(upDate_player);
    }

    const new_Game = () => {
        debugger
        setWin(false)
        let upDate_player = player;
        upDate_player.number = Math.floor(Math.random() * 99);
        upDate_player.steps = 0;
        setPlayer(upDate_player);
        props.upDatePlayers(upDate_player);
    }
    return (
        <div>
            <p>Get to 100<br />Gamer: {player.name} <br />Number: {player.number}<br />Steps: {player.steps}</p>
            <Buttons player={player} upDatePlayer={upDatePlayer} disabled={!win&&props.disabled} win={win} new_Game={new_Game} Quit={props.Quit}/>

            <p>Score: {player.score.length == 0 ? 0 : player.score.map(score => score)}</p>
        </div>
    )

}
export default Player_board
// disabled לחשוב על 