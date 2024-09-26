// https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript - Level 8

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let counter : number
    counter = 0
    arrayOfSheep.forEach(item => {
        if(item){
            counter ++
        }
    })
    return counter
  }