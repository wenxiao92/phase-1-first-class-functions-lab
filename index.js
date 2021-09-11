// Code your solution in this file!
//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
   // return [drivers[0], drivers[1]];
   return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    //return [drivers[2],drivers[3]];
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
} 
}

//let multiplier = createFareMultiplier(2)
//multiplier(5)
//createFareMultiplier(2)(5)

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers,firstOrLast) {
    return firstOrLast(drivers);
}