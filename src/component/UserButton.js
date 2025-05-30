const UserButton = ({text, disabled, onClick}) => {
    return(
        <button
            className="userButton"
            text={text}
            onClick={onClick}
            disabled={disabled}
        />
    )
}
export default UserButton;