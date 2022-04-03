const findRemainderForAllNum = (arr, devider) => {
  let remainderArr = [];
  arr.forEach(num => {
    remainderArr.push(num % devider);
  })
  return remainderArr;
}

const sumArrayNumbers = arr => {
  let sum = 0
  arr.forEach(num => {
    sum = sum + num;
  });
  return sum;
}

const areQuotientsIntegers = (arr, devider) => {
  let remainderArr = findRemainderForAllNum(arr, devider);
  if (sumArrayNumbers(remainderArr) === 0) {
    return true;
  } else {
    return false;
  }
}

const findMaxNumFromArr = arr => {
  let maxNum = 0;
  arr.forEach(num => {
    if (num > maxNum) {
      maxNum = num;
    }
  });
  return maxNum;
}

const findIntegerDividersArr = arr => {
  let IntegerDividersArr = [];
  for (devider = 1; devider <= findMaxNumFromArr(arr); devider++) {
    if (areQuotientsIntegers(arr, devider) === true) {
      IntegerDividersArr.push(devider);
    }
  }
  return IntegerDividersArr;
}

const findArrNumbersMaxIntegerDivider = arr => {
  return findMaxNumFromArr(findIntegerDividersArr(arr));

}

let questionsArray = [];

const askN = [{
  name: "n",
  type: "number",
  message: "У скольких чисел ты хочешь найти наибольший общий делитель?"
}];

const inquirer = require("inquirer")

const generateSomeQuestions = num => {
  for (let i = 1; i <= num; i++) {
    let question = {
      name: i,
      type: "number",
      message: `Введи число ${i}:`
    }
    questionsArray.push(question);
  }
  return questionsArray;
}

inquirer
  .prompt(askN)
  .then(answer => {
    inquirer
      .prompt(generateSomeQuestions(answer.n))
      .then(answer => {
        let result = findArrNumbersMaxIntegerDivider(Object.values(answer));
        console.log(`Наибольший общий делитель: ${result}`);
      })
  })