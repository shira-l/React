import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LetterButton from './components/letter_botton'
import Options from './components/Options'
const E_s_firstRowLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const E_s_secondRowLetters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const E_s_thirdRowLetters = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

const H_firstRowLetters = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ']
const H_secondRowLetters = ['ש','ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף']
const H_thirdRowLetters = ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ','ת','ץ']

const signs_firstRowLetters = ['!', '@', '#', '$', '%', '^', '&','_','?']
const signs_secondRowLetters = ['(', ')', '{', '}', '[', ']', ',', '.', ':',';']
const signs_thirdRowLetters = ['*', '-', '/', '+','|','=','"']

const numbers=['1','2','3','4','5','6','7','8','9','0']

const english_small = [numbers,E_s_firstRowLetters, E_s_secondRowLetters, E_s_thirdRowLetters];
const hebrew = [numbers,H_firstRowLetters, H_secondRowLetters, H_thirdRowLetters];
const signs = [numbers,signs_firstRowLetters, signs_secondRowLetters, signs_thirdRowLetters];
const english_caps_lock=english_small.map(array=>caps_lock(array))
    function caps_lock(array)
    {array=array.map(letter=>letter.toUpperCase())
        return array;
        };
function App() {
  const [sentence, setSentence] = useState("");
  const [keyboard,setKeyboard]= useState(english_small);
  return(
  <>
  <LetterButton keyboard={keyboard} setKeyboard={setKeyboard} sentence={sentence} setSentence={setSentence}/>
  <Options setKeyboard={setKeyboard} english_small={english_small} hebrew={hebrew} signs={signs} english_caps_lock={english_caps_lock} />
  </>);
  
}
export default App
