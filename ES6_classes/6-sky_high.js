import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); //need to do the message too?
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  //getters
  get floors() {
    return this._floors;
  }

  //setters
  set floors(floors) {
    this._floors = floors;
  }
}