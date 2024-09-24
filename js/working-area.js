// level 5 https://www.codewars.com/kata/64b59f845cce08157b725b12/train/javascript

function totalPossibleAmount(s) {
    let sArr = s.split('')
    let comboObj = {}
    for(let i = 2; i < sArr.length; i++){
        console.log('test')
        let tempArr = []
        sArr.forEach((item, index, arr) => {
            if(tempArr.length == 0){
                tempArr.push(item)
                console.log(tempArr)
                return
            }
            

        })
    }
  }
  totalPossibleAmount('OXXO')