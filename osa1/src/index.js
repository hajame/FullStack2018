import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    return (
        <h1>{kurssi}</h1>
    )
}

const Sisalto = () => {
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
    const summa = tehtavia1 + tehtavia2 + tehtavia3
    return (
        <div>
            <p>{osa1} {tehtavia1}</p>
            <p>{osa2} {tehtavia2}</p>
            <p>{osa3} {tehtavia3}</p>
            <Yhteensa summa={summa} />
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



    return (
        <div>
            <Otsikko />
            <Sisalto />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)