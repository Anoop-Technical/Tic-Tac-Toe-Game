const Square = (props) => {
    
    return (
        <div className="square" onClick={props.onClick} style={{ border: "1px solid", height: "100px", width: "100%" }}>
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square