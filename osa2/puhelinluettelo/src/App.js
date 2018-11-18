import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
      event.preventDefault()
      console.log('nappia painettu')
      console.log(event.target)
      const newPerson = {
          name: this.state.newName
      }
      const persons = this.state.persons.concat(newPerson)
      this.setState({
          persons: persons,
          newName: ''
      })
  }

  handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value })
  }

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
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
            {this.state.persons.map((
                person => <p key={person.name}>{person.name}</p>)
            )}
        </div>
      </div>
    )
  }
}

export default App