var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')
ctx.font = '30px Gloria Hallelujah'
ctx.fillStyle = 'blue'
ctx.textAlign = 'center'

var uniquechar = ''

function generate () {
  document.getElementById('submit').value = ''
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const randomchar =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|":'

  for (let i = 1; i < 5; i++) {
    uniquechar += randomchar.charAt(Math.random() * randomchar.length)
  }
  ctx.fillText(uniquechar, canvas.width / 2, canvas.height / 2)

  console.log(uniquechar)
}

generate()

function printmsg () {
  const usr_input = document.getElementById('submit').value

  // Check whether the input is equal
  // to generated captcha or not
  if (usr_input == uniquechar) {
    document.getElementById('key').innerHTML = 'Correcto'
    generate()
  } else {
    document.getElementById('key').innerHTML = 'La entrada no coincide'
    generate()
  }
}
