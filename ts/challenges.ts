// https://www.codewars.com/kata/556deca17c58da83c00002db/train/typescript - level 6

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    let arr = [a, b, c]
    let counter = 0
    while(counter < n){
        arr.push(arr[arr.length - 1] + arr[arr.length - 2] +arr[arr.length - 3])
        counter ++
    }
    return arr.slice(0, n-1)
  }


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