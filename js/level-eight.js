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