import Keyboard_Button from './keyboard_botton'
import Button_Options from './button_Options'
import Text from './text'
import Style_Select from './Style_Select'
import { useState } from 'react'

class Letter {
    constructor(letter, color, size, font) {
        this.letter = letter;
        this.style = {
            color: color,
            fontSize: size,
            fontFamily: font
        }
    }
}


const TextEditor = () => {

    const [language, setlanguage] = useState('english');
    const [color, setColor] = useState('black');
    const [size, setSize] = useState('16px')
    const [font, setFont] = useState('inherit')
    const [sentence, setSentence] = useState([new Letter('', color, size, font)]);
    const [performence, setPerformence] = useState([]);
    const setters = [setColor, setSize, setFont, setPerformence]

    const setLetter = (letter) => {
        setPerformence(prevPerformence => [...prevPerformence, () => setSentence(sentence)])
        setSentence(prevSentence => [...prevSentence, new Letter(letter, color, size, font)]);
    }
    const Delete = [() => { setPerformence(prevPerformence => [...prevPerformence, () => setSentence(sentence)]) },
    () => { setSentence(sentence.slice(0, -1)) }, () => { setSentence([new Letter('', color, size, font)]) }];

    const change_all = [() => { setPerformence(prevPerformence => [...prevPerformence, () => { setlanguage(language); setSentence(sentence) }]) },
    () => {
        setlanguage('CAPS-LOCK');
        setSentence(sentence.map(m_Letter => new Letter(m_Letter.letter.toLocaleUpperCase(), color, size, font)))
    }
        , () => {
            setlanguage('english');
            setSentence(sentence.map(m_Letter => new Letter(m_Letter.letter.toLocaleLowerCase(), color, size, font)))
        }]

    return (
        <>
            <Text sentence={sentence} setPerformence={setPerformence} />
            <Keyboard_Button language={language} setLetter={setLetter} Delete={Delete} />
            <Button_Options setlanguage={setlanguage} language={language} setPerformence={setPerformence} change_all={change_all} performence={performence} />
            <Style_Select setters={setters} style={[color, size, font]} />
        </>
    )



}

export default TextEditor