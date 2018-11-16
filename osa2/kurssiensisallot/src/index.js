import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    console.log('Kurssi:', props.kurssi)
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
    console.log('Nimi', props.nimi);
    const kurssinNimi = props.nimi
    return (
        <h2>{kurssinNimi}</h2>
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
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
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
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]
    return (
        <div>
            <h1>Opetusohjelma</h1>
            {kurssit.map(kurssi => (
                <div key={kurssi.id}><Kurssi kurssi={kurssi} /></div>
            ))}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)