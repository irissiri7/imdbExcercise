import React from 'react';
import {btnStyle} from '../Styling/ButtonStyles';



const Button = ({text, handleClick}) =>{
    return <button style={btnStyle} onClick={handleClick}>{text}</button>
}

export default Button;