let palindrome = 'еле';

function isPalindrome(string:string):boolean {
  let reversedOrder = string.split('').reverse().join('');
  if (string === reversedOrder) {
    return true
  } else { return false }
}

console.log(isPalindrome(palindrome))