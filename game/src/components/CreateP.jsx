class Player {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.steps=0;
        this.number=Math.floor(Math.random() * 99);
        this.score=[];
        this.average=0;
    }
}
function CreateP(props)
{
    let players=[]
    return(
        <>
        <Player_board players={players}/>
        </>
    )
}
export default CreateP