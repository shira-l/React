let buttons = ['+1', '-1', '*2', '/2']
function Buttons(props) {
    function buttons_func(action) {
        props.player.steps=props.player.steps+1;
        switch (action) {
            case '+1':
                props.player.number=props.player.number+1;
                break;
            case '-1':
                props.player.number=props.player.number-1;
                break;
            case '*2':
                props.player.number=props.player.number*2;
                break;
            default:
                props.player.number=props.player.number/2;
                break;
        }
    }
    return(
        <>
         <p>Number: {props.player.number}<br/>Steps: {props.player.steps}</p>
       { buttons.map(action => <button onClick={buttons_func(action)}>{action}</button>)}
        </>
    )
    
}
export default Buttons