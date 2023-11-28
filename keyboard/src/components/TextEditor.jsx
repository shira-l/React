import Keyboard_Button from './keyboard_botton'
import Button_Options from './button_Options'
import Text from './text'
import {useState} from 'react'

class Letter{ 
    constructor(letter, color,fontSize){
    this.letter = letter;
    this.style = {
        color : color,
        fontSize :fontSize
    }}
}


const TextEditor = (props) => {

    const [language, setlanguage] = useState('english');
    const [color, setColor] = useState('black');
    const [fontSize, setFontSize] = useState('16px')
    const [sentence, setSentence] = useState([new Letter('',color,fontSize)]);
   const [performence,setPerformence]=useState([]);
   console.log(performence);

    const setLetter = (letter) => {
        setSentence(prevSentence=> [...prevSentence,new Letter(letter,color,fontSize) ]);
    }
     setlanguage = (language) => {
        setPerformence(prevPerformence=>[,...prevPerformence])
        setSentence(prevSentence=> [...prevSentence,new Letter(letter,color,fontSize) ]);
    }
    const Delete=()=>setSentence(sentence.pop());
    // const setLetter = (letter) => {
    //     setSentence(prevSentence=> [...prevSentence,new Letter(letter,color,fontSize) ]);
    // }
    // const setLetter = (letter) => {
    //     setSentence(prevSentence=> [...prevSentence,new Letter(letter,color,fontSize) ]);
    // }
   
    return (
        <>
            <Text sentence={sentence} setPerformence={setPerformence}/>
            <Keyboard_Button language={language} setLetter={setLetter} Delete={Delete} />
            <Button_Options setlanguage={setlanguage} language={language}setPerformence={setPerformence} />
        </>
    )



}

export default TextEditor