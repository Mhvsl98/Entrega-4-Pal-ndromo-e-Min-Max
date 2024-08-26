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
  // Inicia as variáveis auxiliares com o valor 0, conforme a dica.
  let minValue = arr[0];
  let maxValue = arr[0];

  // Laço de repetição para percorrer o array
  for (let i = 0; i < arr.length; i++) {
    // Se o valor atual é menor que o valor mínimo encontrado até agora, atualize minValue
    if (arr[i] <= minValue) {
      minValue = arr[i];
    }
    // Se o valor atual é maior que o valor máximo encontrado até agora, atualize maxValue
    if (arr[i] >= maxValue) {
      maxValue = arr[i];
    }
  }

  // Retorna um novo array com o valor mínimo e máximo
  return [minValue, maxValue];
}
console.log(arrayMaxMin(array));

//let array = [1, 52, 59, 16, 13, 9];
