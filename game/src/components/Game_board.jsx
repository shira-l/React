import { useState } from 'react';
import Player_board from './Player_board'
import Log_In from './Log_In';
import '../App.css'

function Game_board() {
    const [players, setPlayers] = useState([])
    const [Bdisplay, setBdisplay] = useState(true)
    const [Iplayer, setIPlayer] = useState(0);
    const [leadingPlayers, setLeadingPlayers] = useState([])


    const updatePlayers = (update_player) => {
        let newPlayers = players.map((Player) => {
            if (Player.email == update_player.email) {
                Player = update_player;
            }
            return Player
        })
        if (update_player.number != 100) { setIPlayer((Iplayer + 1) % (players.length)) }
        else {
            update_storage(update_player)
        }
        setPlayers(newPlayers);
    }


    const update_storage = (player) => {
        let users = JSON.parse(localStorage.getItem("users"));
        for (let user of users) {
            if (user.email === player.email) {
                user.score = player.score
                user.average = player.average
            }
        }
        users.sort((user1, user2) => {
            if (user1.average < user2.average) return -1;
            if (user1.average > user2.average) return 1;
            return 0;
        });
        debugger
        localStorage.setItem('users', JSON.stringify(users))
        leading_update()
    }


    const leading_update = () => {
        debugger
        let users = JSON.parse(localStorage.getItem("users"));
        let leading_Players = []
        for (let i = 0; i < Math.min(users.length, 3); i++) {
            if (users[i].average == 1000) {
                break
            }
            leading_Players.push(users[i])
        }
        setLeadingPlayers(leading_Players)
    }


    const Quit = () => {
        debugger
        let Quit_player = players[Iplayer]
        let update_players = players.filter(player => player.email !== Quit_player.email)
        setPlayers(update_players)
        setIPlayer((Iplayer) % (players.length - 1))
        players.length === 1 ? setBdisplay(true) : null
    }


    const start_game = () => {
        debugger
        setIPlayer(0)
        setBdisplay(false)
        leading_update()
    }


    return (
        <>

            {Bdisplay ? <Log_In players={players} setPlayers={setPlayers} start_game={start_game} />
                : <div id='board'> {players.map((player, index) => { return <Player_board key={index} player={player} updatePlayers={updatePlayers} disabled={index != Iplayer} Quit={Quit} /> })}</div>}
            {!Bdisplay ? <p>The leading gamers: {leadingPlayers.map(player => `${player.name}: ${player.average} `)}</p> : null}
        </>
    )
}
export default Game_board
