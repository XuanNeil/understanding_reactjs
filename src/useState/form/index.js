import React, { useState } from "react";

const FormDemo = () => {
    const [person, setPerson] = useState({
        name: 'No Name',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })
    const handleNameChange = (e) => {
        setPerson({
            ...person,
            name: e.target.value
        })
    }
    const handleTitleChange = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
    }
    const handleCityChange = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        })
    }
    const handleImageChange = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        })
    }
    return (
        <>
            <div>
                <label>Name:</label>
                <input
                    type={'text'}
                    value={person.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label>Title:</label>
                <input
                    type={'text'}
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </div>

            <div>
                <label>City:</label>
                <input
                    type={'text'}
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </div>

            <div>
                <label>Image:</label>
                <input
                    type={'text'}
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </div>

            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    )
}
export default FormDemo;