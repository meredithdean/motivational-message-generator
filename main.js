const pokemon = ['BULBASAUR! ', 'CHARMANDER! ', 'SQUIRTLE! ', 'BUTTERFREE! ', 'PIDGEOTTO! ', 'PIKACHU! ', 'MUK! ', 'TAUROS! ', 'LAPRAS! ', 'SNORLAX! ']
const voices = ['!! ', '?! ', '..... ', 'UH-OH. ', 'AHAHAHA.', 'WROOOOAAR! ', 'MUFUFU. ', 'GWAH. ', 'OOPS. ', 'SIGH. ']
const moves = ['MEAN LOOK!', 'SWAGGER!', 'ENDURE!', 'SKETCH!', 'LICK!', 'HAZE!', 'DIG!', 'SING!', 'HEADBUTT!', 'DOUBLESLAP!']

let randomVoices = Math.floor(Math.random() * (voices.length));
let randomMoves = Math.floor(Math.random() * (moves.length));

function newChat() {
    const randomPokemonIdx = Math.floor(Math.random() * (pokemon.length));
    const randomVoicesIdx = Math.floor(Math.random() * (voices.length));
    const randomMovesIdx = Math.floor(Math.random() * (moves.length));

    const randomPokemon = pokemon[randomPokemonIdx]
    const randomVoices = voices[randomVoicesIdx]
    const randomMoves = moves[randomMovesIdx]

    const newChatMessage = `${randomPokemon} ${randomVoices} ${randomMoves}`
    document.getElementById('quoteDisplay').innerHTML = newChatMessage;
}




