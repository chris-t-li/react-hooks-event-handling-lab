// Code EyesOnMe Component Here
function EyesOnMe() {
    const blur = () => console.log("Hey! Eyes on me!");
    const focus = () => console.log("Good!");
    return (
        <div>
            <button onBlur={blur} onFocus={focus}>Eyes on me</button>
        </div>
    );
}

export default EyesOnMe;