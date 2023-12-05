import { useState } from 'react';
import Player_board from './Player_board'

class Player {

    constructor(name) {
        this.name = name;
        this.steps = 0;
        this.number = Math.floor(Math.random() * 99);
        this.score = [];
        this.average = 0;
    }

}

function Game_board() {
   
    function Add_Player() {
        let name;
        do {
            name = prompt("Please enter your name");
        } while (name == '');
        setPlayers(prevPlayers => [...prevPlayers, new Player(name)])
        setStart(true);
    }
    const [players, setPlayers] = useState([])
    const [start, setStart] = useState(false)
    const[Iplayer,setIPlayer]=useState(0);
    const upDatePlayer = (number) => {
        let newPlayers = players.map((Player,i) => {
            if (i==Iplayer) { Player.number = number ;Player.steps++;}
            return Player
        })
        setPlayers[newPlayers];
       
        setIPlayer((Iplayer+1)%(players.length))
    }
    return (
        <>
            <button onClick={() => Add_Player()}>Add Gamer</button>
            <button onClick={() => start_game()}>Start Game</button>
            {start ? <Player_board players={players} upDatePlayer={upDatePlayer} Iplayer={Iplayer}/> : false}

        </>
    )
}
export default Game_board