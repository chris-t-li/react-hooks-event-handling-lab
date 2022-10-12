// Code Keypad Component Here

function Keypad() {
    const enterPwd = () => console.log("Entering password...")

    return (
        <div>
            <input type="password" onChange={enterPwd}></input>
        </div>
    )
}

export default Keypad;