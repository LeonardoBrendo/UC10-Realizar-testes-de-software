function mediaPonderada(valores, pesos) {
  if (valores.length !== pesos.length) throw new Error("Tamanhos diferentes");
  const soma = valores.reduce((acc, v, i) => acc + v * pesos[i], 0);
  const somaPesos = pesos.reduce((a, b) => a + b, 0);
  return somaPesos === 0 ? 0 : soma / somaPesos;
}
module.exports = mediaPonderada;