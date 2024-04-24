export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // getters
  get sqft() {
    return this._sqft;
  }

  // setters
  set sqft(sqft) {
    this._sqft = sqft;
  }
}
