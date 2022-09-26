//seleciona os
let input = document.querySelector('input');
let btn = document.querySelector('button');

let table = document.getElementById('result');
let avg = document.getElementById('average');
let total = document.getElementById('total');
let sale = document.getElementById('sale');

const idades = [];
const descontos = [];
const valor = 30;

var desconto = 0;
var soma = 0;
var final = 0;

function addValor(){

  let idade = Number(input.value);
  idades.push(idade);

    for(let i = 0; i < idades.length; i++){

      if(idades[i] < 18){
          desconto = valor - (valor * 0.5);
          descontos.push(desconto)
      }
      if (idades[i] >= 18){
        desconto = valor - (valor * 0.1);
        descontos.push(desconto);
      }
      final += descontos[i] / idades.length;
      

       soma = idades.reduce((a,b) => a + b, 0);
    }
         
    let template = `
                        <td>${idade}</td>
                        <td>${valor}</td>
                        <td>${desconto}</td>
    `;

    //renderiza o template de tbody N vezes
    table.innerHTML += template;
    //calcula e renderiza o valor total sem desconto
    total.innerHTML = idades.length * valor;
    //renderiza a média das idades apresentadas
    avg.innerHTML =  soma / idades.length;
    //calcula e renderiza o valor real arrecadado
    sale.innerHTML = final;
};
