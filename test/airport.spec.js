const { assertEquals, assertLarger } = require("../testing-framework");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;
let p;



// Test 1 - can a plane land in the airport? -----------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 1 - after landing, is the plane in the airport?`);

// Arrange
airport = new Airport();
plane = { id: "plane1", status: "is flying" }
expected = 1;

// Act
airport.land(plane);
actual = airport.planesInAirport.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: ${plane.id} landed in airport: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 2 - can airport capacity be changed? -----------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 2 - will more planes be allowed to land by increasing airport capacity from default?`);

// Arrange
airport = new Airport(2);
plane1 = { id: `plane1`, status: "is flying" };
plane2 = { id: `plane2`, status: "is flying" }
expected = 2;

// Act
airport.land(plane1);
airport.land(plane2);
actual = airport.planesInAirport.length;


// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Both planes were able to land hence airport capacity successfully increased from defalt size 1 to 2: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 3 - can airport capacity be exceeded? ------------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 3 - will airport capacity be exceeded when attemting to land a plane in a full airport?`);

// Arrange
airport = new Airport();
plane1 = { id: `plane1`, status: "is flying" };
plane2 = { id: `plane2`, status: "is flying" };
expected = 1;

// Act
airport.land(plane1);
airport.land(plane2);
actual = airport.planesInAirport.length;


// Assert
result = assertEquals(actual, expected);
console.log(`Test 3: ${airport.planesFlying[airport.planesFlying.length - 1].id} refused landing to full airport: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;



// Test 4 - can a plane take off from an airport?  ------------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 4 - can a plane take off from an airport?`);

// Arrange
airport = new Airport();
plane1 = { id: `plane1`, status: "is flying" };
plane2 = { id: `plane2`, status: "is flying" }
expected = 0;

// Act
airport.land(plane1);
airport.takeOff(plane1);
actual = airport.planesInAirport.length;


// Assert
result = assertEquals(actual, expected);
console.log(`Test 4: ${airport.planesFlying[airport.planesFlying.length - 1].id} took off from airport: ${result}`);


// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 5 - Will a plane take off from an airport that it is not in? ------------------------------------------------------------------------------------------------

console.log(`============================`);
console.log(`Test 5 - can a plane take off from an airport that it is not currently in?`);

// Arrange
airport = new Airport();
plane1 = { id: `plane1`, status: null };
plane2 = { id: `plane2`, status: null }
expected = null

// Act
airport.takeOff(plane1)
actual = plane1.status


// Assert
result = assertEquals(actual, expected);
console.log(`Test 5: plane can't take off from an airport that it is not currently in: ${result}`);
//${airport.planesFlying[airport.planesFlying.length - 1].id}

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 6 - Will a plane land in an airport that it is already in? -------------------------------------------------------------------------------