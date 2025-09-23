function imc(peso, altura) {
  if (altura <= 0) throw new Error("Altura inválida");
  return +(peso / (altura * altura)).toFixed(2);
}
module.exports = imc;