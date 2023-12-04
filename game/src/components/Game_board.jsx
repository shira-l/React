import { useState } from 'react';
import Player_board from './Player_board'

class Player {
    constructor(name, index) {
        this.name = name;
        this.steps = 0;
        this.number = Math.floor(Math.random() * 99);
        this.score = [];
        this.average = 0;
        this.index = index;
    }
}

function Game_board() {
    function Add_Player() {
        let name;
        do {
            name = prompt("Please enter your name");
        } while (name == '');
        setPlayers(prevPlayers => [...prevPlayers, new Player(name, players.length + 1)])
        setStart(true);
    }
    const [players, setPlayers] = useState([])
    const [start, setStart] = useState(false)
    const setPlayer = (index, number) => {
        debugger
        let newPlayers = players.map((player, i) => {
            if (i + 1 == index) { player.number = number }
            player.steps++;
            return player
        })
        console.log(newPlayers)
        setPlayers[newPlayers];
        console.log(players)
    }
    return (
        <>
            <button onClick={() => Add_Player()}>add gamer</button>
            {start ? <Player_board players={players} setPlayer={setPlayer} /> : false}

        </>
    )
}
export default Game_board