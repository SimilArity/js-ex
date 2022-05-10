export default function Box (props) {

    const styles = {
        backgroundColor: props.on ? "black" : "none"
    }

    return (
        <>
            <div className="box" style={styles}></div>
        </>
    )
}