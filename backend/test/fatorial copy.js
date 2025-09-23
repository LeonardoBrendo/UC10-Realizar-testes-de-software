function fatorial(n) {
  if (n < 0) throw new Error("Número negativo não permitido");
  return n <= 1 ? 1 : n * fatorial(n - 1);
}
module.exports = fatorial;