export default function Box (props) {

    //const [on, setOn] = useState(props.on)

    const styles = {
        backgroundColor: props.on ? "black" : "transparent"
    }

    /*function toggle () {
        setOn (prevOn => !prevOn)
    }*/

    return (
        <>
            <div className="box" style={styles} onClick={()=>props.handleClick(props.id)}></div>
        </>
    )
}