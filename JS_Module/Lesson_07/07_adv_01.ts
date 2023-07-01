let palindrome = 'еле';

function isPalindrome(string:string):boolean {
  let reversedOrder = string.split('').reverse().join('');
  return string === reversedOrder;
}

console.log(isPalindrome(palindrome))