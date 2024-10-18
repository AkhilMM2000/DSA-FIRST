//Check an integer is palindrome using recursion
function isPalindrome(n) {
    const str = n.toString();
    
    if (str.length <= 1) {
      return true;
    }
    
  
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    
  
    return isPalindrome(str.slice(1, -1));
    
  }
  console.log(isPalindrome(12321));
  