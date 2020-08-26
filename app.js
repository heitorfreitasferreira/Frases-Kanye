const express = require('express')
const app = express()
const port = 3000
const yeezus = require('yeezus')


const kanye = {
  pt: [
    "2024",
    "Tudo que se ser é sí mesmo",
    "Acredite na sua capacidade de voar... Conquiste a sua timidez.",
    "Queime aquela planilha de excel",
    "Descentralizar",
    "Distração é o inimigo da visão",
    "Tudo que você faz na vida provem ou de medo ou de amor",
    "Para mim, desistir é muito mais difícil do que tentar.",
    "Para mim, dinheiro não é minha definição de sucesso. Inspirar pessoas é uma definição de sucesso",
    "Travesseiros de pelo são dificeis de dormir",
    "George Bush não liga para as pessoas pretas",
    "Você já pensou estar apaixonado por alguem mas ai percebeu que estava na verdade encarando um espelho por 20 minutos?",
    "Eu me importo. Eu me importo com tudo. Às vezes, quando não damos a minima é quando realmente estamos cuidado.",
    "Me sinto calmo porem elétrico",
    "Sinto como se estivesse muito ocupado escrevendo a história para lê-la",
    "Ainda acho que eu e Taylor vamos transar",
    "Toda semana eu falo que nunca mais vou beber",
    "Eu deixo meus emojis na cor do Bart Simpson",
    "Eu amo dormir; é meu favorito",
    "Eu faço ótimas decisões em lojas de bicicletas!!!",
    "Eu realmente amo meu Tesla. Estou no futuro. Obrigado Elon",

    "Ainda acho que sou o maior do mundo",
    "Acho que presto um péssimo serviço a mim mesmo ao me comparar a Steve Jobs, Walt Disney e aos seres humanos que já vimos. Deveria ser mais como Willy Wonka ... E bem-vindo à minha fábrica de chocolate.",

    "Eu quero que o mundo seja melhor! Tudo que eu quero são coisas daora!",
    "Eu queria ter um amigo como eu",
    "Eu gostaria de conhecer o Tim Cook. Tenho algumas ideias",
    "Eu falo coisas sérias como se fossem piadas para que as pessoas possam aprecia-las. A gente ri pra não chorar",
    "Eu sou um gênio criativo",
    "Eu sou bom no ping pong",
    "Eu sou o cara",
    "Se eu não gritar, se eu não falar nada, então ninguem vai falar",
    "Se eu fosse mais tranquilo iria desmaiar",
    "Parem de mentir sobre essa merda. Só parem de mentir",
    "Mantenham quadrados fora dos seus circulos",
    "Mantenha seu nariz fora do céu, mantenha seu coração voltado para Deus e mantenha seu rosto voltado para o nascer do sol.",
    "Sejamos como a água",
    "Cara...O que aconteceu com meu aquário antigo?",
    "Meu pai me deu um drone de natal",
    "Meu maior prêmio é o que estou prestes a fazer.",
    "A maior dor da minha vida é que eu nunca me verei no palco ao vivo",
    "Um dia eu vou me casar com uma atriz porno",
    "Uma das minhas muitas coisas favoritas sobre o que o boné do Trump representa para mim é que as pessoas não podem me dizer o que fazer porque sou negro",
    "Somente pensadores livres",
    "As pessoas sempre dizem que você não pode agradar a todos. Eu acho que isso é uma desculpa. Por que não tentar? Porque pense em todas as pessoas que você agradará se tentar.",
    "As pessoas sempre te dizem pra ser humilde, seja humilde. Quando foi a última vez que alguem te disse para ser foda? Seja foda! Seja foda",
    "As pessoas só ficam com ciumes quando se importam",
    "Talvez eu deveria ter sido mais como água hoje",
    "Subindo na bicicleta de maio",
    "Cale a boca, vou te atirar com um fodendo laser com fodendo olhos de alienígenas e explodir a porra da sua cabeça",
    "As vezes eu aperto o botão de fechar a porta do elevador quando vejo pessoas correndo pra pegar o elevador. Eu só preciso do meu próprio elevador as vezes. Meu santuário",
    "As vezes você tem que se livrar de tudo",
    "O estilo não tem gênero",
    "A polícia do pensamento quer suprimir a liberdade de pensamento",
    "O mundo é nossa família",
    "O mundo é nosso escritório",
    "Hoje é o melhor dia de todos e amanha será ainda melhor",
    "A verdade é meu objetivo. As controvérsia é minha academia. Eu vou fazer cem repetições de controvérsia pra ter um tanquinho de verdade",
    "Tweetar é legal e terapuetico",
    "Todos somos conscientes de si mesmo. Eu só sou o primeiro a admitir",
    "Você não consegue olhar se o copo está meio vazio ou meio cheio se ele estiver transbordando",
    "Eu odeio quando to em um vôo e acordo com uma garradinha de água do meu lado, tipo uau que ótimo agora preciso cuidar dessa garrafinha"
  ],
  en: [
    "2024",
    "All you have to be is yourself",
    "Believe in your flyness...conquer your shyness.",
    "Burn that excel spread sheet",
    "Decentralize",
    "Distraction is the enemy of vision",
    "Everything you do in life stems from either fear or love",
    "For me giving up is way harder than trying.", "For me, money is not my definition of success. Inspiring people is a definition of success",
    "Fur pillows are hard to actually sleep on",
    "George Bush doesn't care about black people",
    "Have you ever thought you were in love with someone but then realized you were just staring in a mirror for 20 minutes?",
    "I care. I care about everything. Sometimes not giving a f#%k is caring the most.",
    "I feel calm but energized",
    "I feel like I'm too busy writing history to read it.",
    "I feel like me and Taylor might still have sex",
    "I give up drinking every week",
    "I leave my emojis bart Simpson color",
    "I love sleep; it's my favorite.",
    "I make awesome decisions in bike stores!!!",
    "I really love my Tesla. I'm in the future. Thank you Elon.",
    "I still think I am the greatest.",
    "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we've seen before. It should be more like Willy Wonka...and welcome to my chocolate factory.",
    "I want the world to be better! All I want is positive! All I want is dopeness!",
    "I wish I had a friend like me",
    "I'd like to meet with Tim Cook. I got some ideas",
    "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.",
    "I'm a creative genius",
    "I'm nice at ping pong",
    "I'm the best",
    "If I don't scream, if I don't say something then no one's going to say anything.",
    "If I got any cooler I would freeze to death",
    "Just stop lying about shit. Just stop lying.",
    "Keep squares out yo circle",
    "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
    "Let's be like water",
    "Man... whatever happened to my antique fish tank?",
    "My dad got me a drone for Christmas",
    "My greatest award is what I'm about to do.",
    "My greatest pain in life is that I will never be able to see myself perform live.",
    "One day I'm gon' marry a porn star",
    "One of my favorite of many things about what the Trump hat represents to me is that people can't tell me what to do because I'm black",
    "Only free thinkers",
    "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? Cause think of all the people that you will please if you try.",
    "People always tell you 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome!",
    "People only get jealous when they care.",
    "Perhaps I should have been more like water today",
    "Pulling up in the may bike",
    "Shut the fuck up I will fucking laser you with alien fucking eyes and explode your fucking head",
    "Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary.",
    "Sometimes you have to get rid of everything",
    "Style is genderless",
    "The thought police want to suppress freedom of thought",
    "The world is our family",
    "The world is our office",
    "Today is the best day ever and tomorrow's going to be even better",
    "Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth",
    "Tweeting is legal and also therapeutic",
    "We all self-conscious. I'm just the first to admit it.",
    "We came into a broken world. And we're the cleanup crew.",
    "Chegamos em um mundo devastado. E somos a equipe de limpeza",
    "You can't look at a glass half full or empty if it's overflowing.",
    "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle",
  ]
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
app.get('/', (req, res) => {
  res.redirect('/pt')
})
app.get('/pt', (req, res) => {
  const i = getRndInteger(1, kanye.pt.length)
  res.send(kanye.pt[i])
})
app.get('/en', (req, res) => {
  const i = getRndInteger(1, kanye.pt.length)
  res.send(kanye.en[i])
})
app.get('/random-album', (req, res) => {
  res.send(yeezus.getAlbumObject().albumName)
})
// console.log(i, "\n", kanye.pt[i], "\n", kanye.en[i]);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})