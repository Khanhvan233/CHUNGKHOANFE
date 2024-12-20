import '../Styles/Entity.css'


function ButtonCustom(props){
    const { type, onClick, children , className} = props; 

    return (
        <button
            type={type} 
            onClick={onClick} 
            className={`custom-button ${className}`}  
        >
            {children} 
        </button>
    );

}

export default ButtonCustom;