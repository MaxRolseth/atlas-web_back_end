// import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  get displayFullPrice() {
    return this.displayFullPrice();
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // setters
  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }
}
