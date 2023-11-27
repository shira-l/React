
function Options(props) {
    return (
        <>
            <button onClick={() => props.setKeyboard(props.signs)}>signs</button>
            <button onClick={() => props.setKeyboard(props.hebrew)}>hebrew</button>
            <button onClick={() => props.setKeyboard(props.english_small)}>english</button>
            <button onClick={() => props.setKeyboard(props.english_caps_lock)}>caps lock</button>
        </>
    )
}
export default Options