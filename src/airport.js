class Airport {
  // here's a starting point for you
  planesInAirport;
  capacity;
  planesFlying;

  constructor(capacity = 1) {
    this.planesInAirport = [];
    this.planesFlying = [];
    this.capacity = capacity;
  }

  land = plane => {
    if (this.planesInAirport.length < this.capacity) {
      this.planesInAirport.push(plane);
      plane.status = "landed"
    }
    else {
      this.planesFlying.push(plane);
      plane.status = "refused landing";
    }
  }

  takeOff = plane => {
    this.planesInAirport.pop();
    this.planesFlying.push(plane);
    plane.status = "taken off"
  }
}

module.exports = Airport;


