import React from 'react'

function Home({pets}) {
    let total=pets.length;

    let ready=pets.filter(
        (p) => p.vaccinated && !p.isAdopted
    ).length;
    let adopted=pets.filter((p) => p.isAdopted
    ).length;

    return (
        <div className="container">
            <h1>Welcome to Pet Adoption </h1>
         <h2>Total Pets: {total}</h2>
        <h2>Ready for Adoption: {ready}</h2>

            <h2>Adopted Pets: {adopted}</h2>

        </div>
    )
}

export default Home