import Buttons from './Buttons'

function Player_board(props) {
    debugger
    return (
        <>
            {props.players.map(player => <div>
                <p>Get to 100<br />Gamer: {player.name}</p>
                <Buttons player={player} setPlayer={props.setPlayer}/>
                <p>Score: {player.score.length == 0 ? 0 : player.score.map(score => score)}</p>
            </div>)}
        </>
    )
}
export default Player_board