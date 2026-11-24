import React from 'react'
import PetCard from '../components/PetCard'

function Adopted({pets, adopt, cancel}) {
    let adoptedPets = pets.filter(
        (p)=>p.isAdopted
    );
    let totalFee = 0;
    adoptedPets.map((p) => {
        totalFee=totalFee + p.adoptionFee;
    });

    return (
        <div className="container">
            <h1>Adopted Pets</h1>
            {
            adoptedPets.length===0 ?
                <h2>No pets adopted yet</h2>
                :
                <div>
                    <h2>Total Fee: ₹{totalFee}</h2>
                  <div className="pet-list">

       {
       adoptedPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} adopt={adopt} cancel={cancel}/>

         ))}

     </div>

     </div>
         }

        </div>
    )
}

export default Adopted