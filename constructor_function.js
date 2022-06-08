function House(bedrooms, bathrooms, numSqft, state, city, zip) {
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.numSqft = numSqft;
  this.state = state;
  this.city = city;
  this.zip = zip;
}

var myFutureHouse1 = new House(4, 2, 2400, "FL", "Miami", 33101);
var myFutureHouse2 = new House(3, 2, 1800, "CA", "SF");
console.log(myFutureHouse1);
console.log(myFutureHouse2);

/*
{
    "bathrooms": 2,
    "bedrooms": 4,
    "numSqft": 2400,
    "state": "FL",
    "city": "Miami",
    "zip": 33101
} 

{
    "bathrooms": 2,
    "bedrooms": 3,
    "numSqft": 1800,
    "state": "CA",
    "city": "SF",
    zip: undefined
}
*/
