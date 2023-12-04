import Player_board from './Player_board'
class Player {
    constructor(name) {
        this.name = name;
        this.steps=0;
        this.number=Math.floor(Math.random() * 99);
        this.score=[];
        this.average=0;
    }
}
function Add_Player(players) {
    let name;
    do {
        name=prompt("Please enter your name");
    } while (name=='');
    
    
    players.push(new Player(name))
       
       
 
         
 }
function Game_board(){
    let players=[]
    return(
        <>
        <button onClick={()=>Add_Player(players)}>add gamer</button>
        <Player_board players={players}/>
        </>
    )
}
export default Game_board