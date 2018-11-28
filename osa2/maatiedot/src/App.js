import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: 'Djibouti',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled', response)
        this.setState({ countries: response.data })
      })
  }

  handleFilterChange = (event) => this.setState({ filter: event.target.value })
  handleNameClick = (name, event) => {
    event.preventDefault()
    this.setState({ filter: name })
  }

  render() {
    console.log('render')
    const count = this.state.countries.filter(c =>
      c.name.toLowerCase().includes(this.state.filter.toLowerCase())).length
    console.log("count", count)
    if (count < 11 && count > 1) {
      return (
        <div>
          <h1>Countries</h1>
          <div>find countries: <input value={this.state.filter}
            onChange={this.handleFilterChange} />
          </div>
          <h2>Countries</h2>
          <ul>
            {this.state.countries.filter(country => (
              country.name.toLowerCase().includes(this.state.filter.toLowerCase())
            )).map(country =>
              <li onClick={(e) => this.handleNameClick(country.name, e)}
                className='country' key={country.name}>{country.name}</li>
            )}
          </ul>
        </div>
      )
    } else if (count === 1) {
      return (
        <div>
          <h1>Countries</h1>
          <div>find countries: <input value={this.state.filter}
            onChange={this.handleFilterChange} />
          </div>
          {this.state.countries.filter(country => (country.name.toLowerCase()
            .includes(this.state.filter.toLowerCase())))
            .map(country =>
              <div key={country.name}>
                <h2>{country.name}</h2>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <img src={country.flag} alt="flag" height='133px' />
              </div>)
          }
        </div>
      )
    } else {
      return (
        <div>
          <h1>Countries</h1>
          <div>find countries: <input value={this.state.filter}
            onChange={this.handleFilterChange} />
          </div>
          <h2>No results</h2>
          <p>Too many results, please specify</p>
        </div>
      )
    }
  }
}

export default App