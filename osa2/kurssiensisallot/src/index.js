import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    const kurssi = props.kurssi
    return (
        <div>
            <Otsikko nimi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

const Otsikko = (props) => {
    const kurssinNimi = props.nimi
    return (
        <h1>{kurssinNimi}</h1>
    )
}

const Sisalto = (props) => {
    const osat = props.osat
    console.log('Sisältö:', osat)
    return (
        <div>
            {osat.map(osa => (<p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>))}
        </div>
    )
}

const Yhteensa = (props) => {
    const osat = props.osat
    const summa = osat.reduce((sum, osa) => sum + osa.tehtavia, 0)
    console.log('summa', summa);

    return (
        <div>
            <p>yhteensä {summa} tehtävää</p>
        </div>
    )
}


const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            {console.log('Kurssi:', kurssi)}
            <Kurssi kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)