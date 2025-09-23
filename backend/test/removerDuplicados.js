function removerDuplicados(arr) {
  return [...new Set(arr)];
}
module.exports = removerDuplicados;