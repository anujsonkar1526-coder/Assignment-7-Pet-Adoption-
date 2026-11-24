import React from 'react'
import { useState } from 'react'
import PetCard from '../components/PetCard'

function List({pets, adopt, cancel}) {

    const [type,setType]=useState("All");

 let filtered=pets.filter((p) => {
        if(type==="All") {
            return true;
        }
     return p.type===type;

    });
    return (
        <div className="container">
            <h1>All Pets </h1>

            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="All">All</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Bird">Bird</option>
            </select>
            
            <div className="pet-list">
                {
                filtered.map((pet) => (

        <PetCard key={pet.id}  pet={pet} adopt={adopt} cancel={cancel}  />

         ))}

     </div>

        </div>
    )
}

export default List