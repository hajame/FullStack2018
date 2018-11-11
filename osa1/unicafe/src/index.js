import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            aanestetty: false
        }
    }

    asetaArvoon = (palaute, arvo) => {
        return () => {
            if (palaute === 1) this.setState({ hyva: arvo, aanestetty: true })
            else if (palaute === 0) this.setState({ neutraali: arvo, aanestetty: true })
            else this.setState({ huono: arvo, aanestetty: true })
        }
    }

    render() {
        let statistics;
        if (this.state.aanestetty) {
            statistics = <Statistics ka={this.state.hyva - this.state.huono /
                (this.state.hyva + this.state.huono + this.state.neutraali)}
                posProsentti={this.state.hyva /
                    (this.state.hyva + this.state.huono + this.state.neutraali)} />
        } else {
            statistics = <tbody><tr><td>ei yhtään palautetta annettu</td></tr></tbody>
        }
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
                <table>
                    <tbody>
                        <Display label="hyvä" counter={this.state.hyva} />
                        <Display label="neutraali" counter={this.state.neutraali} />
                        <Display label="huono" counter={this.state.huono} />
                    </tbody>
                    {console.log("hyvä " + this.state.hyva)}
                    {console.log("neutr " + this.state.huono)}
                    {console.log("huono " + this.state.neutraali)}
                    {console.log("äänest " + this.state.aanestetty)}
                    {statistics}

                </table>
            </div>
        )
    }
}

const Display = ({ label, counter }) => <tr><td>{label}</td><td>{counter}</td></tr>
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
const Statistics = ({ ka, posProsentti }) => (
    <tbody>
        <Statistic label={<td>keskiarvo</td>} value={<td>{ka.toFixed(1)}</td>} />
<Statistic label={<td>positiivisia</td>} value={<td>{(posProsentti * 100).toFixed(1) + " %"}</td>} />
    </tbody>
)
const Statistic = ({ label, value }) => <tr>{label} {value}</tr>

ReactDOM.render(
    <App />,
    document.getElementById('root')
)