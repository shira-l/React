let buttons = ['+1', '-1', '*2', '/2']
function Buttons(props) {
    function buttons_func(action) {
        let number;
        switch (action) {
            case '+1':
                number=props.player.number+1;
                break;
            case '-1':
                number=props.player.number-1;
                break;
            case '*2':
                number=props.player.number*2;
                break;
            default:
                number=props.player.number/2;
                break;
        }
        props.setPlayer(props.player.index,number);
    }
    return(
        <>
         <p>Number: {props.player.number}<br/>Steps: {props.player.steps}</p>
       { buttons.map(action => <button onClick={()=>{buttons_func(action)}}>{action}</button>)}
        </>
    )
    
}
export default Buttons