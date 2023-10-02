// note. These were added before creating seperate js files to categorise the challenges. Needs to be sorted properly.

// 1.6 Codewars - https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript
function int32ToIp(int32){
    let arr = []
    let n = 1;
    for(let i = 1; i < 33; i++){
      arr.push(n);
      n *= 2
A    }
    return res = int32.toString(2).split("").map((item, i) => {
      return i == 7 || i == 15 || i == 23 ? item +"." : item
      }).join("").split(".").map(a => {
      return parseInt(a, 2)
    }).join(".")
    }
    // or int32 = 2075466029
    // : expected '247.106.50.45' to equal '123.181.25.45'

    // problem it is leaving 31 bits? needs padding somewhere?
    
    
    
    int32ToIp(24326)

// 1.5 Codewars - https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript - edit a string changing cases and letters

function changer(str) { 

    return str.toLowerCase().split("").map(item => {
        if(item.charCodeAt() == 122){
            return "A"
        } else if(item.charCodeAt() >= 97 && item.charCodeAt() < 122){
            return String.fromCharCode(item.charCodeAt() + 1)
        } else {
            return item
        }
    }).map(item => {
        if(item.match(/[a, e, i, o, u]/)){
            return item.toUpperCase()
        } else{
            return item
        }       
    }).join("");
           
  }

  changer("Cat30")

// 1.4 Codewars - https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript - time conversions and data management

function stat(strg) {
    if(strg == ""){
      return strg
    }
        // array methods used to split the aug to an array of times, and then convert those times into seconds with timeInSeconds being an array of each time coverted to seconds
        
            let timesInSeconds = strg.split(",").map(x => x.trim()).map(item => {
            return item.split("|").map((item, i) =>{
                if(i == 0){
                    return Number(item) * 3600
                } else if(i == 1){
                    return Number(item) * 60
                } else {
                    return Number(item)
                }
            }).reduce((prev, curr) => prev + curr)
            }).sort((a, b) => a - b)
        
            // function to convert time in seconds to HH|MM|SS

            function secondsToFullTime(seconds){
                let hours = String(Math.floor(seconds/3600)).padStart(2, "0")
                let mins = String(Math.floor((seconds-(hours * 3600))/60)).padStart(2, "0")
                let secs = String(Math.floor(seconds - ((mins * 60) + (hours * 3600)))).padStart(2, "0")

                return `${hours}|${mins}|${secs}`
                }
            function average(arr){
                return (arr.reduce((curr, prev) => curr + prev)) / arr.length
            }
                
            function range(arr){
                return Math.max(...arr) - Math.min(...arr)
            }
            function median(arr){
                if(arr.length % 2 == 0){
                    return ((arr[Math.floor(arr.length/2)] + arr[(Math.floor(arr.length/2)) - 1])) / 2
                } else {
                    return arr[Math.floor(arr.length/2)]
                }
            }
        return `Range: ${secondsToFullTime(range(timesInSeconds))} Average: ${secondsToFullTime(average(timesInSeconds))} Median: ${secondsToFullTime(median(timesInSeconds))}`
             }
        
        // example function call with aug below
        // stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17") 

// 1.3 Codewars - https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

function pattern(n){
    let output = "1\n"
    for(let i = 2; i < n; i++){
      output += `1${"*".repeat(i-1)}${i}\n`
    }
    output += `1${"*".repeat(n-1)}${n}`
    return output
    }

// 1.2 E JS Chapter 6 - challenge = 'groups' - Replicate some of the functionality of the Set object by creating a new object instance called Group. The class also includes a static method which returns a new class with the augs included as the 'set' - but filtered to include no dulicates

class Group{
    constructor(){
        this.collection = [];
    }

    static from(newItems){
        let list = new Group()
        newItems.forEach(item => {
              list.add(item)
        })
        return list
    }

add = function(item){
    if(this.collection.includes(item) == false)
    this.collection.push(item)
}

delete = function(item){
    if(this.collection.includes(item)){
        this.collection = this.collection.filter(list => list !== item)
    }
}
has = function(item){
    return this.collection.includes(item)
}

}

// let group = Group.from([10, 20]);
// console.log(group.has(10)); // true
// console.log(group.has(30)); // false
// group.add(10); // will not add a replicate
// group.delete(10); 
// console.log(group.has(10)); // false


// 1.1 E JS Chapter 6 - challenge = 'a vector type' - combines and subtracts vectors stored in objects, and returns a length from a 'setter'

class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
  get length(){
  	let xSq = this.x ** 2;
    let ySq = this.y ** 2;
    return (xSq + ySq) ** 0.5
}
   }
   
Vec.prototype.plus = function(additionalVec){
       return new Vec((this.x + additionalVec.x),(this.y + additionalVec.y))
}

Vec.prototype.minus = function(additionalVec){
    return new Vec((this.x - additionalVec.x),(this.y - additionalVec.y))
}


// console.log(new Vec(1, 2).plus(new Vec(2, 3)))
// console.log(new Vec(1, 2).minus(new Vec(2, 3)))
// console.log(new Vec(3, 4).length)