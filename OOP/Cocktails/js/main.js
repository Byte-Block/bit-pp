"use strict";
import { getRandomCocktail } from "./getRandomCocktail.js";

export const init = () => {
    const $muttonTheButton = document.querySelector('button');

    $muttonTheButton.addEventListener('click', getRandomCocktail);
}

