class Airport {
  // here's a starting point for you
  planesInAirport;
  capacity;
  planesFlying;
  weather;
  takenOff;

  constructor(capacity = 1, weather = 5) {
    //constructor(capacity = 1, weather = Math.floor(Math.random() * 10)) {
    this.planesInAirport = [];
    this.planesFlying = [];
    this.capacity = capacity;
    this.weather = weather;
    this.takenOff = [];
  };

  isCalm() {
    if (this.weather < 8)
      return true;
  };


  land = plane => {
    if (this.planesInAirport.length < this.capacity && !(plane.status == "landed") && this.isCalm()) {
      this.planesInAirport.push(plane);
      plane.status = "landed"
    }
    if (this.planesInAirport.length >= this.capacity && !(plane.status == "landed") && this.isCalm()) {
      this.planesFlying.push(plane);
      plane.status = "refused landing as airport full";
    }
  };

  takeOff = plane => {
    for (let p = 0; p < this.planesInAirport.length; p++) {
      if (this.planesInAirport[p].id == plane.id && this.isCalm()) {
        this.planesFlying.push(plane);
        plane.status = "taken off"
        this.planesInAirport.pop();
      }
    }
  };
};

module.exports = Airport;


