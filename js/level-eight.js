// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade (s1, s2, s3) {
  let averageScore = (s1 + s2 + s3) / 3
  return averageScore < 60 ? 'F' : averageScore < 70 ? 'D' : averageScore < 80 ? 'C' : averageScore < 90 ? 'B' : 'A'
}

// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

function hoopCount (n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  let total = 0
  arr1.forEach(item => total = total + item)
  arr2.forEach(item => total = total + item)
  return total;
}

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
  let nameArr = name.split(' ')
  return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`
}

// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr){
  return arr.filter((item, i) => (i) % 2 == 0)
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let result =  (sonYearsOld * 2) - dadYearsOld
  return result > 1 ? result : result * -1
}

// https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/javascript

function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    if(a.toLowerCase() > b.toLowerCase()){
      return 1
    } else {
      return -1
    }
  })
}

sorter(['algebra', 'history', 'Geometry', 'English'])

// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript

function remove (string) {
  let result = string.split('').map((item, i, array) => {
    if((item == '!')){
      return ''
    } else {
      return item
    }
  }).join('')
  return result + '!'
}

remove('!test')

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
  return s.split('').filter( i => i != '!').join('');
  }

removeExclamationMarks('testing!!')

// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b){
  return a.length < b.length ? a+b+a:b+a+b;
}

console.log(solution('a','b'))


// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

function opposite(number) {
  return (number * -1)
}

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 != 0
}


// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript - simple factor equation 

function checkForFactor (base, factor) {
  return (base % factor) == 0
}

//  https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript - smple dna/rna conversion

function DNAtoRNA(dna) {
  return dna.split('').map(item => item == 'T' ? 'U' : item).join('')
}

//  https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript - simple challenge to return the number of days in a month

function howManydays(month){
  var days;
  switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:  
        days = 30;
        break;
      case 2:  
        days = 28;
        break;
  
  }
  return days;
}


// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript reverse 2 items in an array with 2 items. I shouldve just used '.rev()' on the split 'str'

nameShuffler = str =>  [str.split(' ')[1], str.split(' ')[0]].join(' ')

// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript first and last letters from each prop must be the same

function feast(beast, dish) {
    if(beast[0] == dish [0] && beast[beast.length -1] == dish[dish.length -1]){
      return true
    } else{
      return false
    }
    }
    
    feast("duck", "ducw")