let input = document.querySelector('input');
let btn = document.querySelector('button');

let table = document.getElementById('result');
let avg = document.getElementById('average');
let total = document.getElementById('total');
let sale = document.getElementById('sale');

btn.addEventListener('click', () => {
  const ages = [];
  let clients_age = Number(input.value)
  ages.push(clients_age);
  let average = 0;
  let discount = 0;

  for(let i = 0; i < ages.length; i++){
    average = ages[i] / ages.length;
    if(average < 18){
      discount = 30 * 0.5;
    }
    else{
      discount = 30 * 0.1;
    }
  }

  let template = `
     <td>${ages}</td>
     <td>R$ 30.00</td>
     <td>R$ ${discount}</td>
  `
  table.innerHTML += template;
});
