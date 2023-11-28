import { useState } from 'react'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\n']

const english = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '\n', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '\n', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', '\n', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', '\n', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'];
const signs = ['!', '@', '#', '$', '%', '^', '&', '_', '?', '\n', '(', ')', '{', '}', '[', ']', ',', '.', ':', '\n', ';', '*', '-', '/', '+', '|', '=', '"'];

const buttons = ['SPACE', 'DELETE', 'ENTER']

function Keyboard_Button(props) {
    const getKeyboard = () => {
        switch (props.language) {
            case 'english':
                return [...numbers, ...english]
            case 'hebrew':
                return [...numbers, ...hebrew]
            case 'signs':
                return [...numbers, ...signs]
        }

    }
    function buttonsFun(name) {
        switch (name) {
            case 'SPACE':
                props.setLetter(" ");
            case 'DELETE':
                props.Delete();
case 'ENTER':

        }
    }

    return (
        <>
            <div key={Keyboard}>
                {
                    getKeyboard().map((letterN) => (
                        <>
                            {letterN == '\n' ? <br /> : <button
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