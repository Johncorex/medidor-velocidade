// velocidade maxima de até 70 km
// a cada 5 km a cima do limite voce ganha 1 ponto
// Math.floor ()
// Se os pontos forem maiores que 12 "Carteira Suspensa"

verificarVelocidade(95);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmporPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Permitido')
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmporPonto);
        if (pontos >= 12)
           console.log('Carteira Suspensa');
        else
           console.log('Pontos',pontos);
    }
}