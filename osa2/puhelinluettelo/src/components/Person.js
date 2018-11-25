import React from 'react';

const Person = ({ key, person }) => {
    return (
        <tr key={key}>
            <td>{person.name}</td>
            <td>{person.number}</td>
        </tr>
    )
}

export default Person