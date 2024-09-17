import { useState } from "react"
import axios from "axios";

export default function NewAnimeForm({newAnime, setNewAnime}){

   

    function handleTextChange(event){
        setNewAnime({...newAnime, [event.target.id]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(newAnime)

        axios.post("http://localhost:3333/animes", newAnime).then(response => {
            console.log(response)
            setNewAnime(response.data)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={newAnime.name} onChange={handleTextChange} />
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" value={newAnime.description} onChange={handleTextChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}