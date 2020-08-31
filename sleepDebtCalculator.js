const getSleepHours = day => {
  
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 6
      break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 4
      break;
    case 'saturday':
      return 3
      break;
    case 'sunday':
      return 2
      break;
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt =() => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log("You've got the perfect amount of sleep!");
  }
  else if(actualSleepHours > idealSleepHours){
    console.log("You've got " + (idealSleepHours - actualSleepHours) + "more hours this week.");
  }
  else if(actualSleepHours < idealSleepHours){
    console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + "hours less than you should have this week.");
  }
  else {
    console.log("Error! Something went wrong, check your code.");
  }
}

calculateSleepDebt();

