function processNumbers(a, b) {
  let result = a + b; 
  if (result > 10) { 
    result = result * 2; return result;         // Single Line     but 2 statements     
  } else {  
    
    // 2 lines but one statment
    result = (a * b) +                             
    (a - b);
  }
  return result; 
}