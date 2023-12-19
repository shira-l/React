import { useState } from 'react';
import '../Log_In/Log_In.css'
import React from 'react';
class Player {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.steps = 0;
        this.number = Math.floor(Math.random() * 99);
        this.score = [];
        this.average = 1000;
    }

}

function Log_In(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
   

    const handleChange = (event) => {
        const { name, value } = event.target;
        name == 'name' ? setName(value) : setEmail(value)
    }


    const handleSubmit = (event) => {
        debugger
        event.preventDefault();
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify([]));
        }
        let users = JSON.parse(localStorage.getItem("users"));
        let current_player = create_player(users)
        if (current_player != null) {
            props.setPlayers(prevPlayers => [...prevPlayers, current_player])
        }
        setName('')
        setEmail('')
    }



    const create_player = (users) => {
        let user = users.filter(player => player.email == email);
        let current_player = new Player(name, email)
        if (user.length == 0) {
            let update_users=[...users, { 'name': name, 'email': email, 'score': [], 'average':1000 }]
            localStorage.setItem("users", JSON.stringify(update_users));
        }
        else {
            let player = props.players.filter(player => player.email == email);
            if (player.length !== 0) {
                alert("this gamer already exist")
                return null
            }
            current_player.average = user[0].average
            current_player.score = user[0].score
        }
        return current_player
    }


    return (<>
        <h1>GET TO 💯</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} placeholder="name" value={name} required />
            <br />
            <input type="email" name="email" onChange={handleChange} placeholder="email" value={email} required />
            <br />
            <button type="submit">Add Gamer</button>
        </form>
        {props.players.length ? <div>
            <p>the gamers are:</p>
            {props.players.map((player, index) => <p key={index}>{player.name}</p>)}
            <button onClick={() => props.start_game()}>Start Game</button>
        </div> : null}
    </>)
}
export default Log_In