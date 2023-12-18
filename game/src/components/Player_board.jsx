import { useState } from 'react'
import Buttons from './Buttons'


function Player_board(props) {
    let m_player = props.player;
    const [player, setPlayer] = useState(m_player);
    const [win, setWin] = useState(false);
    const [number, setNumber] = useState(player.number)

   

    const calculateAverage = (array) => {
        let total = 0;
        array.forEach((item) => {
            total += item;
        });
        return Math.floor(total / array.length) ;
    }

    
    const QuitPlayer = () => {
        // debugger
        // אבא
        // {let Quit_player = props.players[props.Iplayer - 1]
        // let update_players = props.players.filter(player => player.email !== Quit_player.email)
        // props.changePlayers(update_players)
        // props.changeIPlayers((props.Iplayer) % (props.players.length - 1))
        // props.players.length === 1 ? setBdisplay(true) : null}
        setPlayer(m_player) 
        props.setDeletePlayer(false)
    }
    


    const updatePlayer = (Number) => {
        let update_player = player;
        update_player.number = Number;
        update_player.steps++;
        if (Number > 100) {
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
    // debugger
    if(props.deletePlayer){
        QuitPlayer()
    }

    return (
        
        <div className='player_board' style={props.disabled==false?{boxShadow:' rgb(249 47 96) 0px 0px 4px, rgb(250 144 167) 0px 0px 15px, rgb(250 177 192 / 68%) 0px 0px 35px, rgb(255, 255, 255) 0px 0px 100px'}:null}>
            <p><h1>GET TO 💯</h1><br />Gamer: {player.name} <br />Number: {number}<br />Steps: {player.steps}</p>
            {win ? <p className='win'>you did it</p> : null}
            <div className='buttons'>
            <Buttons player={player} updatePlayer={updatePlayer} disabled={!win && props.disabled} win={win} new_Game={new_Game} Quit={props.Quit} />
            </div>
            <p>Score: {player.score.length == 0 ? 0 : player.score.map(score => `${score} `)}</p>
        </div>
    )

}
export default Player_board
