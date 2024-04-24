export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  get currency() {
    return this.displayFullCurrency();
  }

  displayFullCurrency() {
    return `${this._name} (${this.code})`;
  }

  // setters
  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }
}
