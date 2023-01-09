var res = document.getElementById('res')

function insert(value){
  res.innerText += value
}
function clean(){
  res.innerText = ''
}
function backspace(){
  res.innerText = res.innerText.substring(0, res.innerText.length-1)
}
function calc(){
  resultado = res.innerText

  if(resultado){
    document.getElementById('res').innerText = eval(resultado)
  }else{
    alert('erro')
  }
}