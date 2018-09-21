
let getActualSleepHours = () => 66;

let getIdealSleepHours = idealHours => idealHours *= 7;

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(10);
  if(actualSleepHours === idealSleepHours) {
    return 'Perfect Amount of Sleep';
  } else if(actualSleepHours > idealSleepHours) {
    let sleptHours = actualSleepHours - idealSleepHours;
    return `User got ${sleptHours} more sleep than needed`;
  } else {
    let hoursNeeded = idealSleepHours - actualSleepHours;
    return `User should get ${hoursNeeded} hours more sleep`;
  }
}

console.log(calculateSleepDebt());
