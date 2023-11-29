
function Button_Options(props) {

    const lettersArray = ['signs', 'hebrew', 'english', 'UPPER CASE']
    const colorsArray = ['black', 'red', 'green', 'blue', 'pink', 'pirple']
    const sizeArray = ['12px', '14px', '16px', '18px', '20px', '24px', '28px']
    const fontArray = ['Georgia', 'Arial', 'monospace', 'fantasy', 'cursive', 'Lucida Console', 'inherit']
    const opations = [colorsArray, sizeArray, fontArray]
    const onOptionChangeHandler = (event,index) => {
        debugger
        switch (index) {
            case 0:
                props.setters[1](event.target.value)
                break;
            case 1:
                props.setters[2](event.target.value)
                break;
            case 2:
                props.setters[3](event.target.value)
            default:
                break;
        }
    }
    return (
        <>
            <div>{lettersArray.map((name) => <button onClick={() => props.setters[0](name)}>{name}</button>)}</div>
            <div> {opations.map((array, index) => 
                <select onChange={(event)=>onOptionChangeHandler(event,index)}>
                    {array.map((Opation) => 

                        <option key={Opation}>
                            {Opation}
                        </option>

                    )}
                </select>
            )}
            </div>
        </>
    )

}
export default Button_Options