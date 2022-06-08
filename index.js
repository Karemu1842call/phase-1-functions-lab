const hq =42;
function distanceFromHqInBlocks(pickuplocation){
    if (pickuplocation<42){
        return hq-pickuplocation
    } else {
        return pickuplocation-hq
    }
}
function distanceFromHqInFeet(pickuplocation){
    return distanceFromHqInBlocks (pickuplocation) *264
    if(pickuplocation < 42) {
        return (hq - pickuplocation) *264  
        } else {
           return (pickuplocation-hq) *264
        }
    }

    function distanceTravelledInFeet(start,destination){
    if(destination<start) {
        return (start -destination) *264
    } else {destination>start}
    return (destination-start)* 264
}

let charges;
function calculatesFarePrice(start, destination){
   const distance =distanceTravelledInFeet(start,destination);
    if(distance <= 400){
        return 0;
    }
else if(distance > 400 && distance <= 2000){
    return 0.02 * (distance -400);
}   
else if(distance >2000 && distance <=2500){
    return 25;
}
else{
    return 'cannot travel that far'
}
}
   
   

console.log(calculatesFarePrice(1000, 2000));