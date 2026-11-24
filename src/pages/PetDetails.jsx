import React from 'react'
import { useParams, Link } from 'react-router-dom'

function PetDetails({pets}) {
    const {id}=useParams();

    let pet=pets.find((p) => p.id===Number(id));

    if(!pet) {
     return <h1>Pet Not Found</h1>;
    }

    let age;

    if(pet.ageMonths < 12) {
     age=pet.ageMonths+" months";
    }
    else {
        age=Math.floor(pet.ageMonths/12)+" years";
    }

    return (
        <div className="container">
            <h1>{pet.emoji} {pet.name}</h1>
         <h3>Type: {pet.type}</h3>
             <h3>Breed: {pet.breed}</h3>
            <h3>Age: {age}</h3>
        <h3>Gender: {pet.gender}</h3>
            <h3>Vaccination: {pet.vaccinated ? "Vaccinated" : "Vaccination Pending"}</h3>
                <h3> Adoption Fee: {pet.adoptionFee === 0 ? "Free" : "₹" + pet.adoptionFee}</h3>
            <h3>Status: {pet.isAdopted ? "Adopted" : "Available"}</h3>

            <Link to="/pets">Back to Pets</Link>

        </div>
    )
}

export default PetDetails