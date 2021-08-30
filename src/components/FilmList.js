import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {
    
    const filmNodes = films.map(film => {
        return (
            <Film name={film.name} key={film.id} url={film.url}></Film>
        )
    })

    return (
        <>
            <h2>Film List</h2>
            <ul>{filmNodes}</ul>
        </>
    )
}

export default FilmList