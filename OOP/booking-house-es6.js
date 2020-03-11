"use strict";
console.log("This is ES6 on branch es6");
console.log("Edited through VIM!");
(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surName, date) {
        this.name = name;
        this.surName = surName;
        this.dateOfBirth = date;
    }

    Person.prototype.getData = function () {
        return `${this.name} ${this.surname} ${this.dateOfBirth.getDay()}.${this.dateOfBirth.getMonth()}.${this.dateOfBirth.getYear()}`;
    };

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }

    Player.prototype.getData = function () {
        return `${this.country}, ${this.betAmount}eur, ${this.person.name} ${this.person.surName}, ${(2020 - this.person.dateOfBirth.getFullYear())} years`;
    }

    function Address(country, city, postalCode, street, streetNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber;
    }

    Address.prototype.getData = function () {
        return `${this.street} ${this.streetNumber}, ${this.postalCode} ${this.city}, ${this.country}`;
    };

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    BettingPlace.prototype.getData = function () {
        let that = this;
        function sumOfAllBets() {
            let sum = 0;
            that.listOfPlayers.forEach(element => {
                sum += that.listOfPlayers.betAmount;
            });
            return sum;
        }

        return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets ${sumOfAllBets()}`;
    };

    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
    };

    function BettingHouse(competition, numberOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
    };

    BettingHouse.prototype.numberOfBets = function () {
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

    BettingHouse.prototype.getData = function () {
        var string = '';
        let that = this;
        that.listOfBettingPlaces.forEach(element => {
            string += `\t${that.listOfBettingPlaces.getData()}\n`;
            that.listOfBettingPlaces.listOfPlayers.forEach(element => {
                string += `\t\t${that.listOfBettingPlaces.listOfPlayers.getData()}\n`;
            });
        });
        // for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        //     string += this.listOfBettingPlaces[i].getData() + '\n\t';
        //     for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
        //         string += this.listOfBettingPlaces[i].listOfPlayers[j].getData() + '\n\t';
        //     }
        // }
        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfBets()} bets\n\t${string}`;
    }

    // var Continents = Object.freeze({
    //     EUROPE: "EU",
    //     ASIA: "AS",
    //     AFRICA: "AF",
    //     SOUTH_AMERICA: "SA",
    //     NORTH_AMERICA: "NA",
    //     AUSTRALIA: "AU"
    // });

    const europe = "EU";
    const asia = "AS";
    const africa = "AF";
    const southAmerica = "SA";
    const northAmerica = "NA";
    const australia = "AU";

    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    var bettingHouse = new BettingHouse("WORLD SERIES BETTING");

    var player1 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, 'SR');
    var player2 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, 'SR');
    var player3 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, 'GR');
    var player4 = createPlayer(new Person("Pera", "Peric", new Date("Jan 01 1990")), 1050.00, 'SR');

    var address1 = new Address('SR', "Belgrade", 11000, "Nemanjina", 4);

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
