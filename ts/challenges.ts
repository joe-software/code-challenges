// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/typescript

export const fakeBin = (x:string):string => {
  return x.split('').map(item => Number(item) < 5 ? 0 : 1).join('')
};


// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/typescript

export class Kata {
  static highAndLow(numbers: string): string {
  let numArr: number[] = numbers.split(' ').map((item) => +item
  )
  let max: number = Math.max(...numArr)
  let min: number = Math.min(...numArr)
  return `${max} ${min}`
}
}

// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/typescript

export function stringToNumber(str: string): number {
  let convertVar: number|string
  convertVar = Number(str)
  return convertVar
}
// https://www.codewars.com/kata/6444f6b558ed4813e8b70d43/train/typescript

export function graph(arr: number[]): string {
  if(arr.length == 1 && arr[0] == 0){
    return ' ____  ^ 0'
  }
  let  stringArr: string[]
  stringArr = []
  let max = Math.max(...arr)
  
  for(let i = max; i > -1; i --){
    let tempArr: string[]
    tempArr = []
    arr.forEach((item, index) => {
      if(item == i){
        tempArr.push(' ____ ')
      } else if(item < i){
        tempArr.push('......')
      } else if(item > i){
        tempArr.push('|    |')
      }
      if((i == max ) && (index == arr.length - 1)){
        tempArr.push(` ^ ${i}\n`)
      } else if((index == arr.length - 1) && i == 0){
        tempArr.push(` | ${i}`)
      } else if(index == arr.length - 1){
        tempArr.push(` | ${i}\n`)
      }
    })
    stringArr.push(tempArr.join(''))
  }
  return stringArr.join('')
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/typescript

// export class Kata {
//     public static bonusTime(salary:number, bonus:boolean):string {
//       return bonus ? `£${salary * 10}` : `£${salary}`
//     }
// }

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