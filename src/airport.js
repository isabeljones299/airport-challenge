class Airport {
  // here's a starting point for you
  planesInAirport;
  capacity;
  notLanded;

  constructor(capacity = 1) {
    this.planesInAirport = [];
    this.notLanded = [];
    this.capacity = capacity;
  }

  land = plane => {
    if (this.planesInAirport.length < this.capacity) {
      this.planesInAirport.push(plane);
      plane.status = "landed"
    }
    else {
      this.notLanded.push(plane);
      plane.status = "refused landing";
    }
  }


}

module.exports = Airport;


