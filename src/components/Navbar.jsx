import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({count}) {
    return (
        <div className="navbar">
            <h2>Pet Adoption</h2>
            <Link to="/">Home</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/adopted">Adopted ({count})</Link>

        </div>
    )
}
export default Navbar