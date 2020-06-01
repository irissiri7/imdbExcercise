import React from 'react';

const tableStyle = {
    width: 'fit-content',
    margin: '0 auto'
}

const Card = ({picture, name, popularity, action}) => {
    return (
        <table style={tableStyle}>
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