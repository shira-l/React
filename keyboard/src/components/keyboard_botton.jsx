import { useState } from 'react'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\n']

const english = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '\n', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '\n', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', '\n', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', '\n', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'];
const signs = ['!', '@', '#', '$', '%', '^', '&', '_', '?', '\n', '(', ')', '{', '}', '[', ']', ',', '.', ':', '\n', ';', '*', '-', '/', '+', '|', '=', '"'];
const imugim = ['👶', '😀', '😁', '😂', '🤣', '😄', '😅', '😆', '😉', '😊', '😋','\n', '😎', '😍', '😘', '🥰', '😗', '😙', '👍', '👎', '👏', '🤝',
'\n','❤️','🧡','💛','💚','💙','💜','🖤','💔','❣️','💕','\n', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🍰', '🎂','🧁']
const buttons = ['SPACE', 'DELETE', 'ENTER','CLEAR-ALL']

function Keyboard_Button(props) {
    const getKeyboard = () => {
        switch (props.language) {
            case 'english':
                return [...numbers, ...english]
            case 'עברית':
                return [...numbers, ...hebrew]
            case 'signs':
                return [...numbers, ...signs]
            case 'CAPS-LOCK':
                return [...numbers, ...english.map(letter => letter.toLocaleUpperCase())]
            case '😀':
                return imugim
             
        }

    }
    function buttonsFun(name) {
        switch (name) {
            case 'SPACE':
                props.setLetter(" ");
                break
            case 'DELETE':
                props.Delete[0]();
                props.Delete[1]();
                break
            case 'ENTER':
                props.setLetter("\n");
                break
            case 'CLEAR-ALL':
                props.Delete[0]();
                props.Delete[2]();
        }
    }

    return (
        <>
            <div>
                {
                    getKeyboard().map((letterN) => (
                        <>
                            {letterN == '\n' ? <br /> : <button class="kbc-button no-container" 
                                onClick={() => {
                                    props.setLetter(letterN)
                                }}
                                key={letterN} >
                                {letterN}
                            </button>}
                        </>
                    ))}
            </div>
            <div>
                {buttons.map((name) => <button onClick={() => buttonsFun(name)}>{name}</button>)}
            </div>
        </>
    );
}

export default Keyboard_Button