import { useState } from 'react'
import Buttons from './Buttons'


function Player_board(props) {


    const [player, setPlayer] = useState((player) => { player = props.player; return player });
    const [win, setWin] = useState(false);
    const [number, setNumber] = useState(player.number)


    const calculateAverage = (array) => {
        let total = 0;
        array.forEach((item) => {
            total += item;
        });
        return total / array.length;
    }

    const updatePlayer = (Number) => {
        let update_player = player;
        update_player.number = Number;
        update_player.steps++;
        if (Number == 100) {
            setWin(true)
            update_player.score.push(update_player.steps);
            update_player.average = calculateAverage(player.score);
        }
        setPlayer(update_player)
        setNumber(Number)
        props.updatePlayers(player);
    }

    const new_Game = () => {
        setWin(false)
        let update_player = player;
        update_player.number = Math.floor(Math.random() * 99);
        update_player.steps = 0;
        setPlayer(update_player);
        setNumber(player.number)
        props.updatePlayers(update_player);
    }
    return (
        <div>
            <p>Get to 100<br />Gamer: {player.name} <br />Number: {number}<br />Steps: {player.steps}</p>
            {win ? <p>you did it</p> : null}
            <Buttons player={player} updatePlayer={updatePlayer} disabled={!win && props.disabled} win={win} new_Game={new_Game} Quit={props.Quit} />
            <p>Score: {player.score.length == 0 ? 0 : player.score.map(score => `${score} `)}</p>
        </div>
    )

}
export default Player_board
