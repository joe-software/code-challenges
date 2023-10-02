
//Issues with the codewars challenge

//codewars level 7 challenge - https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
  let obj = {}
  let answer
  numbers.forEach(addToObj)

  function addToObj(item){
    if(obj[item]){
      obj[item]++
    }
    else{
    obj[item] = 1
    }
  }
 
  Object.keys(obj).forEach((key => {
    if(obj[key] % 2 == 1){
      answer = key
    }
  }))
  return Number(answer)

}

stray([2,2,3,4,3])




//codewars level 7 challenge - https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript

function unluckyDays(year){
  let counter = 0;

  for(let i = 0; i < 12; i++){
    let d = new Date(year, i, 13)
    if(d.getDay() == 5){
      counter++
    }
  }
  return counter;
}

unluckyDays(2012)


// codewars level 7 challenge - https://www.codewars.com/kata/56e7d40129035aed6c000632/train/javascript

function easyLine(n) {
  n = n+1
  let arr = [1, 1]
  let counter = 2
  while(counter < n){
  arr = arr.map((item, i) => item + arr[i+1])
  arr.pop()
  arr = [1, ...arr, 1]
   counter++
  }
  if(n == 1){
    arr = [1]
  } else if(n == 2){
    arr = [1, 1]
  }
 
  return arr.reduce((curr, prev) => curr + prev ** 2)
	
  }
  
  
  easyLine(3)


// codewars level 7 challenge - https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

function isNarcissistic(n){
  return testNum = String(n).split("").map(a => Number(a) ** String(n).length).reduce((curr, prev) => { return curr + prev}) == n
  
}

// isNarcissistic(153)


// codewars level 7 challenge - https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/solutions/javascript - categorise based on an array of arrays, each with 2 values

function openOrSenior(data){
  let result = [];
  data.forEach(item => {
    if(item[0] > 54 && item[1] > 7){
      result.push("Senior")
    } else {
      result.push("Open")
    }
  })
  return result
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])


// codewars level 7 challenge - https://www.codewars.com/kata/5966f6343c0702d1dc00004c - break a number down into the smallest required change

function giveChange(amount) {
let returnChange = [0, 0, 0, 0, 0, 0];
  function subtractChange(value, index){
    let num = Math.floor(amount/value);
    returnChange[index] = num;
    amount = amount - (num * value)
  }
  subtractChange(100, 5);
  subtractChange(50, 4);
  subtractChange(20, 3);
  subtractChange(10, 2);
  subtractChange(5, 1);
  subtractChange(1, 0);

  return returnChange

}


// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills


// codewars level 7 challenge -  https://www.codewars.com/kata/55de6173a8fbe814ee000061 - Given an array of numbers, return an array of all single numeric digits whicha arent in the original array.

// the rest parameter needed to be used to handle an unknown number od args

function unusedDigits(...nums){
 
    let arr = [];
  
    for(let i = 0; i < 10; i ++){
      if(!String(nums).includes(i)){
        arr.push(i);
      }
    }
    
    return arr.join("")
  
  }
  