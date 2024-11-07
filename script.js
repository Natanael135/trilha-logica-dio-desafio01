function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

function calcularParaJogadores() {
  let continuar = true;

  while (continuar) {
    let vitorias = parseInt(prompt('Digite o número de vitórias do jogador: '));
    let derrotas = parseInt(prompt('Digite o número de derrotas do jogador: '));
    console.log(calcularNivel(vitorias, derrotas));
    continuar = confirm('Deseja calcular o nível de outro jogador?');
  }
}

calcularParaJogadores();
