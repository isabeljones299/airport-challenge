class Airport {
  // here's a starting point for you
  planesInAirport;
  capacity;

  constructor(capacity = 1) {
    this.planesInAirport = [];
    this.capacity = capacity;
  }

  land = plane => {
    if (this.planesInAirport.length >= this.capacity) {
      console.log("no landing space")
    }
    else {
      this.planesInAirport.push(plane);
      console.log("plane landed")

    }
  }
}

module.exports = Airport;
