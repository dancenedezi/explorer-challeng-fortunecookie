const screenOne = document.querySelector('.screen-one')
const screenTwo = document.querySelector('.screen-two')
const fortuneCookie = screenOne.querySelector('img')
const tryButton = screenTwo.querySelector('button')
let phrases = [
  'A vida trará coisas boas se tiver paciência.',
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
 'Não compense na ira o que lhe falta na razão.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
   'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  ]
let sort = Math.floor(Math.random() * phrases.length)
let fortunePhrase = phrases[sort]





fortuneCookie.addEventListener('click', openCookie)
tryButton.addEventListener('click', tryAgain)

function openCookie() {
  screenTwo.querySelector('span').innerText = `${fortunePhrase}`
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

function tryAgain () {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
  sort = Math.floor(Math.random() * phrases.length)
  fortunePhrase = phrases[sort]
}