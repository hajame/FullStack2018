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
    return (
        <div>
            <p>yhteensä {props.summa} tehtävää</p>
        </div>
    )
}


const App = () => {

    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
    const summa = osa1.tehtavia + osa2.tehtavia + osa2.tehtavia

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osa1.nimi} osa2={osa2.nimi} osa3={osa3.nimi} 
                tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} 
                tehtavia3={osa3.tehtavia}  />
            <Yhteensa summa={summa} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)