
function Buttons(props) {
    let Arithmetic_buttons = ['+1', '-1', '*2', '/2']
    let win_buttons = ['New Game', 'Quit']
    let buttons = props.win ? win_buttons : Arithmetic_buttons;
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
            case '/2':
                number = Math.floor(props.player.number / 2);
                break;
            case 'New Game':
                props.new_Game()
                break;
            case 'Quit':
                props.Quit();
                break;
        }
        if (number!=null) { props.upDatePlayer(number); }
    }
    return (
        <>
            {buttons.map(action => <button onClick={() => { buttons_func(action) }} disabled={props.disabled} key={action}>{action}</button>)}
        </>
    )

}
export default Buttons