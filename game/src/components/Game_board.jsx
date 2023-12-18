import { useState } from 'react';
import Player_board from './Player_board'
import Log_In from './Log_In';
import '../App.css'


function Game_board() {
    const [players, setPlayers] = useState([])
    const [Bdisplay, setBdisplay] = useState(true)
    const [Iplayer, setIPlayer] = useState(0);
    const [leadingPlayers, setLeadingPlayers] = useState([])
    const [deletePlayer, setDeletePlayer] = useState(false)


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
        ////debugger
        localStorage.setItem('users', JSON.stringify(users))
        leading_update()
    }


    const leading_update = () => {
        //debugger
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
        // קבל את מזהה השחקן הנוכחי
        const Quit_player = players[Iplayer-1];
        // אם השחקן הנוכחי הוא לא השחקן האחרון
        //if (Iplayer < players.length - 1) {
          // הסר את השחקן הנוכחי מהמערך
          const update_players = players.filter(player => player.email !== Quit_player.email);
          setPlayers(update_players);
          // עדכן את השחקן הפעיל
          setIPlayer((Iplayer + 1) % (players.length));
          players.length === 1 ? setBdisplay(true) : null;
        //}
        // אם השחקן הנוכחי הוא השחקן האחרון
        //else {
          // תן לשחקן לשחק את התור שלו
         // setIPlayer((Iplayer + 1) % (players.length));
        //}
      };

    const start_game = () => {
        //debugger
        setIPlayer(0)
        setBdisplay(false)
        leading_update()
    }

    const changePlayers = (players) => {
        setPlayers(players)
    }

    const changeIPlayers = (index_players) => {
        setIPlayer(index_players)
    }

    const changeDeletePlayer = (delete_Player) => {
        setDeletePlayer(delete_Player)
    }
    return (
        <>

            {Bdisplay ? (<Log_In players={players} setPlayers={setPlayers} start_game={start_game} />)
                : (<div id='board'> {players.map((player, index) => (
                    <Player_board key={index} player={player}
                        updatePlayers={updatePlayers} disabled={index !== Iplayer} changeIPlayers={changeIPlayers}
                        changePlayers={changePlayers} IPlayer={Iplayer}
                        players={players} deletePlayer={deletePlayer} setDeletePlayer={changeDeletePlayer} Quit={Quit}
                    />))}</div>)}
            {!Bdisplay ? (<p>The leading gamers: {leadingPlayers.map(player =>
                `${player.name}: ${player.average} `)}</p>) : null}
        </>
    )
};
export default Game_board
