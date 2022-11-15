var randomWord = ''
var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')
const usr_input = document.getElementById('submit').value

function generate () {
  //Limpiamos el input y el cambas cuando se genera una nueva palabra
  document.getElementById('submit').value = ''
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  //Propiedades para la palabra a generar
  ctx.font = '30px Gloria Hallelujah'
  ctx.fillStyle = 'blue'
  ctx.textAlign = 'center'

  //Constante para generar la palabra con las letras y signos del string
  const randomChar =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|<>?'

  //Generamos una palabra de 5 letras a partir del string dato
  for (let i = 1; i < 5; i++) {
    randomWord += randomChar.charAt(Math.random() * randomChar.length)
  }

  //Utilizamos el metodo 'fillText' para generar la palabra en el canvas
  ctx.fillText(randomWord, canvas.width / 2, canvas.height / 2)
}

//llamamos a la funcion que genera la palabra
generate()

function printmsg () {
  if (usr_input == randomWord) {
    document.getElementById('key').innerHTML = 'Correcto'
    generate()
  } else {
    document.getElementById('key').innerHTML =
      'La entrada no corresponde con el captcha'
    generate()
  }
}
