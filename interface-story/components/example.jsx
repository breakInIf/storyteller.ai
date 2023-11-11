export function Example({text,setTextValue}){

    const handleClick = () =>{
        setTextValue(text)
    }
    return(
        <button onClick={handleClick}>{text}</button>
    )
}