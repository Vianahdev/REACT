interface ButtonLoginProps{
    type?: "submit" | "reset" | "button"
    onClick: () => void
    children: string
}

export const ButtonLogin: React.FC <ButtonLoginProps> = ({type, onClick, children}) =>{
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}