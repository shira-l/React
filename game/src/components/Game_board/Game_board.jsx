import { useState } from 'react';
import Player_board from '../Player_board/Player_board.jsx'
import Log_In from '../Log_In/Log_In';
import '../Game_board/Game_board.css'
import React from 'react';

function Game_board() {
    const [players, setPlayers] = useState([])
    const [LogInDisplay, setLogInDisplay] = useState(true)
    const [IndexPlayer, setIndexPlayer] = useState(0);
    const [leadingPlayers, setLeadingPlayers] = useState([])
    const [deletePlayer, setDeletePlayer] = useState(false)



    const updatePlayers = (update_player) => {
        let newPlayers = players.map((Player) => {
            if (Player.email == update_player.email) {
                Player = update_player;
            }
            return Player
        })
        if (update_player.number != 100) { setIndexPlayer((IndexPlayer + 1) % (players.length)) }
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
        localStorage.setItem('users', JSON.stringify(users))
        leading_update()
    }


    const leading_update = () => {
        let users = JSON.parse(localStorage.getItem("users"));
        let leading_Players = []
        for (let i = 0; i < Math.min(users.length, 3); i++) {
            if (users[i].average == 1000) {
                break;
            }
            leading_Players.push(users[i])
        }
        setLeadingPlayers(leading_Players)
    }


    const Quit = (player) => {
        if (IndexPlayer < players.length - 1) { setDeletePlayer(true) }
        const update_players = players.filter(Player => Player.email !== player.email);
        setPlayers(update_players);
        setIndexPlayer((IndexPlayer) % (players.length - 1));
        players.length === 1 ? setLogInDisplay(true) : null;
    };


    const start_game = () => {
        setIndexPlayer(0)
        setLogInDisplay(false)
        leading_update()
    }


    const changeDeletePlayer = (delete_player) => {
        setDeletePlayer(delete_player)
    }



    return (
        <>
            {LogInDisplay ? (<Log_In players={players} setPlayers={setPlayers} start_game={start_game} />)
                : (<><p id='title'>GET TO 💯</p>
                <div id='board'> {players.map((player, index) => (
                    <Player_board key={index} player={player}
                        updatePlayers={updatePlayers} disabled={index !== IndexPlayer}
                        changeDeletePlayer={changeDeletePlayer}
                        deletePlayer={deletePlayer} Quit={Quit}
                    />))}</div>
                    <div id='l_gamers'><big>The leading gamers:</big> {leadingPlayers.map((player, index) => (
                        <p><big>Winner{index + 1}</big>{` | ${player.name}: ${player.average} `}</p>))}</div></>)}
        </>
    )
};
export default Game_board
