function contarCaracter(str, char) {
  return (str.match(new RegExp(char, "g")) || []).length;
}
module.exports = contarCaracter;