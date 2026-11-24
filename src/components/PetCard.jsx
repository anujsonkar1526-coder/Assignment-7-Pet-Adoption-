import React from 'react'
import { Link } from 'react-router-dom'

function PetCard({pet, adopt, cancel}) {
    let age;
    if(pet.ageMonths < 12) {
        age=pet.ageMonths+" months";
    }
    else {
        age=Math.floor(pet.ageMonths/12)+" years";
    }
    return (
        <div className="pet-card">
        <h1>{pet.emoji}</h1>
 <h2>{pet.name}</h2>
        <p>Type: {pet.type}</p>
         <p>Breed: {pet.breed}</p>
            <p>Age: {age}</p>
            <p> {pet.vaccinated ? "Vaccinated" : "Vaccination Pending"} </p>
            <h3> {pet.adoptionFee === 0 ? "Free" : "₹" + pet.adoptionFee}</h3>

            <Link to={`/pets/${pet.id}`}>View Details</Link>

            <br/><br/>

            {
            !pet.vaccinated ?
                <button disabled>Vaccination Pending</button>
                :
                pet.isAdopted ?
                <button onClick={() => cancel(pet.id)}>Cancel Adoption</button>
                :
                <button onClick={() => adopt(pet.id)}>Adopt</button>
            }

        </div>
    )
}

export default PetCard