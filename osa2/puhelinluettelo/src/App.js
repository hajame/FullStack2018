import React from 'react';
import axios from 'axios';
import Person from './components/Person';
import Adder from './components/Adder';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            filtered: [],
            newName: '',
            newNumber: '',
            filter: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('did mount')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                this.setState({ persons: response.data, 
                    filtered: response.data })
            })
        
    }

    addPerson = (event) => {
        event.preventDefault()
        console.log('nappia painettu', event.target)
        this.setState(Adder(this.state))
    }

    handleNameChange = (event) => this.setState({ newName: event.target.value })
    handleNumberChange = (event) => this.setState({ newNumber: event.target.value })
    handleFilterChange = (event) => {
        const filter = event.target.value
        this.setState({ filter })
        const filtered = this.state.persons.filter(pers => (
            pers.name.toLowerCase().includes(filter.toLowerCase()))
        )
        this.setState({ filtered })
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Puhelinluettelo</h1>
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
                        {this.state.filtered.map((
                            person => <Person key={person.id} person={person} />)
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App