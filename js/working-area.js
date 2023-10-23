// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
    let answer = true
    let strChar = str.split('')
    let strQuar = str.split('.')
    if(strChar.includes(' ') || strChar.includes('e') || strChar.includes('/') || strChar.includes('..') || strChar.includes('-')){
      answer = false
    }
    strQuar.forEach(item => {
      if(Number(item) < 0 || Number(item) > 255){
        answer = false
      }
    })
    strQuar.filter(item => {
      return (item.length > 0 && item[0] == '0')
    })
    if(strQuar.length != 4){
      answer = false
    }
      if(str[0] == '.'){
        answer = false
      }
    console.log(str, strQuar, 'end')
    return answer
    }