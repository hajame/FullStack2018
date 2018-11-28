import React from 'react';
import axios from 'axios';
import Person from './components/Person';
import Adder from './components/Adder';
import personService from "./services/persons";
import Notification from "./components/Notification";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: '',
            notification: null
        }
        console.log('constructor')
    }

    componentDidMount() {
        personService
            .getAll()
            .then(persons => {
                console.log('promise fulfilled')
                this.setState({ persons })
            })
    }

    setNotificationTimeout() {
        setTimeout(() => {
                    this.setState({notification: null})
                }, 5000)
    }

    removePerson = (id, e) => {
        e.preventDefault()
        const person = this.state.persons.find(p => p.id === id)
        if (window.confirm(`poistetaanko ${person.name} ?`)) {
            personService
                .remove(id)
                .then(this.setState({
                    notification: `poistettiin henkilö ${person.name}`,
                    persons: this.state.persons.filter(p => p.id !== id)
                }))
                .catch(error => {
                    alert(`henkilö '${person.name}' on jo valitettavasti poistettu palvelimelta`)
                    this.setState({ persons: this.state.persons.filter(p => p.id !== id) })
                })
            this.setNotificationTimeout()
        }
    }

    addPerson = (event) => {
        event.preventDefault()
        console.log('nappia painettu', event.target)
        let similar = this.state.persons.find(p =>
            p.name === this.state.newName)
        if (similar !== undefined) {
            console.log('on jo', similar)
            if (window.confirm(
                `${similar.name} on jo luettelossa, korvataanko vanha numero uudella?`)) {
                similar.number = this.state.newNumber
                let newPersons = this.state.persons.filter(p => p.id !== similar.id)
                newPersons = newPersons.concat(similar)
                personService
                    .update(similar.id, similar)
                    .then(response => {
                        this.setState({
                            ...this.state,
                            notification: `korvattiin henkilön ${similar.name} numero`,
                            persons: newPersons,
                            newName: '', newNumber: ''
                        })
                        this.setNotificationTimeout()  
                    })
            }
            return
        }
        const newPerson = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        personService
            .create(newPerson)
            .then(response => {
                this.setState({
                    ...this.state,
                    notification: `lisättiin ${newPerson.name}`,
                    persons: this.state.persons.concat(response.data),
                    newName: '', newNumber: ''
                })
                this.setNotificationTimeout()
            })
        console.log('lisättiin', newPerson)
        console.log('uusi state', this.state)
    }

    handleNameChange = (event) => this.setState({ newName: event.target.value })
    handleNumberChange = (event) => this.setState({ newNumber: event.target.value })
    handleFilterChange = (event) => this.setState({ filter: event.target.value })

    render() {
        console.log('render')
        return (
            <div>
                <h1>Puhelinluettelo</h1>
                <Notification message={this.state.notification} />
                <div>rajaa näytettäviä <input value={this.state.filter}
                    onChange={this.handleFilterChange} />
                </div>
                <h3>Lisää uusi</h3>
                <form onSubmit={this.addPerson}>
                    <div>
                        nimi: <input value={this.state.newName}
                            onChange={this.handleNameChange} />
                    </div>
                    <div>
                        numero: <input value={this.state.newNumber}
                            onChange={this.handleNumberChange} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <table>
                    <tbody>
                        {this.state.persons.filter(pers => (
                            pers.name.toLowerCase().includes(this.state.filter.toLowerCase())
                        )).map(person =>
                            <tr className='person' key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.number}</td>
                                <td>
                                    <button onClick={(e) => this.removePerson(person.id, e)}>poista</button>
                                </td>
                            </tr>
                        )}
                        {/* todo eristä filtteröinti */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App