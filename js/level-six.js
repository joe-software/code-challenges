// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
  let result = 0
  let textArr = text.toLowerCase().split('')
  let countObj = {}
  textArr.forEach(item => {
    !countObj[item] ? countObj[item] = 1 : countObj[item] = countObj[item] + 1
  })
  Object.values(countObj).forEach(item => {
    if(item > 1){
      result++
    }
  })
  return result
}

duplicateCount('testing')

// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  let expandedArr = []
  let numArr = num.toString().split('').reverse()
  numArr.forEach((item,i) => {
    let multiplier = 1
    if(item ==0){
      return
    } else {
      for( j = 0; j < i; j++){
        multiplier = multiplier * 10
      }
      expandedArr.push(multiplier * item)
    }
    console.log(expandedArr)
  })
  return expandedArr.reverse().join(' + ')
}

expandedForm(120)

// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
  let dividedStringArr = []
  let tempStrArr = []
  let result = ["", 0]
  s.split('').forEach((item, i) => {
    if(tempStrArr.length == 0 || tempStrArr[0] == item){
      tempStrArr.push(item)
    } else {
      dividedStringArr.push(tempStrArr.join(''))
      tempStrArr = []
      tempStrArr.push(item)
    }
    dividedStringArr.push(tempStrArr.join(''))
  })
  dividedStringArr.forEach(item => {
    if(item.length > result[1]){
      result = [item[0], item.length]
    }
  })

  return result
}
longestRepetition('bbbaaabaaaa')

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {
  if(k <= 0 || strarr.length < k || strarr == 0){
    return ''
  }
  let answer = ''
  strarr.forEach((item, i) => {
    let compareValue = item
    for(let j = 1; j < k; j++){
      if(!strarr[j+i]){
        return
      }
      compareValue = compareValue + strarr[j+i]
    }
    if(compareValue.length > answer.length){
      answer = compareValue
    }
  })
  return answer
}

longestConsec(['test', 'test1', 'test22', 'test333'], 3)

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
  // Convert word to a lowercase array
  let result = word.toLowerCase().split('')
  // create an object to hold the counter
  let letterCounterObj = {}
  // for each item in the array, create a key in letterCounterObj with value 1, if it already exists add 1 to the value, this will count how many times each item appears
  result.forEach(item => !letterCounterObj[item] ? letterCounterObj[item] = 1 : letterCounterObj[item] ++
  )
  // create a new string, using map to check how many times the counter has referenced the value, and then convert to either ( or )
  let newResult = result.map(item => {
    return letterCounterObj[item] > 1 ? ')' : '(' 
  }).join('')

  return newResult
}

duplicateEncode('TeSt')

// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  // create a counter to capture total time in queue
  let total = 0;
  //create array with a 0 starting value for each till
  let tills = []
  for (let i = 0; i < n; i++){
    tills.push(0)
  }
  // function in while loop to ensure loop continues while there are still people in the queue
  while(customers.length > 0){
    if(tills.includes(0)){
      // if tills include a 0 the till gets given a new customer
      tills.map( (item, i, array) => {
        if(item == 0){
        // if the till is free (0) in array
          let newCustomer = customers[0]
          // if the new person in the queue takes longer than the other tills, add the difference to the total time taken
          if(newCustomer > Math.max(...array)){        
            total = total + (newCustomer - Math.max(...array))
          }
          //replace the free till with the new customer
          tills[i] = (newCustomer||0)
          // remove the customer from the queue
          customers.shift()
        } 
      })
    } else {
      // if does not contain a zero then a minute passes and is removed from each till
      tills.map((item, i) => {
        tills[i] = item - 1
      })
    }     
  }

  return total
}

queueTime([1, 2, 1, 1], 2)

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
  let placeholder = iterable
  if(typeof iterable == "string"){
      placeholder = placeholder.split('')
  }
  let result = []
  let prevValue
  placeholder.forEach((element, i) => {
      if(prevValue != element){
          result.push(element)
      }
      prevValue = element
  });
  return result
}


// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript


function createPhoneNumber(numbers){

  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
 }
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
  let obj = {}
  let result = []

  arr.forEach(element => {
      obj[element] ? obj[element] = (obj[element] + 1): obj[element] = 1
      obj[element] > n ?  null : result.push(element)
  });
  return result
  
}


// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
  if(str == ''){
    return ''
  }
  let splitStr = str.split('-').join('_').split('_')
  splitStr = splitStr.map((item, i) => {
    if(i == 0){
      return item
    }
    item = item.split('')
    item[0] = item[0].toUpperCase()
    return item.join('')
  })
  return splitStr.join('')
    }

// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
  let answer = true
  let strChar = str.split('')
  let strQuar = str.split('.')
  if(strChar.includes(' ') || strChar.includes('e') || strChar.includes('/') || strChar.includes('..') || strChar.includes('-') || strChar.includes('\n')){
    answer = false
  }
  strQuar.forEach(item => {
    if(Number(item) < 0 || Number(item) > 255 || item == '' || item % 1 != 0){
      answer = false
    }
  })
  strQuar = strQuar.filter(item => {
    return (item.length > 1 && item[0] != '0' || item.length == 1 )
  })
  if(strQuar.length != 4){
    answer = false
  }
  return answer
  }

// codewars level 6 - https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
  let odd = []
  let even = []
  integers.forEach(element => {
      if(element % 2 == 0){
          even.push(element)
      } else {
          odd.push(element)
      }
  });
  return odd.length == 1 ? odd[0] : even[0]
}

// codewars level 6 -  https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

arrayDiff = (a, b) => {
  let answer = a.map((item) => {
      for(let i = 0; i<b.length;i++){
          if(item == b[i]){
              return
          }
      }
      return item
  }).filter(item => item != undefined)
  return answer
}

// codewars level 6 -  https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

digPow = (n, p) => {
  let total = 0;
  String(n).split('').forEach((item, index) => {
      total = total + (item ** (index + p))    
  });
 return total % n == 0 ? total/n : -1
}


// codewars level 6 - https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
  let splitN = String(n).split('')
  while(splitN.length > 1){
  let splitNAdded = splitN.reduce((acc, curr) => acc + Number(curr), 0)
  splitN = String(splitNAdded).split('')
  }
  return Number(splitN[0])
}






// codewars level 6 - https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript

//** i need to come back to this one */

function findChildren(dancingBrigade) {
	return dancingBrigade.split("").map(item => item.charCodeAt()).sort((a, b) => a-b).map(item => String.fromCharCode(item)).join("")
}

findChildren('aaaaBBaaaAAbbb')



//Codewars level 6  - https://www.codewars.com/kata/5fefee21b64cc2000dbfa875/train/javascript - rearranging numbers


function minPermutation(n) {
  
  if(n == 0){
    return 0
  }
  let splitNum = String(n).split("").filter(item => item != '-')
  

  function numZero(arr){
    let zeros = []
    arr.forEach(item => {
      if(item == 0){
        zeros.push('0')
      }
    })
    return zeros.length
  }

 let splitNum1 = splitNum.filter(item => item != '0').sort((a, b) =>  b - a)
 let maxNum = Math.min(...splitNum1)

 splitNum1.pop()
 splitNum1.push('0'.repeat(numZero(splitNum)))
 splitNum1.push(maxNum)
  
  if(!String(n).split("").includes('-')){
    return Number(splitNum1.reverse().join(""))
  } else {
  return Number( "-" + splitNum1.reverse().join(""))
 
  }
  }

// codewars level 6 - https://www.codewars.com/kata/6138ee916cb50f00227648d9/train/javascript

function joust(listField, vKnightLeft, vKnightRight) {
	if(listField[0].length / 2 < 3 || vKnightLeft == 0 && vKnightRight == 0 ){
    return listField
  }
    
  while(listField[0].indexOf(">") < listField[1].indexOf("<")){
   listField[0] = " ".repeat(vKnightLeft) + listField[0].split("").reverse().slice(vKnightLeft).reverse().join("")
   listField[1] = listField[1].split("").slice(vKnightRight).join("") + " ".repeat(vKnightRight)
  }

  return listField

}  
 

// codewars level 6 challenge - https://www.codewars.com/kata/57f4ccf0ab9a91c3d5000054/train/javascript - introduction to chmod

function chmodCalculator(perm) {
    if(!perm.group){
      perm.group = '---'
    }
     if(!perm.user){
      perm.user = '---'
    }
     if(!perm.other){
      perm.other = '---'
    }
    
    let user = perm.user.split("")
    let group = perm.group.split("")
    let other = perm.other.split("")
    
    function digit(group){
      return group.map(item => {
        if(item == "r"){
          return 4
        } else if(item == "w"){
          return 2
        } else if(item == "x"){
          return 1
        } else {
          return 0
        }
      }).reduce((curr, prev) => curr + prev)
    }
    
    return (`${digit(user)}${digit(group)}${digit(other)}`)
  }

  

// codewars level 6 challenge -  https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript sum all numbers in a range, which are multiples of 3 or 5. Additionally negative numbers are 0.

function solution(number){
    let arr = []
    for(i = 1; i < number; i++){
        arr.push(i)
    }
// edge case where it is an empty array, so reduce returns an error - if statement to return 0 if empty array

    return arr.filter(item =>  item > 0 && item % 5 == 0 || item % 3 == 0).reduce((prev, curr) => prev + curr)
}

//number(10)