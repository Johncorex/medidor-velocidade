// velocidade maxima de até 70 km
// a cada 5 km a cima do limite voce ganha 1 ponto
// Math.floor ()
// Se os pontos forem maiores que 12 "Carteira Suspensa"

verificarVelocidade(87);

function verificarVelocidade(velocidade) {
    if (velocidade <= 70)
        console.log('Permitido')
    else {
        const pontos = Math.floor((velocidade - 70) / 5);
        if (pontos >= 12)
           console.log('Carteira Suspensa');
        else
           console.log('Pontos',pontos);
    }
}