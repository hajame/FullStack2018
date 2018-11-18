import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas',
                    number: '000 123 123'
                },
            ],
            newName: '',
            newNumber: ''
        }
    }

    addPerson = (event) => {
        event.preventDefault()
        console.log('nappia painettu')
        console.log(event.target)
        const similar = this.state.persons.filter(p =>
            p.name === this.state.newName)
        if (similar.length > 0) {
            console.log('ei lisätty', this.state.newName)
            alert('On jo luettelossa')
            return
        }
        const newPerson = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        const persons = this.state.persons.concat(newPerson)
        this.setState({
            persons,
            newName: '',
            newNumber: ''
        })
        console.log('lisättiin', newPerson)
    }

    handleNameChange = (event) => this.setState({ newName: event.target.value })
    handleNumberChange = (event) => this.setState({ newNumber: event.target.value })

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <div>
                        nimi: <input
                            value={this.state.newName}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        numero: <input
                            value={this.state.newNumber}
                            onChange={this.handleNumberChange}
                        />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <table>
                    <tbody>
                        {this.state.persons.map((
                            person => <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.number}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App