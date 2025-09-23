function contarPalavras(frase) {
  return frase.trim().split(/\s+/).length;
}
module.exports = contarPalavras;