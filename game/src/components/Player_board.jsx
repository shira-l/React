import Buttons from './Buttons'
import Win_Buttons from './Win_Buttons'
function Player_board(props) {
    return (
        <>
            {props.players.map((player,index) => <div>
                <p>Get to 100<br />Gamer: {player.name} <br/>Number: {player.number}<br />Steps: {player.steps}</p>
                 {player.number!=100?<Buttons player={player} upDatePlayer={props.upDatePlayer} disabled={index!=props.Iplayer}/>:
                 <Win_Buttons/>}
                
                
                <p>Score: {player.score.length == 0 ? 0 : player.score.map(score => score)}</p>
            </div>)}
        </>
    )
}
export default Player_board