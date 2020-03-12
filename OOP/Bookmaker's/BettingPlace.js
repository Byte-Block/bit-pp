"use strict";
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
            sum += element.betAmount;
        });
        return sum;
    }

    getData() {
        return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets ${this.sumOfAllBets()}`;
    }
}
module.exports = { BettingPlace };