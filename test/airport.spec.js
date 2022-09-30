const { assertEquals, assertLarger } = require("../testing-framework");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let bristol;
let plane;

// Test 1 - can a plane land in the airport?

console.log(`============================`);
console.log(`Test 1 - after landing, is the plane in the airport?`);

// Arrange
bristol = new Airport();
plane = { id: `plane1` };
expected = 1;

// Act
bristol.land(plane);
actual = bristol.planesInAirport.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: plane landed in Bristol airport: ${result}`);
console.log(plane)

// Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;