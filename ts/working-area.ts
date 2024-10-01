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
  