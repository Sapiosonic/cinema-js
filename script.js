let input = document.querySelector('input');
let btn = document.querySelector('button');

let table = document.getElementById('result');
let avg = document.getElementById('average');
let total = document.getElementById('total');
let sale = document.getElementById('sale');
const idades = [];
const valor = 30;
var desconto = 0;
var soma = 0;

function addValor(){
    let idade = Number(input.value);
    idades.push(idade);

    for(let i = 0; i < idades.length; i++){

    
        
        if(idades[i] < 18){
            desconto = valor - (valor * 0.5);
        }
        if (idades[i] >= 18){
            desconto = valor - (valor * 0.1);
        }
        soma += idades[i];
    }

    let template = `    
                    <tr>
                        <td>${idade}</td>
                        <td>${valor}</td>
                        <td>${desconto}</td>
                    </tr>                        
    `;
    table.innerHTML += template;
    total.innerHTML = idades.length * valor;
    avg.innerHTML = soma / idades.length;

};


