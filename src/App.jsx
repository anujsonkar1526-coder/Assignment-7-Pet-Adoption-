import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import petsData from './data/pets'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import List from './pages/List'
import PetDetails from './pages/PetDetails'
import Adopted from './pages/Adopted'

function App() {

    const[pets,setPets]=useState(petsData);

    function adopt(id) {
        let newPets = pets.map((p) => {

     if(p.id===id && p.vaccinated) {
              return {...p, isAdopted: true};
            }
       return p;

        });
        setPets(newPets);
    }
    function cancel(id) {
        let newPets = pets.map((p) => {
            if(p.id === id) {
                return {...p, isAdopted: false};
            }
            return p;

        });
        setPets(newPets);
    }
      let count=pets.filter((p)=>p.isAdopted
    ).length;

    return (
        <div>
            <Navbar count={count}/>
            <Routes>
                <Route path="/" element={<Home pets={pets}/>}/>
                <Route path="/pets" element={ <List pets={pets} adopt={adopt} cancel={cancel}/> }/>
            <Route path="/pets/:id" element={<PetDetails pets={pets}/>}/>
         <Route path="/adopted" element={ <Adopted pets={pets}  adopt={adopt} cancel={cancel} /> }/>

            </Routes>

        </div>
    )
}

export default App