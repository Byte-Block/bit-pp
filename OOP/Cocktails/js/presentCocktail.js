"use strict";

const $content = document.querySelector('div.content');

export const presentCocktail = (data) => {
    const jsonObject = JSON.parse(data.target.responseText);
    console.log(jsonObject);

    const drinkName = jsonObject.drinks[0].strDrink;

    const $h1 = document.createElement('h1');
    const $img = document.createElement('img');

    $h1.textContent = drinkName;
    $img.setAttribute('src', jsonObject.drinks[0].strDrinkThumb);

    $content.innerHTML = '';
    $content.appendChild($h1);
    $content.appendChild($img);
}