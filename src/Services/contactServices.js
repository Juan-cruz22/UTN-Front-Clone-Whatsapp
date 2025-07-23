const contacts = [
    {
    id: 1,
    name: 'Marge',
    description: 'Hmmm...',
    avatar: '/Images/Marge.jpg',
    lastConnection: '20:13',
    connectionStatus: 'online',
    messages: [
        { emisor: 'OTRO', hora: '18:02', id: 1, texto: 'Homero... huele raro la cocina. ¿Qué estás haciendo en el sótano?', status: 'visto' },
        { emisor: 'YO', hora: '18:03', id: 2, texto: 'Nada, sólo… ciencia. Sí, ciencia… burbujeante.', status: 'visto' },
        { emisor: 'OTRO', hora: '18:04', id: 3, texto: '¿Es por lo de la prohibición? ¿Estás fabricando cerveza ilegal?', status: 'visto' },
        { emisor: 'YO', hora: '18:05', id: 4, texto: '¡No! Estoy... produciendo alegría líquida artesanal.', status: 'visto' },
        { emisor: 'OTRO', hora: '18:06', id: 5, texto: 'Homero, encontré botellas en la bañera. Y en la cuna de Maggie.', status: 'visto' },
        { emisor: 'YO', hora: '18:07', id: 6, texto: '¡Es que el sótano se me llenó! ¿Querés que lo meta en el horno?', status: 'visto' },
        { emisor: 'OTRO', hora: '18:08', id: 7, texto: '¡No quiero que metas cerveza en ningún lado! Quiero que pares esto ahora mismo.', status: 'visto' },
        { emisor: 'YO', hora: '18:09', id: 8, texto: 'Marge, estoy haciendo historia. ¡Soy el Barón de la Cerveza!', status: 'visto' },
        { emisor: 'OTRO', hora: '18:10', id: 9, texto: '¡Eres un criminal con olor a cebada!', status: 'visto' },
        { emisor: 'YO', hora: '18:11', id: 10, texto: 'Criminal... tal vez. ¿Pero héroe? Definitivamente también.', status: 'visto' },
        { emisor: 'OTRO', hora: '18:12', id: 11, texto: 'Ya hablé con Moe. Dice que estás distribuyendo en barriles con tu cara dibujada.', status: 'visto' },
        { emisor: 'YO', hora: '18:13', id: 12, texto: '¡Es marketing, Marge! Hasta el abuelo me pidió dos botellas para el reuma.', status: 'visto' },
        { emisor: 'OTRO', hora: '18:14', id: 13, texto: 'Homero, si no parás, voy a llamar al Jefe Gorgory.', status: 'visto' },
        { emisor: 'YO', hora: '18:15', id: 14, texto: '¡A ese ni le gusta la cerveza! ¡Le gusta el jarabe para la tos!', status: 'visto' },
        { emisor: 'OTRO', hora: '18:16', id: 15, texto: 'Esto se va a salir de control... como cuando quisiste criar langostas en la bañera.', status: 'visto' },
        { emisor: 'YO', hora: '18:17', id: 16, texto: 'Y fue nuestra cena de aniversario!', status: 'visto' }
    ]
},
    {
    id: 2,
    name: 'Lisa',
    description: 'Si alguien me necesita, estaré en mi habitación.',
    avatar: '/Images/Lisa.png',
    lastConnection: '20:00',
    connectionStatus: 'offline',
    messages: [
        { emisor: 'OTRO', hora: '13:04', id: 1, texto: 'Papá... ¿por qué compraste 30 hamburguesas?', status: 'visto' },
        { emisor: 'YO', hora: '13:05', id: 2, texto: '¡Porque estaban en oferta! 3x10. Si comprás 30, ¡es como que te regalan una vaca!', status: 'visto' },
        { emisor: 'OTRO', hora: '13:06', id: 3, texto: '¡No como carne, Homero! ¡Soy vegetariana desde hace meses!', status: 'visto' },
        { emisor: 'YO', hora: '13:07', id: 4, texto: 'Entonces... ¿no querés tu hamburguesa con tocino doble?', status: 'visto' },
        { emisor: 'OTRO', hora: '13:07', id: 5, texto: '¡Papá! ¡El tocino ES carne!', status: 'visto' },
        { emisor: 'YO', hora: '13:08', id: 6, texto: '¿Y el chorizo también? ¡¿Qué está pasando acá?!', status: 'visto' },
        { emisor: 'OTRO', hora: '13:08', id: 7, texto: 'No puedo seguir conviviendo con tanta ignorancia alimentaria.', status: 'visto' },
        { emisor: 'YO', hora: '13:09', id: 8, texto: 'Bueno, entonces te preparo una ensalada... de jamón.', status: 'visto' },
        { emisor: 'OTRO', hora: '13:10', id: 9, texto: '¡JAMÓN TAMBIÉN ES CARNE, PAPÁ!', status: 'visto' },
        { emisor: 'YO', hora: '13:11', id: 10, texto: '¡Ya no entiendo nada! ¿Y el salame? ¿Es fruta, entonces?', status: 'visto' },
        { emisor: 'OTRO', hora: '13:12', id: 11, texto: 'Papá, matan animales para eso. ¿No te importa?', status: 'visto' },
        { emisor: 'YO', hora: '13:12', id: 12, texto: '¡Claro que me importa! Por eso me los como rápido, así no sufren.', status: 'visto' },
        { emisor: 'OTRO', hora: '13:13', id: 13, texto: 'Eso no tiene ningún sentido.', status: 'visto' },
        { emisor: 'YO', hora: '13:14', id: 14, texto: 'Bueno... te guardé una mazorca. Pero se cayó en grasa. Y tocó un chorizo.', status: 'visto' },
        { emisor: 'OTRO', hora: '13:15', id: 15, texto: 'Voy a comer en la habitación. Y voy a leer a Gandhi.', status: 'visto' },
        { emisor: 'YO', hora: '13:16', id: 16, texto: '¿Gandhi no comia hamburguesas?', status: 'visto' }
    ]
},
{
    id: 3,
    name: 'Bart',
    description: '¡Cómete mis calzoncillos!',
    avatar: '/Images/Bart.png',
    lastConnection: 'ahora',
    connectionStatus: 'online',
    messages: [
        { emisor: 'YO', hora: '16:01', id: 1, texto: 'Bart, me llamó la mamá de Milhouse... ¿es verdad que le vendiste tu alma?', status: 'visto' },
        { emisor: 'OTRO', hora: '16:01', id: 2, texto: 'Sí, por cinco dólares. Negocio redondo.', status: 'visto' },
        { emisor: 'YO', hora: '16:02', id: 3, texto: '¿¡Qué clase de monstruo hace eso!?', status: 'visto' },
        { emisor: 'OTRO', hora: '16:02', id: 4, texto: 'Uno que ahora tiene cinco dólares.', status: 'visto' },
        { emisor: 'YO', hora: '16:03', id: 5, texto: '¡La gente necesita su alma! Yo la uso para… no sé… gritarle a la tele.', status: 'visto' },
        { emisor: 'OTRO', hora: '16:04', id: 6, texto: 'Entonces préstame la tuya un rato, así me quejo con más ganas.', status: 'visto' },
        { emisor: 'YO', hora: '16:05', id: 7, texto: '¡No se juega con eso, Bart! ¿Y si no podés entrar al cielo?', status: 'visto' },
        { emisor: 'OTRO', hora: '16:05', id: 8, texto: 'No te preocupes, no planeaba ir.', status: 'visto' },
        { emisor: 'YO', hora: '16:06', id: 9, texto: '¡Te vas a arrepentir! Un alma vale más que una porción de pizza.', status: 'visto' },
        { emisor: 'OTRO', hora: '16:07', id: 10, texto: '¿Y si la pizza tiene pepperoni extra?', status: 'visto' },
        { emisor: 'YO', hora: '16:08', id: 11, texto: '¡No es chistoso! Esta noche vas a dormir con el alma de Milhouse.', status: 'visto' },
        { emisor: 'OTRO', hora: '16:08', id: 12, texto: 'No gracias, ronca como tu después de 3 cervezas.', status: 'visto' },
        { emisor: 'YO', hora: '16:09', id: 13, texto: '¡Ya mismo vas y le decís que fue una broma!', status: 'visto' },
        { emisor: 'OTRO', hora: '16:10', id: 14, texto: 'Demasiado tarde. La vendió por partes a Nelson y Ralph.', status: 'visto' },
        { emisor: 'YO', hora: '16:11', id: 15, texto: 'Pequeño demonio', status: 'visto' }
    ]
},
{
    id: 4,
    name: 'Sr. Burns',
    description: 'Excelente',
    avatar: '/Images/Burns.jpg',
    lastConnection: '08:43',
    connectionStatus: 'offline',
    messages: [
        { emisor: 'OTRO', hora: '08:00', id: 1, texto: 'Simpson, ¿dónde demonios está? Son las ocho y cinco.', status: 'visto' },
        { emisor: 'YO', hora: '08:01', id: 2, texto: 'Estoy en la cama. Hoy es sábado de flojera, señor.', status: 'visto' },
        { emisor: 'OTRO', hora: '08:01', id: 3, texto: '¡Hoy es viernes, imbécil! ¡Un día laboral!', status: 'visto' },
        { emisor: 'YO', hora: '08:02', id: 4, texto: '¿Está seguro? Porque tengo puesto mi pijama de desayuno y mi gorro de dormir.', status: 'visto' },
        { emisor: 'OTRO', hora: '08:03', id: 5, texto: '¡Claro que estoy seguro! ¡Usted es el supervisor del sector 7G!', status: 'visto' },
        { emisor: 'YO', hora: '08:04', id: 6, texto: '¿Eso sigue existiendo? Pensé que lo habían reemplazado por un robot japonés.', status: 'visto' },
        { emisor: 'OTRO', hora: '08:04', id: 7, texto: '¡El único robot aquí es Smithers, y él está trabajando como corresponde!', status: 'visto' },
        { emisor: 'YO', hora: '08:05', id: 8, texto: '¡Ah, entonces que lo cuide él por hoy! Yo estoy cuidando mi salud mental.', status: 'visto' },
        { emisor: 'OTRO', hora: '08:06', id: 9, texto: '¡Su salud mental me importa lo mismo que una cucaracha en una válvula de presión!', status: 'visto' },
        { emisor: 'YO', hora: '08:06', id: 10, texto: '¡Mmm... cucarachas! ¿Eso viene con salsa?', status: 'visto' },
        { emisor: 'OTRO', hora: '08:07', id: 11, texto: '¡Simpson, esto es inadmisible! Está oficialmente en observación disciplinaria.', status: 'visto' },
        { emisor: 'YO', hora: '08:08', id: 12, texto: '¿Eso significa que puedo quedarme en casa hoy también?', status: 'visto' },
        { emisor: 'OTRO', hora: '08:09', id: 13, texto: '¡Significa que está a un paso del despido, holgazán sin remedio!', status: 'visto' },
        { emisor: 'YO', hora: '08:10', id: 14, texto: 'Perfecto, entonces nos vemos el lunes... si me acuerdo.', status: 'visto' },
        { emisor: 'OTRO', hora: '08:11', id: 15, texto:'Estas muerto, Simpson', status: 'visto' }
    ]
},
{
    id: 6,
    name: 'Barney',
    description: 'Necesito un trago',
    avatar: '/Images/barney.jpg',
    lastConnection: 'ayer',
    connectionStatus: 'offline',
    messages: [
        { emisor: 'YO', hora: '09:02', id: 1, texto: 'Barney... ¿dónde está mi auto?' , status: 'visto' },
        { emisor: 'OTRO', hora: '09:04', id: 2, texto: '¿Auto? Oh, rayos... pensé que era un sueño...' , status: 'visto' },
        { emisor: 'YO', hora: '09:05', id: 3, texto: '¡Me lo dejaste en Nueva York, inútil! ¡Nueva York!' , status: 'visto' },
        { emisor: 'OTRO', hora: '09:05', id: 4, texto: '¿Estás seguro? Porque también podría estar en... Filadelfia. Vi una campana enorme.' , status: 'visto' },
        { emisor: 'YO', hora: '09:06', id: 5, texto: '¡Era la Estatua de la Libertad, borracho!' , status: 'visto' },
        { emisor: 'OTRO', hora: '09:07', id: 6, texto: '¡Ohhh! Entonces sí fue Nueva York. Qué noche, Homero... conocí a un saxofonista que decía ser tu primo.' , status: 'visto' },
        { emisor: 'YO', hora: '09:08', id: 7, texto: '¿Y cómo volviste a casa, eh? ¿Cómo?' , status: 'visto' },
        { emisor: 'OTRO', hora: '09:08', id: 8, texto: 'Me desperté en un camión de cebollas. Fue... emotivo.' , status: 'visto' },
        { emisor: 'YO', hora: '09:09', id: 9, texto: 'Estoy atrapado entre dos torres con una bota de la policía puesta en la rueda.' , status: 'visto' },
        { emisor: 'OTRO', hora: '09:10', id: 10, texto: 'Oh, sí. El oficial dijo que estaba mal estacionado... o que yo estaba mal parado. No recuerdo bien.' , status: 'visto' },
        { emisor: 'YO', hora: '09:11', id: 11, texto: '¡Estaba perfectamente estacionado! ¡Tenía tres candados encima, eso lo hace más seguro!' , status: 'visto' },
        { emisor: 'OTRO', hora: '09:12', id: 12, texto: 'Podría volver por él... si me das la dirección exacta.' , status: 'visto' },
        { emisor: 'YO', hora: '09:13', id: 13, texto: 'Está entre el World Trade Center, con un grano gigante.' , status: 'visto' },
        { emisor: 'OTRO', hora: '09:14', id: 14, texto: 'Entonces paso. Pero te puedo conseguir un cupón para una pizza en Nueva Jersey.' , status: 'visto' },
        { emisor: 'YO', hora: '09:15', id: 15, texto: 'Ahora deberé ir por mis niños a la escuela en monopatín. Borracho infeliz.' , status: 'visto' }
    ]
},
{
    id: 7,
    name: 'Estupido',
    description: 'Difundir con valentía la buena palabra',
    avatar: '/Images/Ned.png',
    lastConnection: 'ayer',
    connectionStatus: 'online',
    messages: [
        { emisor: 'YO', hora: '22:00', id: 1, texto: 'Ey estúpido y sensual Flanders, ¿te acordás de anoche en Vegas?' },
        { emisor: 'OTRO', hora: '22:01', id: 2, texto: '¡Homero! Por favor, no me digas así... pero sí, qué noche tan loca.' },
        { emisor: 'YO', hora: '22:02', id: 3, texto: '¿Cómo terminamos casados con esas mujersuelas?' },
        { emisor: 'OTRO', hora: '22:03', id: 4, texto: 'No me acuerdo mucho, pero la cerveza debe tener la culpa.' },
        { emisor: 'YO', hora: '22:04', id: 5, texto: 'Esa rubia gritaba como loca y vos estabas más borracho que yo.' },
        { emisor: 'OTRO', hora: '22:05', id: 6, texto: '¡Hey! Sólo acepté porque dijiste que era una misión divina.' },
        { emisor: 'YO', hora: '22:06', id: 7, texto: 'Claro, tu misión era emborracharte y casarte con cualquiera, ¿verdad?' },
        { emisor: 'OTRO', hora: '22:07', id: 8, texto: '¿Y qué hiciste vos? ¿Perdiste el anillo o lo regalaste?' },
        { emisor: 'YO', hora: '22:08', id: 9, texto: '¡Lo regalé a un tipo que prometía hacerme rico!' },
        { emisor: 'OTRO', hora: '22:09', id: 10, texto: 'Homero, somos un par de idiotas, pero no me arrepiento de nada.' },
        { emisor: 'YO', hora: '22:10', id: 11, texto: 'Yo sí, porque mañana tengo que fingir que vivo una vida normal.' },
        { emisor: 'OTRO', hora: '22:11', id: 12, texto: 'Jaja, estúpido y sensual Flanders, siempre con tus frases.' },
        { emisor: 'YO', hora: '22:12', id: 13, texto: '¿Te acordás cuando bailamos encima de la mesa y casi nos expulsan?' },
        { emisor: 'OTRO', hora: '22:13', id: 14, texto: 'Sí, y vos casi te caés en la fuente de los deseos.' },
        { emisor: 'YO', hora: '22:14', id: 15, texto: 'Eso fue el momento cumbre de la noche, junto a las bodas locas.' },
        { emisor: 'OTRO', hora: '22:15', id: 16, texto: '¿Y qué hacemos ahora con estas esposas?' },
        { emisor: 'YO', hora: '22:16', id: 17, texto: 'Les digo que nos casamos en una noche loca, y que ellas también se larguen.' },
        { emisor: 'OTRO', hora: '22:17', id: 18, texto: 'Perfecto, así podemos volver a ser amigos borrachos normales.' },
        { emisor: 'YO', hora: '22:18', id: 19, texto: 'Estúpido y sensual Flanders' },
    ]
},
{
    id: 8,
    name: '+1 212 555-1234',
    description: 'Me duelen las rodillas',
    avatar: '/Images/abuelosimpsons.png',
    lastConnection: 'hace 1 hora',
    connectionStatus: 'offline',
    messages: [
        { emisor: 'OTRO', hora: '08:00', id: 1, texto: 'Homero, el asilo huele peor que la planta nuclear un lunes.' },
        { emisor: 'OTRO', hora: '08:05', id: 2, texto: 'Me robaron la dentadura... otra vez.' },
        { emisor: 'OTRO', hora: '08:10', id: 3, texto: 'Anoche soñé que luchaba contra un oso con una cuchara oxidada.' },
        { emisor: 'OTRO', hora: '08:15', id: 4, texto: '¿Sabías que mi bastón tiene más aventuras que yo?' },
        { emisor: 'OTRO', hora: '08:20', id: 5, texto: 'Esta mañana me confundí y le di de comer a la enfermera.' },
        { emisor: 'OTRO', hora: '08:25', id: 6, texto: 'El otro día me senté en una silla invisible y casi me mato.' },
        { emisor: 'OTRO', hora: '08:30', id: 7, texto: 'Homero, ¿vos recordás quién sos? Yo a veces ni eso.' },
        { emisor: 'OTRO', hora: '08:35', id: 8, texto: 'Dicen que estoy en un asilo, pero a veces creo que estoy en una película de espías.' },
        { emisor: 'OTRO', hora: '08:40', id: 9, texto: 'A veces hablo con fantasmas, pero creo que son mis vecinos.' },
        { emisor: 'OTRO', hora: '08:45', id: 10, texto: 'Hoy me caí del sillón y descubrí una nueva forma de bailar.' },
        { emisor: 'OTRO', hora: '08:50', id: 11, texto: 'La enfermera me dio sopa, pero creo que era pintura.' },
        { emisor: 'OTRO', hora: '08:55', id: 12, texto: 'Homero, ¿me podes mandar donas? Las del asilo son como goma de borrar.' },
        { emisor: 'OTRO', hora: '09:00', id: 13, texto: 'Me encontré con un pez y hablamos de política.' },
        { emisor: 'OTRO', hora: '09:05', id: 14, texto: 'Si me olvido de algo, seguro que es importante.' },
        { emisor: 'OTRO', hora: '09:10', id: 15, texto: '¿Sabías que inventé una palabra que nadie usa? Se llamaba “patiamarillo”.' },
        { emisor: 'OTRO', hora: '09:15', id: 16, texto: 'El día que me pierda en el jardín, buscame con una lupa gigante.' },
        { emisor: 'OTRO', hora: '09:20', id: 17, texto: 'A veces creo que me sigo casando con la misma mujer... o era la enfermera.' },
        { emisor: 'OTRO', hora: '09:25', id: 18, texto: 'El asilo tiene más reglas que un campeonato de ajedrez.' },
        { emisor: 'OTRO', hora: '09:30', id: 19, texto: 'Hoy me dieron una pastilla para la memoria, pero se me olvidó tomarla.' },
        { emisor: 'OTRO', hora: '09:35', id: 20, texto: '¿Vos alguna vez viste a un abuelo bailar tango con una lámpara?' },
        { emisor: 'OTRO', hora: '09:40', id: 21, texto: 'El otro día hablé con una planta, creo que tiene mejores consejos que vos.' },
        { emisor: 'OTRO', hora: '09:45', id: 21, texto: 'Homero, ¿no te gustaría tener una abuela tan loca como yo?' },
        { emisor: 'OTRO', hora: '09:50', id: 22, texto: 'Hace años fui héroe en una guerra que nadie recuerda.' },
        { emisor: 'OTRO', hora: '09:55', id: 23, texto: 'Me quedé atrapado en el ascensor... otra vez.' },
        { emisor: 'OTRO', hora: '10:00', id: 24, texto: 'La televisión me odia, siempre me cambian el canal.' },
        { emisor: 'OTRO', hora: '10:05', id: 25, texto: 'No sé si estoy vivo o soy un fantasma con buena memoria.' },
        { emisor: 'OTRO', hora: '10:10', id: 26, texto: '¿Me mandás una foto? La última que tengo es de la guerra.' },
        { emisor: 'OTRO', hora: '10:15', id: 27, texto: 'Si no me contestás, voy a empezar a hablar con la radio.' },
        { emisor: 'OTRO', hora: '10:20', id: 28, texto: 'A veces me pierdo en el asilo, pero me gusta así.' },
        { emisor: 'OTRO', hora: '10:25', id: 29, texto: '¿Te acordás cuando me tiré del tejado? Yo no, pero fue épico.' },
        { emisor: 'OTRO', hora: '10:30', id: 30, texto: 'La almohada está hablandome' }
    ]
},



];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}