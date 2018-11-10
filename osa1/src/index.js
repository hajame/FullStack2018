import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    const kurssi = props.kurssi
    return (
        <h1>{kurssi}</h1>
    )
}

const Sisalto = (props) => {

    return (
        <div>
            <Osa osa={props.osa1} tehtavia={props.tehtavia1} />
            <Osa osa={props.osa2} tehtavia={props.tehtavia2} />
            <Osa osa={props.osa3} tehtavia={props.tehtavia3} />
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
            <Sisalto osa1={osat[0].nimi} osa2={osat[1].nimi} osa3={osat[2].nimi} 
                tehtavia1={osat[0].tehtavia} tehtavia2={osat[1].tehtavia} 
                tehtavia3={osat[2].tehtavia}  />
            <Yhteensa osat={osat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)