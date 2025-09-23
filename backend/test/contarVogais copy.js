function contarVogais(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
module.exports = contarVogais;