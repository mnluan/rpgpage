var $dado = $('.dado'),
    lados = 20,
    lado_inicial = 1,
    ult_lado,
    timeoutId,
    transitionDuration = 500, 
    animationDuration  = 3000

$('ul > li > a').click(function () {
  reset()
  rollTo($(this).attr('href'))
  
  return false
})

function randomFace() {
  var face = Math.floor((Math.random() * lados)) + lado_inicial
  ult_lado = face == ult_lado ? randomFace() : face
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId)
  
  $('ul > li > a').removeClass('active')
  $('[href=' + face + ']').addClass('active')
  
  $dado
.attr('data-face', face)
}

function reset() {
  $dado
.attr('data-face', null).removeClass('rolling')
}

$('.randomize, .dado').click(function () {
  $dado
.addClass('rolling')
  clearTimeout(timeoutId)
  
  timeoutId = setTimeout(function () {
    $dado
  .removeClass('rolling')
    
    rollTo(randomFace())
  }, animationDuration)
  
  return false
})