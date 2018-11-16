import React from "react";

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

export default Kurssi