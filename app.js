const txtAnim= document.querySelector('h5');
new Typewriter(txtAnim, {
    deleteSpeed: 150,
    delay: 300
})
    .typeString('Heureux <span>Anniversaire</span> !')
    .deleteChars(22)
    .pauseFor(1000)
    .typeString('Paul kaf 84')
    .deleteChars(11)
    .pauseFor(1000)
    .typeString('Provite bien de ta journée')
    .start()