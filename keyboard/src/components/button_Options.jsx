
function Button_Options(props) {

    const namesArray=['signs','hebrew','english','UPPER CASE']
    
    return (
        <>
        {namesArray.map((name)=><button onClick={() => {props.setPerformence((prevPerformence)=>[()=>{props.setlanguage(props.language)},...prevPerformence]);props.setlanguage(name)}}>{name}</button>)}
        </>
    )
    }
export default Button_Options