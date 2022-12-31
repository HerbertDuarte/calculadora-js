const calc = (value) =>{
  let res = document.getElementById('res')
  res.innerHTML = value
}

const armazenar = (caixa)=>{
  var vetor = []
  vetor.push(Number(caixa.innerHTML))
  return vetor
}


let plus = document.getElementById('b+')

function cal(element=0){
  let res = document.getElementById('res')
  let caixa = Number(armazenar(res))
  element = Number(element)+ caixa
  console.log(element)
}

const somar = (a=0, b=0) => a+b
const sub = (a, b) => a-b

let numero1 = Number(document.querySelector('#b1'))
let numero2 = Number(document.querySelector('#b2'))
let numero3 = Number(document.querySelector('#b3'))
let numero4 = Number(document.querySelector('#b4'))
let numero5 = Number(document.querySelector('#b5'))
let numero6 = Number(document.querySelector('#b6'))
let numero7 = Number(document.querySelector('#b7'))
let numero8 = Number(document.querySelector('#b8'))
let numero9 = Number(document.querySelector('#b9'))
let numero0 = Number(document.querySelector('#b0'))

var b = document.querySelectorAll('.numbers')
for(let i =0; i< b.length ; i++){

  let res = document.getElementById('res')

  b[i].addEventListener('click', ()=>{
    res.innerHTML += (b[i].innerHTML)
  })

}
