"use strict";
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
module.exports = { Person };