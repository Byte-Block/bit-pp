"use strict";
console.log("This is ES6 on branch es6");
console.log("Edited through VIM!");
const { Country } = require('./Country');
const { Person } = require('./Person');
const { Player } = require('./Player');
const { Address } = require('./Address');
const { BettingPlace } = require('./BettingPlace');
const { BettingHouse } = require('./BettingHouse');
(function () {

    const europe = "EU";
    const asia = "AS";
    const africa = "AF";
    const southAmerica = "SA";
    const northAmerica = "NA";
    const australia = "AU";

    let country1 = new Country("SR", "many", europe);
    let country2 = new Country("GR", "none", europe);

    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    var bettingHouse = new BettingHouse("WORLD SERIES BETTING");

    var player1 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, country1);
    var player2 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, country1);
    var player3 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, country2);
    var player4 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, country1);

    var address1 = new Address(country1, "Belgrade", 11000, "Nemanjina", 4);

    var bettingPlace1 = createBettingPlace(address1);
    var bettingPlace2 = createBettingPlace(address1);

    bettingPlace1.addPlayer(player1);
    bettingPlace1.addPlayer(player2);
    bettingPlace2.addPlayer(player3);
    bettingPlace2.addPlayer(player4);

    bettingHouse.listOfBettingPlaces.push(bettingPlace1);
    bettingHouse.listOfBettingPlaces.push(bettingPlace2);

    console.log(bettingHouse.getData());

})()
