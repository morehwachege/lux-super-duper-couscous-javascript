function isFibonacci(num, a = 0, b = 1) {
  if(num === 0 || num === 1) {
    return true;
  }
  let nextNumber = a+b;
  if(nextNumber === num) {
    return true;
  }
  else if(nextNumber > num) {
    return false;
  }
 return isFibonacci(num, b, nextNumber);
}
// console.log(isFibonacci(35))
// 0 1 1 2 3 5 8 13 21 34