function FunctionEvent() {
    function handleClick() {
        console.log('Button is being clicked')
    }
    // const handleClick = () => {
    //     console.log('Button is being clicked')
    // }
    return (
        <div>
            Functional Component
            <button onClick={handleClick}> Click Here</button>
        </div>

    )
    //  handleclick() with () means automatically the function will be called when the APPlication runs
    ///handleclick without () means handle click will only runs every time you click handlecllick
}
export default FunctionEvent;