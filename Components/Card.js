import React from 'react';

const Card = ({picture, name, popularity, action}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
    )
}

export default Card;