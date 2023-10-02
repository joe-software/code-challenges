// 'chessboard'

let width = 10;
let height = 22;
let board = ''

if(width % 2 == 0){
    let totalSquares = height * (width + 1);
    for(let i = 1; i <= totalSquares; i++){
	if(i % (width + 1) == 0 && i != 0){
    board = board + '\n'
    } else if(i % 2 != 0){
    board = board + '#'
    } else if(i % 2 == 0){
    board = board + ' '
    }
}
} else {
    let counter = 1;
    let totalSquares = height * (width);
    for(let i = 1; i <= totalSquares; i++){
	if(i % (width + 1) == 0 && i != 0){
    board = board + `\n${counter % 2 == 0 ? '#': ' '}`
    } else if(i % 2 != 0){
    board = board + '#'
    } else if(i % 2 == 0){
    board = board + ' '
    }
} 
    
}
console.log(board)


// 'fizzbuzz'

for(let i = 1; i < 101; i++){
    if(i % 5 == 0 && i % 3 == 0){console.log('fizzbuzz')}
    else if (i % 5 == 0 && i % 3 != 0){console.log('buzz')}
    else if (i % 3 == 0 && i % 5 != 0){console.log('fizz')}
    else{console.log(i)}
  }



// 'looping a triangle'

let hash = '#'
for(let i = 0; i < 7; i++){
 console.log(hash)
  hash = hash + '#'
}