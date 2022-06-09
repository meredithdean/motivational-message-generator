const pokemo = ['BULBASAUR! ', 'CHARMANDER! ', 'SQUIRTLE! ', 'BUTTERFREE! ', 'PIDGEOTTO! ', 'PIKACHU! ', 'MUK! ', 'TAUROS! ', 'LAPRAS! ', 'SNORLAX! ']
const voices = ['!! ', '?! ', '..... ', 'UH-OH. ', 'AHAHAHA.', 'WROOOOAAR! ', 'MUFUFU. ', 'GWAH. ', 'OOPS. ', 'SIGH. ']
const moves = ['MEAN LOOK!', 'SWAGGER!', 'ENDURE!', 'SKETCH!', 'LICK!', 'HAZE!', 'DIG!', 'SING!', 'HEADBUTT!', 'DOUBLESLAP!']


function newChat() {
    const randomPokemo = pokemo[Math.floor(Math.random() * (pokemo.length))];
    const randomVoices= voices[Math.floor(Math.random() * (voices.length))];
    const randomMoves = moves [Math.floor(Math.random() * (moves.length))];
    
    const newChatMessage = `${randomPokemon} ${randomVoices} ${randomMoves}`
    document.getElementById('quoteDisplay').innerHTML = newChatMessage;
}