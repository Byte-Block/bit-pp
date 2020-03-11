"use strict";
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
        return this.name + " " + this.surname + " " + this.dateOfBirth.getDay() + "." + this.dateOfBirth.getMonth() + "." + this.dateOfBirth.getYear();
    };

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }

    Player.prototype.getData = function () {
        return this.country + ", " + this.betAmount + "eur, " + this.person.name + " " + this.person.surName + ", " + (2020 - this.person.dateOfBirth.getFullYear()) + " years";
    }

    function Address(country, city, postalCode, street, streetNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber;
    }

    Address.prototype.getData = function () {
        return this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + this.country;
    };

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    BettingPlace.prototype.getData = function () {
        var that = this;
        function sumOfAllBets() {
            var sum = 0;
            for (var i = 0; i < that.listOfPlayers.length; i++) {
                sum += that.listOfPlayers[i].betAmount;
            }
            return sum;
        }

        return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets " + sumOfAllBets();
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
        var counter = 0;
        for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
            for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
                if (this.listOfBettingPlaces[i].listOfPlayers[j].betAmount > 0) {
                    counter++;
                }
            }
        }

        return counter;
    }

    BettingHouse.prototype.getData = function () {
        var string = '';
        for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
            string += "\t" + this.listOfBettingPlaces[i].getData() + '\n';
            for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
                string += "\t\t" + this.listOfBettingPlaces[i].listOfPlayers[j].getData() + '\n';
            }
        }
        return this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numberOfBets() + " bets" + "\n" + string;
    }

    var Continents = Object.freeze({
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    });

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