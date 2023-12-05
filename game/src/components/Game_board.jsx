import { useState } from 'react';
import Player_board from './Player_board'

class Player {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.steps = 0;
        this.number = Math.floor(Math.random() * 99);
        this.score = [];
        this.average = 0;
    }

}

function Game_board() {
    const [players, setPlayers] = useState([])
    const [start, setStart] = useState(false)
    const [Bdisplay, setBdisplay] = useState(true)
    const [Iplayer, setIPlayer] = useState(-1);

    function Add_Player() {
        let name, email;
        do {
            name = prompt("Please enter your name");
        } while (name === '');
        if (name === null) {
            return;
        }
        do {
            email = prompt("Please enter your email");
        } while (email == '');
        if (email === null) {
            return;
        }
        setPlayers(prevPlayers => [...prevPlayers, new Player(name, email)])
        setStart(true);
    }



    const upDatePlayers = (upDate_player) => {
        let newPlayers = players.map((Player) => {
            if (Player.email == upDate_player.email) {
                Player = upDate_player;
            }
            return Player
        })
        setPlayers[newPlayers];
        setIPlayer((Iplayer + 1) % (players.length))
    }


    const Quit = () => {
        setPlayers(players.splice(Iplayer, 1))
        if(players.length===0) {
            setBdisplay(true);
        }
    }

    return (
        <>
            {Bdisplay ? <button onClick={() => Add_Player()}>Add Gamer</button> : false}
            {Bdisplay ? <button onClick={() => { setIPlayer(0); setBdisplay(false) }}>Start Game</button> : false}
            {start ? players.map((player, index) => (<Player_board key={index} player={player} upDatePlayers={upDatePlayers} disabled={index != Iplayer} Quit={Quit} />)) : null}

        </>
    )
}
export default Game_board