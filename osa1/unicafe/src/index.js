import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }



    asetaArvoon = (palaute, arvo) => {
        return () => {
            if (palaute === 1) this.setState({ hyva: arvo })
            else if (palaute === 0) this.setState({ neutraali: arvo })
            else this.setState({ huono: arvo })
        }
    }
    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <div>
                    <Button
                        handleClick={this.asetaArvoon(1, this.state.hyva + 1)}
                        text="hyvä"
                    />
                    <Button
                        handleClick={this.asetaArvoon(0, this.state.neutraali + 1)}
                        text="neutraali"
                    />
                    <Button
                        handleClick={this.asetaArvoon(-1, this.state.huono + 1)}
                        text="huono"
                    />
                </div>
                <h1>statistiikka</h1>
                <div>
                <Display label="hyvä" counter={this.state.hyva} />
                <Display label="neutraali" counter={this.state.neutraali} /> 
                <Display label="huono" counter={this.state.huono} />
                </div>
            </div>
        )
    }
}

const Display = ({ label, counter }) => <div>{label} {counter}</div>
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)