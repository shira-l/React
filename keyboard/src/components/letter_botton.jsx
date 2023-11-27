import { useState } from 'react'
function LetterButton(props) {
    return (
        <>
            <p>{props.sentence}</p>
            {props.keyboard.map((keyboard_l) => (
                <div>
                    {keyboard_l.map((letterN) => (
                        <button
                            onClick={() => props.setSentence(props.sentence + letterN)}
                            key={letterN}>
                            {console.log({ letterN })}
                            {letterN}
                        </button>

                    ))}
                </div>
            ))}
        </>
    );
}

export default LetterButton