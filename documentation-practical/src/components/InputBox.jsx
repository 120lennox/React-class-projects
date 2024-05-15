export default function InputBox(props){
    const type = props.type
    const placeholder = props.placeholder
    const ID = props.ID
    const value = props.value

    return(
        <input type={type} placeholder={placeholder} value={value} id={ID} />
    )
}