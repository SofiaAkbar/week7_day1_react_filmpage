import React from "react";
import FilmPage from "../containers/FilmPage";

const Film = ({name, url}) => {
    return (
        <>
            <li>
                <a href={url}>{name}</a>
            </li>
        </>
    )
}

export default Film;