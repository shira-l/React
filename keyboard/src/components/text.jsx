function Text(props) {
    return (
            <p>{props.sentence.map((Letter, i) =>
                <span style={Letter.style}>{Letter.letter}</span>
            )}</p>
    )
}
export default Text