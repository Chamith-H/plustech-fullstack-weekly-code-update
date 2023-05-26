function Exception() {

    const number = 5;

    function our_Work() {
        try {
            number = 8 
        }

        catch (error) {
            our_Work()
        }
    }

    return (
        <div className="Exception">
            <button onClick={our_Work}>Try me</button>
        </div>
    )
}

export default Exception