// Q. 1 
// let nums = [3, 2, 2, 3]
// let val = 3
// let k = []
// function inPlace(nums) {
//     let sort = nums.sort((a, b) => (a - b))
//     console.log(sort)
//     for (let i = 0; i < sort.length; i++) {
//         if (sort[i] != val) {
//          k.push(sort[i])
//         }
//     }
//     return k
// }
// console.log(inPlace(nums)) 


// Q. 2 

// let x = [3, 0, 1]
// let nx = []
// function palindrome(x) {
//     for (let i = x.length; i > 0; i--) {
//         for (let j = 0; j < x.length; j++) {
//             if (x[i] == x[j]) {
//                 flag = true
//             } else {
//                 flag = false
//             }
//             return flag
//         }
//     }

// }
// (palindrome(x))

// Q. 3 

// let array = [1, 2, 3, 4, 5]
// let output = 15
// let value = 0
// function calculateSum(array) {
//     for (let i = 0; i < array.length; i++) {
//         value = value + array[i]
//     }
//     return value
// }

// console.log(calculateSum(array))


// Q. 5 

// let array = ["r", "o", "c", "k", "y"]
// let newArray = []
// function reverseArray(array) {
//     for (let i = array.length-1; i >= 0; i--) {
//         newArray.push(array[i])
//     }
//     return newArray
// }
// console.log(reverseArray(array))

// Q. 6 

// let array = ["a", "c", "d", "a", "b", "a"]
// let empty = []
// function removeDuplicates(array) {
//     let newArray = new Set([...array]);
//     return newArray
// }
// console.log(removeDuplicates(array))