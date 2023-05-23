function Child( props ) {

    props.ToParent('Hi Parent')

    return (
        <div className="Child">
            <h2>I am the child</h2>

            <p>Message from parent : {props.FromParent}</p>
        </div>
    )
}

export default Child