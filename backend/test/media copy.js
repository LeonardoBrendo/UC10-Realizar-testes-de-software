function media(numeros) {
  if (numeros.length === 0) return 0;
  return numeros.reduce((acc, n) => acc + n, 0) / numeros.length;
}
module.exports = media;