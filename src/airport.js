class Airport {
  // here's a starting point for you
  planesInAirport;
  capacity;
  planesFlying;


  constructor(capacity = 1) {
    this.planesInAirport = [];
    this.planesFlying = [];
    this.capacity = capacity;
    this.takenOff = [];
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
    for (let p = 0; p < this.planesInAirport.length; p++) {
      if (this.planesInAirport[p].id == plane.id) {
        this.planesFlying.push(plane);
        plane.status = "taken off"
        return this.planesInAirport.pop();
      }
    }
  }
}

module.exports = Airport;


