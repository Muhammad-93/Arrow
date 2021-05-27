const arr = [1, 2, 3, 4]

// arr.filter(function(num){
//   const x =  num % 2 === 0;
//   console.log (x)
//   return x    
// })



// let a = arr.filter(function(num){
//     // console.log (num)
//     const z = num % 2 === 0;
//     console.log (z)
//       return z
//   })

//   console.log (a)

//   =====

  let b = arr.filter((num) => {
    // console.log (num)
    const z = num % 2 === 0;
    // console.log (z)
      return z
  })

  console.log (b)

// ===== Exercise ======

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

  let double = arr => 
      arr.map (val => 
         val*2
      )

 let y = double([10])
  console.log(y)


//   g(x) = 2 * x
//   y = g(10)


// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }


let squareAndFindEvens = numbers => 
    numbers.map (num => num ** 2).filter(
        square => square % 2 === 0
    )


    let q = squareAndFindEvens([10, 20]);
    console.log(q)
