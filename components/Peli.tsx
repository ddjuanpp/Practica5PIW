import { FunctionComponent } from "preact";
import { Peli } from "../types.ts";

export const Pelicula: FunctionComponent<Peli> = (pelis: Peli) => {
    const {brand, name, iso, formatThirtyFive, formatOneTwenty, color, process, staticImageUrl, description, customDescription, keyFeatures, dateAdded, __v} = pelis;
    return (
        <div class="Peli-Card">
            <h1> Name: </h1>
            <p> {name} </p>
            <img className="Peli-image" src={staticImageUrl} alt={name} />
            <h1> Brand: </h1>
            <p> {brand} </p>
            <h1> ISO: </h1>
            <p> {iso} </p>
            <h1> Format: </h1>
            <p> {formatOneTwenty} </p>
            <p> {formatThirtyFive} </p>
            <h1> Color: </h1>
            <p> {color} </p>
            <h1> Process: </h1>
            <p> {process} </p>
            <h1> Date: </h1>
            <p> {dateAdded} </p>
            <h1> V: </h1>
            <p> {__v} </p>
            <h1> Description: </h1>
            <p> {description} </p>
            <h1> CustomDescription: </h1>
            <p> {customDescription} </p>
            <h1> Key Features: </h1>
            {keyFeatures.map((key) => <p>{key.feature}</p>)}
        </div>
    );
};

export default Pelicula;