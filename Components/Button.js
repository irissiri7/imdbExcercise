import React from 'react';


const btnStyle = {
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'grey'
}

const Button = ({text}) =>{
    return <button style={btnStyle}>{text}</button>
}

export default Button;