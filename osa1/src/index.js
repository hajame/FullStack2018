import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    const kurssi = props.kurssi
    return (
        <h1>{kurssi}</h1>
    )
}

const Sisalto = (props) => {
    const osat = props.osat
    return (
        <div>
            <Osa osa={osat[0].nimi} tehtavia={osat[0].tehtavia} />
            <Osa osa={osat[1].nimi} tehtavia={osat[1].tehtavia} />
            <Osa osa={osat[2].nimi} tehtavia={osat[2].tehtavia} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    const osat = props.osat
    const summa = osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia
    return (
        <div>
            <p>yhteensä {summa} tehtävää</p>
        </div>
    )
}


const App = () => {

    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10
        },
        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },
        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ]

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osat={osat} />
            <Yhteensa osat={osat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)