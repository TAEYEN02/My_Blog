const UserInput = ({type, placeholder, value, name, onChange})=>{
    return(
        <input
            className="userInput"
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
        />
    )
}
export default UserInput;