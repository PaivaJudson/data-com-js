const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = data.toISOString();


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 1:
            diaSemanaTexto = 'Domingo';
            break;
        case 2:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 3:
            diaSemanaTexto = 'Terça-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 7:
            diaSemanaTexto = 'Sábado';
            break;
    }
    return diaSemanaTexto;
}