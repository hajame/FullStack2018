import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
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

    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
    const summa = tehtavia1 + tehtavia2 + tehtavia3

    return (
        <div>
            <Otsikko />
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} 
                tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3}  />
            <Yhteensa summa={summa} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)