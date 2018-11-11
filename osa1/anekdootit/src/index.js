import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            pisteet: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
        }
    }

    klik = () => {
        this.setState({
            selected: Math.floor(Math.random() * 6)
        })
    }
    vote = (number) => {
        return () => {
            const kopio = { ...this.state.pisteet }
            kopio[number] += 1   // kasvatetaan olion kentän 2 arvoa yhdellä
            this.setState({
                pisteet:  kopio
            })
            console.log("voted for "+number)
        }
    }

    render() {
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                {console.log("current " + this.state.selected)}
                <p>
                    has {this.state.pisteet[this.state.selected]} votes
                </p>
                <br />
                <br />
                <button onClick={this.klik}>get inspired</button>
                <button onClick={this.vote(this.state.selected)}>vote</button>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)