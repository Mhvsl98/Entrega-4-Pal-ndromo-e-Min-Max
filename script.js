function isPalindrome(str) {
  let contrario = "";
  str = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  for (let i = str.length - 1; i >= 0; i--) {
    contrario += str[i];
    if (contrario === str) {
      return true;
    }
  }
  return false;
}
console.log(isPalindrome("A torre da derrota"));

function arrayMaxMin(arr) {
  /* Seu código aqui */
}
