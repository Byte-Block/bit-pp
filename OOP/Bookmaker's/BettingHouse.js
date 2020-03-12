"use strict";
class BettingHouse {
    constructor(competition, numberOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
    }

    numberOfBets() {
        let counter = 0;
        this.listOfBettingPlaces.forEach(element => {
            element.listOfPlayers.forEach(element => {
                if (element.betAmount > 0) {
                    counter++;
                }
            });
        });
        return counter;
    }

    getData() {
        var string = '';
        this.listOfBettingPlaces.forEach(element => {
            string += `\t${element.getData()}\n`;
            element.listOfPlayers.forEach(element => {
                string += `\t\t${element.getData()}\n`;
            });
        });
        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfBets()} bets\n${string}`;
    }
}
module.exports = { BettingHouse };