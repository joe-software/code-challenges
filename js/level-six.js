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