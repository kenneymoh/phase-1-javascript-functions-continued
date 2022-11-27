// code your solution here
const saturdayFun = function (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  };
  saturdayFun();
  saturdayFun("go shopping");
  
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  mondayWork();
  mondayWork("go to the gym");
  
  const wrapAdjective = function (wrapper = "*") {
    const message = function (string = "special") {
      return `You are ${wrapper}${string}${wrapper}!`;
    };
  
    return message;
  };
  
  const result = wrapAdjective("||");
  
  const emphatic = result("a emphatic boss");
  
  console.log(emphatic);