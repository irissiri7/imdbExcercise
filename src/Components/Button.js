import React from 'react';


const btnStyle = {
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'grey'
}

const Button = ({text, action}) =>{
    return <button style={btnStyle} onClick={action}>{text}</button>
}

export default Button;