// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function() {
    return [drivers[2],drivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    const fareMultiplier = function(fare){
        return fare * multiplier;
}
}
