import React from 'react'
import { useState } from 'react'
import CreateP from './CreateP'

function Log_in() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    function logIn(name, email) {
        players.push(new Player(name, email))

    }
    return (
        <>
            <form id="logInForm" onsubmit={<CreateP name={name} email={email}/>}>
                <input type="text" placeholder="name" id="logInName" onChange={(event) => { setName(event.target.value) }} required />
                <br />
                <input type="email" placeholder="email" id="logInEmail" onChange={(event) => { setEmail(event.target.value) }} required />
                <br />
                <button class="sumbit" id="logInSend" type="submit">Log In</button>
            </form>

        </>
    )
}
export default Log_in