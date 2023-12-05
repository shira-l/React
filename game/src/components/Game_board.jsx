import { useState } from 'react';
import Player_board from './Player_board'

class Player {

    constructor(name,email) {
        this.name = name;
        this.email=email;
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
    const[Iplayer,setIPlayer]=useState(-1);
    function Add_Player() {
        let name,email;
        do {
            name = prompt("Please enter your name");
        } while (name == '');
        do {
            email=prompt("Please enter your email");
        } while (name == '');
        setPlayers(prevPlayers => [...prevPlayers, new Player(name)])
        setStart(true);
    }
    function start_game(){
        setIPlayer(0);
        setBdisplay(false)
    }
    const upDatePlayer = (number) => {
        let newPlayers = players.map((Player,i) => {
            if (i==Iplayer) { Player.number = number ;Player.steps++;
            if(number==100)
           { Player.score.push(Player.steps)}
        }
            return Player
        })
        setPlayers[newPlayers]; 
        setIPlayer((Iplayer+1)%(players.length))
    }
    return (
        <>
            {Bdisplay?<button onClick={() => Add_Player()}>Add Gamer</button>:false}
            {Bdisplay?<button onClick={() => start_game()}>Start Game</button>:false}
            {start ? <Player_board players={players} upDatePlayer={upDatePlayer} Iplayer={Iplayer}/> : false}

        </>
    )
}
export default Game_board