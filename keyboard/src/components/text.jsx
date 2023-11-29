function Text(props) {
    return (
        <p>{props.sentence.map((Letter) =>
            <span style={Letter.style}>{Letter.letter == '\n' ? <br /> : Letter.letter}</span>
        )}</p>
    )
}
export default Text