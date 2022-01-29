import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

const PetList = (props) => {
    const [pets, setPets] = useState([]);


    // Displays all pets
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/all')
            .then(res => {
                setPets(res.data);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pets, i) => {
                        return (
                            <tr key={i}>
                                <td>{pets.name}</td>
                                <td>{pets.type}</td>
                                <td><Link to={`/pet/` + pets._id} >Details</Link> | <Link to={`/pet/update/` + pets._id} >Edit</Link></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
            <Link className="btn btn-primary" to="/pets/new">Add a pet to the shelter</Link>
        </div>
    )
}

export default PetList;