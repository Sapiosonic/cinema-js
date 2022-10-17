let total = document.getElementById('total');
let avg = document.getElementById('average');
let sale = document.getElementById('sale');
let table = document.getElementById('result');

let desconto = 0;
let soma = 0;
let final = 0;
let idade = 0;
let media = 0;

const idades = [];
const descontos = [];
const valor = 30;

function display(){
    addIdade();
    calcular();
    template();
    descontar();
}

function addIdade(){
    let input = document.getElementById('input');
    idade = Number(input.value);
    idades.push(idade);
    console.log(idades);
}

function calcular(){
    for(let i = 0; i < idades.length; i++){

        if(idades[i] < 18){
            desconto = valor - (valor * 0.5);
            descontos[i] = desconto;
            console.log(descontos);
        }
        else if(idades[i] >= 18) desconto = valor - (valor * 0.1);
        descontos[i] = desconto;
        console.log(descontos);
        descontar();

        soma = idades.reduce((a,b) => a + b, 0);
        console.log(soma);
    }
}

function descontar(){
    final = descontos.reduce((a,b) => a + b, 0);
    console.log(descontos)
}

function template(){
    let template = `
                    <tr>
                        <td>${idade}</td>
                        <td>${valor}</td>
                        <td>${desconto}</td>
                    </tr>
    `;

    media = soma / idades.length;
    avg.innerHTML = media.toFixed(1);

    //renderiza o template de tbody N vezes
    table.innerHTML += template;
    //calcula e renderiza o valor real arrecadado
    sale.innerHTML = final;
    //calcula e renderiza o valor total sem desconto
    total.innerHTML = idades.length * valor;
}
 
