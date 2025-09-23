function menorNumero(arr) {
  if (arr.length === 0) throw new Error("Array vazio");
  return Math.min(...arr);
}
module.exports = menorNumero;