import React from 'react';

const Card = ({picture, name, popularity, action}) => {
    
    return (
        <tr>
            <td><img  width={50} src={picture} alt={name}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td>{action}</td>
        </tr>  
    )
}

export default Card;