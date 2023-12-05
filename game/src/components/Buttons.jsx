let buttons = ['+1', '-1', '*2', '/2']
function Buttons(props) {
    function buttons_func(action) {
        let number;
        switch (action) {
            case '+1':
                number = props.player.number + 1;
                break;
            case '-1':
                number = props.player.number - 1;
                break;
            case '*2':
                number = props.player.number * 2;
                break;
            default:
                number = Math.floor(props.player.number / 2);
                break;
        }
        props.upDatePlayer(number);
    }
    return (
        <>
            <p>Number: {props.player.number}<br />Steps: {props.player.steps}</p>
            {buttons.map(action => <button onClick={() => { buttons_func(action) }} disabled={props.disabled}>{action}</button>)}
        </>
    )

}
export default Buttons