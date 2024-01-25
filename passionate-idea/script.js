// Selecting elements from html
const numbCalories = document.querySelector(".child:first-child .numb");
const numbProtein = document.querySelector(".child:last-child .numb");
const numbCarbs = document.querySelector(".carbs .numb");
const numbFats = document.querySelector(".fats .numb"); 
const numbSteps = document.querySelector(".child-steps .numb-steps");
const numbBurnt = document.querySelector(".child-steps .numb-burnt");

// Initializing counters
let counterCalories = 0;
let counterProtein = 0;
let counterCarbs = 0;
let counterFats = 0; 
let counterSteps = 0;
let counterBurnt = 0;

// Target values
const targetValueCalories = 1000;
const targetValueProtein = 70;
const targetValueCarbs = 140;
const targetValueFats = 15; 
const targetValueSteps = 1000;
const targetValueBurnt = 50;

// durations and intervals
const durationCalories = 1000; 
const durationProtein = 4000; 
const durationCarbs = 4000; 
const durationFats = 4000; 
const durationSteps = 1000;
const durationBurnt = 4000;
const intervalCalories = durationCalories / targetValueCalories;
const intervalProtein = durationProtein / targetValueProtein;
const intervalCarbs = durationCarbs / targetValueCarbs;
const intervalFats = durationFats / targetValueFats; 
const intervalSteps = durationSteps / targetValueSteps;
const intervalBurnt = durationBurnt / targetValueBurnt;

// Update functions for counters
const updateCounterCalories = () => {
  if (counterCalories >= targetValueCalories) {
    clearInterval(counterIntervalCalories);
  } else {
    counterCalories += 1;
    numbCalories.textContent = counterCalories;
  }
};

const updateCounterProtein = () => {
  if (counterProtein >= targetValueProtein) {
    clearInterval(counterIntervalProtein);
  } else {
    counterProtein += 1;
    numbProtein.textContent = counterProtein;
  }
};

const updateCounterCarbs = () => {
  if (counterCarbs >= targetValueCarbs) {
    clearInterval(counterIntervalCarbs);
  } else {
    counterCarbs += 1;
    numbCarbs.textContent = counterCarbs;
  }
};

const updateCounterFats = () => {
  if (counterFats >= targetValueFats) {
    clearInterval(counterIntervalFats);
  } else {
    counterFats += 1;
    numbFats.textContent = counterFats;
  }
}; 

const updateCounterSteps = () => {
  if (counterSteps >= targetValueSteps) {
    clearInterval(counterIntervalSteps);
  } else {
    counterSteps += 1;
    numbSteps.textContent = counterSteps;
  }
};

const updateCounterBurnt = () => {
  if (counterBurnt >= targetValueBurnt) {
    clearInterval(counterIntervalBurnt);
  } else {
    counterBurnt += 1;
    numbBurnt.textContent = counterBurnt;
  }
};

// setting intervals for counters
const counterIntervalCalories = setInterval(updateCounterCalories, intervalCalories);
const counterIntervalProtein = setInterval(updateCounterProtein, intervalProtein);
const counterIntervalCarbs = setInterval(updateCounterCarbs, intervalCarbs);
const counterIntervalFats = setInterval(updateCounterFats, intervalFats); 
const counterIntervalSteps = setInterval(updateCounterSteps, intervalSteps); 
const counterIntervalBurnt = setInterval(updateCounterBurnt, intervalBurnt); 





