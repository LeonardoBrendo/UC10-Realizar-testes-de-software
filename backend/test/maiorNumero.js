function maiorNumero(arr) {
  if (arr.length === 0) throw new Error("Array vazio");
  return Math.max(...arr);
}
module.exports = maiorNumero;