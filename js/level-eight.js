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