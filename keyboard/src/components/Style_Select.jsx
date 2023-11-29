const colorsArray = ['black', 'red', 'green', 'blue', 'pink', 'purple']
const sizeArray = ['12px', '14px', '16px', '18px', '20px', '24px', '28px']
const fontArray = ['Georgia', 'Arial', 'monospace', 'fantasy', 'cursive', 'Lucida Console', 'inherit']
const opations = [colorsArray, sizeArray, fontArray]
function Style_Select(props) {

    const onOptionChangeHandler = (event, index) => {
        props.setters[3](prevPerformence=>[...prevPerformence,()=>{event.target.defaultValue=props.style[index];
            props.setters[index](props.style[index])}])
            console.log(event.target)
        switch (index) {
            case 0:

                props.setters[0](event.target.value)
                break;
            case 1:
                props.setters[1](event.target.value)
                break;
            case 2:
                props.setters[2](event.target.value)
            default:
                break;
        }
    }
    return (
        <>
            {opations.map((array, index) =>
                <select onChange={(event) => onOptionChangeHandler(event, index)} defaultValue={props.style[index]}>
                    {array.map((Opation) =>

                        <option key={Opation}>
                            {Opation}
                        </option>
                    )}
                </ select>

            )}
        </>
    )
}
export default Style_Select