
const lettersArray = ['signs', 'עברית', 'english', 'CAPS-LOCK', '😀']
const changeAll = ['UPPER-ALL', 'LOWER-ALL']

function Button_Options(props) {
    const undo = () => {
        if (props.performence.length === 0)
            return
        const func = props.performence[props.performence.length - 1];
        func();
        props.setPerformence(props.performence.slice(0, -1));
    }

    return (
        <>
            <div>{lettersArray.map((name) => <button onClick={() => { props.setPerformence(prevPerformence => [...prevPerformence, () => { props.setlanguage(props.language) }]);
            props.language==='CAPS-LOCK'&&name==='CAPS-LOCK'?props.setlanguage( 'english') :props.setlanguage(name) }}>{name}</button>)}</div>
            <div>{changeAll.map((name, index) => <button onClick={() => { props.change_all[0](); props.change_all[index+1]() }}>{name}</button>)}
                <button onClick={() => undo()}>UNDO</button>
            </div>
        </>
    )

}
export default Button_Options