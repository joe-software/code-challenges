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