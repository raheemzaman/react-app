function Button({text,onclick ,btn }){
    return(
    <button onClick={onclick}>
        {text}
        {btn}
    </button>
    )
}
    export default Button