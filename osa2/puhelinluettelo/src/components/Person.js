import React from 'react';

const Person = ({ key, person }) => {
    return (
        <tr key={key}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
                <button onClick={this.removePerson(person.id)}>poista</button>
            </td>
        </tr>
    )
}

export default Person