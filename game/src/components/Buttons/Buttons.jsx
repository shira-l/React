
function Buttons(props) {
    const{player,disabled,win,new_Game,Quit}=props
    let Arithmetic_buttons = ['+1', '-1', '*2', '/2']
    let win_buttons = ['New Game', 'Quit']
    let buttons = win ? win_buttons : Arithmetic_buttons;
    function buttons_func(action) {
        let number;
        switch (action) {
            case '+1':
                number = player.number + 1;
                break;
            case '-1':
                number = player.number - 1;
                break;
            case '*2':
                number = player.number * 2;
                break;
            case '/2':
                number = Math.floor(player.number / 2);
                break;
            case 'New Game':
                new_Game();
                break;
            case 'Quit':
                Quit(player);
                break;
        }
        if (number!=null) { updatePlayer(number); }
    }
    return (
        <>
            {buttons.map(action => <button onClick={() => { buttons_func(action) }} disabled={disabled} key={action}>{action}</button>)}
        </>
    )

}
export default Buttons