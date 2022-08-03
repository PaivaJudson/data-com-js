const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = criarData(data);


function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    return diasSemana[diaSemana];
}

function getNomeMes(numero) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numero];
}

function criarData(data) {

    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDiaSemana = getDiaSemanaTexto(diaSemana);
    const nomeDoMes = getNomeMes(numeroMes);


    return (`${nomeDiaSemana}, ${data.getDate()} de ${nomeDoMes} de ${data.getFullYear()}` +
        ` ${data.getHours()}:${data.getMinutes()}`);
}


/*
const h1 = document.querySelector(".container h1");
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

*/


/*

const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = criarData(data);


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


function getNomeMes(mes) {
    let nomeMes;

    switch (mes) {
        case 1:
            nomeMes = 'Janeiro';
            break;
        case 2:
            nomeMes = 'Fevereiro';
            break;
        case 3:
            nomeMes = 'Março';
            break;
        case 4:
            nomeMes = 'Abril';
            break;
        case 5:
            nomeMes = 'Maio';
            break;
        case 6:
            nomeMes = 'Junho';
            break;
        case 7:
            nomeMes = 'Julho';
            break;
        case 8:
            nomeMes = 'Agosto';
            break;
        case 9:
            nomeMes = 'Setembro';
            break;
        case 10:
            nomeMes = 'Outubro';
            break;
        case 11:
            nomeMes = 'Novembro';
            break;
        case 12:
            nomeMes = 'Dezembro';
            break;
    }
    return nomeMes;
}

function criarData(data) {

    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDiaSemana = getDiaSemanaTexto(diaSemana);
    const nomeDoMes = getNomeMes(numeroMes + 1);


    return (`${nomeDiaSemana}, ${data.getDate()} de ${nomeDoMes} de ${data.getFullYear()}` +
        ` ${data.getHours()}:${data.getMinutes()}`);
}

*/