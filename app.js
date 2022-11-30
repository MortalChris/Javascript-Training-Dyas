// The scope of `random` is too loose
const name = `Nala`;

const getRandEvent = () => {
  random = Math.floor(Math.random()*2);
  if(random === 0){
    return `Marathon`;
    } else if(random === 1){
      return `Triathlon`;
    } else if (rnadom === 2){
      return `Pentahlon`;
    }
};


//The Scope of 'days' is too tight
const getTrainingDays = (event) => {
  let days
  if(event === `Marathon`){
    days = 50;
  } else if(event === `Triathlon`){
    days = 100;
  } else if(event === `Pentahlon`){
    days = 200;
  }
  
  return days;
};


//The Scope of 'name' is too tight
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
//Define a 'name' variable. Use it as an argument after updating logevent and logTime

logEvent(name, event);
logTime(name, days);



//Part 9
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = `Warren`;

logEvent(name2, event2);
logTime(name2, days2);
