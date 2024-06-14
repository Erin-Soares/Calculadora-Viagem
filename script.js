function calcular() {
    // Obter os valores do formulário
    const distancia = parseFloat(document.getElementById('distancia').value);
    const precoPorLitro = parseFloat(document.getElementById('precoPorLitro').value);
    const consumoMedio = parseFloat(document.getElementById('consumoMedio').value);
    const idaVolta = document.getElementById('idaVolta').checked;
    const meses = parseInt(document.getElementById('meses').value);

    // Calcular a distância total
    const distanciaTotal = idaVolta ? distancia * 2 : distancia;

    // Calcular o consumo total de combustível
    const consumoTotal = distanciaTotal / consumoMedio;

    // Calcular o custo total do combustível
    const custoTotal = consumoTotal * precoPorLitro;

    // Calcular consumo semanal, mensal e anual
    const consumoSemanal = consumoTotal * 7; // Assumindo viagem diária
    const consumoMensal = consumoSemanal * 4; // Aproximadamente 4 semanas em um mês
    const consumoTotalMeses = consumoMensal * meses;
    const consumoAnual = consumoMensal * 12;

    // Calcular custo semanal, mensal e anual
    const custoSemanal = consumoSemanal * precoPorLitro;
    const custoMensal = consumoMensal * precoPorLitro;
    const custoTotalMeses = consumoTotalMeses * precoPorLitro;
    const custoAnual = consumoAnual * precoPorLitro;

    // Exibir o resultado
    const resultado = `Distância Total: ${distanciaTotal.toFixed(2)} km<br>
                       Consumo Total de Combustível: ${consumoTotal.toFixed(2)} litros<br>
                       Custo Total: R$ ${custoTotal.toFixed(2)}<br><br>
                       Consumo Semanal: ${consumoSemanal.toFixed(2)} litros<br>
                       Consumo Mensal: ${consumoMensal.toFixed(2)} litros<br>
                       Consumo Total para ${meses} meses: ${consumoTotalMeses.toFixed(2)} litros<br>
                       Consumo Anual: ${consumoAnual.toFixed(2)} litros<br><br>
                       Custo Semanal: R$ ${custoSemanal.toFixed(2)}<br>
                       Custo Mensal: R$ ${custoMensal.toFixed(2)}<br>
                       Custo Total para ${meses} meses: R$ ${custoTotalMeses.toFixed(2)}<br>
                       Custo Anual: R$ ${custoAnual.toFixed(2)}`;

    document.getElementById('resultado').innerHTML = resultado;
}

