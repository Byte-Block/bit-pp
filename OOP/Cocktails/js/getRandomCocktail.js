"use strict";
import { presentCocktail } from "./presentCocktail.js";

export const getRandomCocktail = () => {
    const XMLR = new XMLHttpRequest();
    XMLR.open("GET", 'https://www.thecocktaildb.com/api/json/v1/1/random.php');
    XMLR.send();
    
    XMLR.addEventListener('load', function (data) {
        presentCocktail(data);
    });

}