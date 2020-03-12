"use strict";
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
module.exports = { Address };