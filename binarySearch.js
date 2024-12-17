function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const half = Math.floor((low + high) / 2)
    const guess = list[half]

    if (guess == item) {
      return half
    } else if (guess > item) {
      high = half - 1
    } else {
      low = half + 1
    }
  } 
  return null

}

const myList = [1, 3, 5, 7, 9]
console.log(binarySearch(myList, 3))
console.log(binarySearch(myList, -1))