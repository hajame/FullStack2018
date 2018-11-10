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
            <p>{props.osa1} {props.tehtavia1}</p>
            <p>{props.osa2} {props.tehtavia2}</p>
            <p>{props.osa3} {props.tehtavia3}</p>
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