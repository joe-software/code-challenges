// Level 7 challenge - https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
    let total = 0
    for(let i = 0; i ++; i > n)
    {
        total = total + 1 / (((n - 1) * 3) + 1)
    }
    return String(total.toFixed(2))
  }