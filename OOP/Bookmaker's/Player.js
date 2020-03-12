"use strict";
class Player {
    constructor(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }

    getData() {
        return `${this.country.name}, ${this.betAmount}eur, ${this.person.name} ${this.person.surName}, ${(2020 - this.person.dateOfBirth.getFullYear())} years`;
    }
}
module.exports = { Player };