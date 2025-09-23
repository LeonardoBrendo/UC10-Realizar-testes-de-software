function palindromo(str) {
  const formatado = str.toLowerCase().replace(/\s/g, '');
  return formatado === formatado.split('').reverse().join('');
}
module.exports = palindromo;