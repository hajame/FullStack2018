const olio1 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori'
  }
  
  const olio2 = {
    nimi: 'Full Stack -websovelluskehitys',
    taso: 'aineopinto',
    laajuus: 5
  }
  
  const olio3 = {
    nimi: {
      etunimi: 'Jami',
      sukunimi: 'Kousa'
    },
    arvosanat: [2, 3, 5, 3],
    laitos: 'TKTL'
  }

  console.log(olio3.nimi, olio3.arvosanat)
  console.log(olio3.nimi, olio3['laitos'])