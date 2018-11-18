import React from 'react';

const Adder = ( state ) => {
    const similar = state.persons.filter(p =>
        p.name === state.newName)
        if (similar.length > 0) {
            console.log('ei lisätty', state.newName)
            alert('On jo luettelossa')
            return state
        }
        const newPerson = {
            name: state.newName,
            number: state.newNumber
        }
        const persons = state.persons.concat(newPerson)
        const filtered = persons.filter(pers => (
            pers.name.toLowerCase().includes(state.filter.toLowerCase()))
        )
        const newState = {
            persons,
            filtered,
            newName: '',
            newNumber: ''
        }
        console.log('lisättiin', newPerson)
    return newState
}

export default Adder