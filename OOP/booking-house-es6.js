"use strict";
console.log("This is ES6 on branch es6");
console.log("Edited through VIM!");
(function () {

    class Country {
        constructor(name, odds, continent) {
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        }
    }

    class Person {
        constructor(name, surName, date) {
            this.name = name;
            this.surName = surName;
            this.dateOfBirth = date;
        }
        getData() {
            return `${this.name} ${this.surname} ${this.dateOfBirth.getDay()}.${this.dateOfBirth.getMonth()}.${this.dateOfBirth.getYear()}`;
        }
    }

    class Player {
        constructor(person, betAmount, country) {
            this.person = person;
            this.betAmount = betAmount;
            this.country = country;
        }

        getData() {
            return `${this.country}, ${this.betAmount}eur, ${this.person.name} ${this.person.surName}, ${(2020 - this.person.dateOfBirth.getFullYear())} years`;
        }
    }

    class Address {
        constructor(country, city, postalCode, street, streetNumber) {
            this.country = country;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.streetNumber = streetNumber;
        }
        getData() {
            return `${this.street} ${this.streetNumber}, ${this.postalCode} ${this.city}, ${this.country.name}`;
        }
    }


    class BettingPlace {
        constructor(address) {
            this.address = address;
            this.listOfPlayers = [];
        }

        addPlayer(player) {
            this.listOfPlayers.push(player);
        }

        sumOfAllBets() {
            let sum = 0;
            this.listOfPlayers.forEach(element => {
                sum += this.listOfPlayers.betAmount;
            });
            return sum;
        }

        getData() {
            return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets ${this.sumOfAllBets()}`;
        }
    }

    class BettingHouse {
        constructor(competition, numberOfPlayers) {
            this.competition = competition;
            this.listOfBettingPlaces = [];
            this.numberOfPlayers = numberOfPlayers;
        }

        numberOfBets() {
            let counter = 0;
            this.listOfBettingPlaces.forEach(element => {
                this.listOfBettingPlaces.listOfPlayers.forEach(element => {
                    if (this.listOfBettingPlaces.listOfPlayers.betAmount > 0) {
                        counter++;
                    }
                });
            });
            return counter;
        }

        getData() {
            var string = '';
            this.listOfBettingPlaces.forEach(element => {
                string += `\t${this.listOfBettingPlaces.getData()}\n`;
                this.listOfBettingPlaces.listOfPlayers.forEach(element => {
                    string += `\t\t${this.listOfBettingPlaces.listOfPlayers.getData()}\n`;
                });
            });
            return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfBets()} bets\n\t${string}`;
        }
    }

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
