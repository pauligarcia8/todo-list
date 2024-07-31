const Button = ({children, ...props}) => {
    return (
        <div className='list-toggle-container'>
            <button className="toggle-list" {...props}>{children}</button>
        </div>
    )
}

export default Button;