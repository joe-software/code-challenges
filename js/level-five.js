// codewars level 5 challenge - https://www.codewars.com/kata/54e320dcebe1e583250008fd - working with factorial numbers
function dec2FactString(nb) {
  	
    function convert(num, nb){
      
    let arr = []
    for(let i = num; i > 0; i--){
      let n = Math.floor(nb/factorialNum(i))
      if(n > 10){
          n = 'A'
      }
      arr.push(n)
      nb -= (n * factorialNum(i))
    }
    return arr
  }
  
  function findMaxFactor(num){
      let maxFactor = 0;
        for(let i = 1; num / factorialNum(i) >= 1; i++){
        maxFactor = i
      }
    return maxFactor
  }

  function factorialNum(iNum){
      let counter = iNum
      while(counter > 1){          
          iNum = iNum * (counter - 1)
          counter--
      }
   return iNum
  }
return convert(findMaxFactor(nb), nb).join("") + 0
}

dec2FactString(463)

function factString2Dec(str) {
	let arr = str.split("")

    return arr.map((item, i) => {
        return factorialNum(arr.length -i -1) * item
    }).reduce((prev, curr) => curr + prev)
    

    function factorialNum(iNum){
        let counter = iNum
        while(counter > 1){          
            iNum = iNum * (counter - 1)
            counter--
        }
     return iNum
    }

}

factString2Dec('341010')

// codewars level 5 challenge - https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript - converting RGB code to hex code - the formula to convert is to take an RGB code / 16 - thats the first number to change to hex, then take the modulus and * 16, that is the second

// note - if I were to complete this task again, I would have used toString to convert to hex, I made this harder than it needed to be

function rgb(r, g, b){
    let convertChart = {
        "10": "A", 
        "11": "B", 
        "12": "C",
        "13": "D",
        "14": "E",
        "15": "F",
        "16": "F"
    }

    function convert (num){
      console.log(num)
        if(num < 0){
            return '00'
        } else if(num > 255){
          num = 255
        }
        let num1 = Math.floor(num / 16)
        if(num1 > 9){
            num1 = convertChart[String(num1)]
        }
        let num2 = num % 16
        if(num2 > 9){
            num2 = convertChart[String(num2)]
    }
    
    return `${num1}${num2}`
    }
 return `${convert(r)}${convert(g)}${convert(b)}`
  }

rgb(148, 0, 211)



// codewars level 5 challenge - https://www.codewars.com/kata/5581e52ac76ffdea700000c1 - This one is really interesting, looking at cellular automation and undertanding rule 30.
function rule30(list, n){
    let rule30Obj = {
        "000": 0,
        "001": 1,
        "010": 1,
        "011": 1,
        "100": 1,
        "101": 0,
        "110": 0,
        "111": 0
    }  
        // function to run a line of cellular automation
    function cellLine(list){
        let resultArr = [];
        list.push(0, 0);
        list.unshift(0, 0);
        for(let i = 1; i < list.length -1; i++){
        let neighborCells = [list[i-1], list[i], list[i+1]]
        resultArr.push(rule30Obj[neighborCells.join("")]);
        }
  		return resultArr
    }
    // function to run the cellLine function n times
    for(let j = 0; j < n ; j++){
       list = cellLine(list)
    }
    return list
  }

// codewars level 5 challenge - https://www.codewars.com/kata/525c65e51bf619685c000059/javascript - comparing 2 objects

function cakes(recipe, available) {
    let recipeArr = Object.keys(recipe);
    
// this for loop handles cases of available.prop not existing, or available prop == 0

    for(let i = 0; i < recipeArr.length; i++){
        if(available[recipeArr[i]] == 0 || !available.hasOwnProperty(recipeArr(i))){
            return 0
        }
    }

    return Math.min(...recipeArr.filter(item => available[item] > 0).map(item => Math.floor(available[item] / recipe[item])))
    
    }
    
    // cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 