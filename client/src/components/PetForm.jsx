import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";


const PetForm = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();


    //handler when the form is submitted
    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/pets/new', {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            // Displays validiations
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    setErrors(res.data.errors)
                }
                // Clears input fields
                else {
                    setName("")
                    setType("")
                    setDescription("")
                    setSkillOne("")
                    setSkillTwo("")
                    setSkillThree("")
                    setErrors("")
                    history.push("/pets/all")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={onSubmitHandler} className='mx-auto'>
                <p>
                    <label>Pet Name: </label><br />
                    <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
                    <p className='danger'>{errors.name ? errors.name.message : ""}</p>
                </p>
                <p>
                    <label>Pet Type: </label><br />
                    <input type="text" onChange={(event) => setType(event.target.value)} value={type} />
                    <p className='danger'>{errors.type ? errors.type.message : ""}</p>
                </p>
                <p>
                    <label>Pet Description: </label><br />
                    <input type="text" onChange={(event) => setDescription(event.target.value)} value={description} />
                    <p className='danger'>{errors.description ? errors.description.message : ""}</p>
                </p>
                <hr/>
                <h6>Skills (Optional)</h6>
                <p>
                    <label>Skill One: </label><br />
                    <input type="text" onChange={(event) => setSkillOne(event.target.value)} value={skillOne} />
                </p>
                <p>
                    <label>Skill Two: </label><br />
                    <input type="text" onChange={(event) => setSkillTwo(event.target.value)} value={skillTwo} />
                </p>
                <p>
                    <label>Skill Three: </label><br />
                    <input type="text" onChange={(event) => setSkillThree(event.target.value)} value={skillThree} />
                </p>
                <input type="submit" className="btn btn-success"/>
            </form><br></br>
            <Link className="btn btn-primary" to="/pets/all">Home Page</Link>
        </div>
    )
}

export default PetForm;