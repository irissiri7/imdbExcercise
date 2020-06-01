import React from 'react';


const btnStyle = {
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'grey'
}

const Button = ({text, handleClick}) =>{
    return <button style={btnStyle} onClick={handleClick}>{text}</button>
}

export default Button;