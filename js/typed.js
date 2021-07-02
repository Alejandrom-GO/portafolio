const typed = new Typed('.typed', {
    // strings: [
    //     '<i class="item-typed">Developer</i>',
    //     '<i class="item-typed">Desinger</i>',
    //     '<i class="item-typed">Tester</i>'
    // ],
    stringsElement: '#cadenas-typed',
    typeSpeed: 75, // Velocidad en milisegundos para colocar cada letra
    starDelay: 300, // Tiempo de retraso en iniciar la animacion
    backSpeed: 75, // Velocidad para borrar la letra
    smartBackspace: true,
    backDelay: 1500, // Tiempo de espera despues de terminar de escribir la palabra
    loop: true, // Repetir el array de palabra
    loopCount: false, // Cantidad de veces a repetir el array  false = infinite
    showCursor: true, //Mostrar cursor palpitando
    contentType: 'html'
});