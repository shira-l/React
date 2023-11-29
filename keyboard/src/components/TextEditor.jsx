import Keyboard_Button from './keyboard_botton'
import Button_Options from './button_Options'
import Text from './text'
import { useState } from 'react'

class Letter {
    constructor(letter, color, size,font) {
        this.letter = letter;
        this.style = {
            color: color,
            fontSize: size,
            fontFamily:font
        }
    }
}


const TextEditor = (props) => {

    const [language, setlanguage] = useState('english');
    const [color, setColor] = useState('black');
    const [size, setSize] = useState('16px')
    const [font, setFont] = useState('inherit')
    const [sentence, setSentence] = useState([new Letter('', color, size,font)]);
    const [performence, setPerformence] = useState([]);
    const setters = [setlanguage, setColor, setSize, setFont]

    const setLetter = (letter) => {
        setSentence(prevSentence => [...prevSentence, new Letter(letter, color, size,font)]);
    }
    const Delete = () => setSentence(sentence.slice(0, -1));
    return (
        <>
            <Text sentence={sentence} setPerformence={setPerformence} />
            <Keyboard_Button language={language} setLetter={setLetter} Delete={Delete} />
            <Button_Options setters={setters} language={language} setPerformence={setPerformence} />
        </>
    )



}

export default TextEditor