// src/data/evento.ts
// Datos de la pareja y del evento, en un solo lugar. Todo sale de datos.txt.

export const evento = {
    nombre1: "Edwin",
    nombre2: "Arminda",
    iniciales: ["E", "A"],
    fechaCorta: "5 DICIEMBRE 2026",
    // Inicio de la boda religiosa, hora de Bolivia (UTC-4): para el contador
    inicio: "2026-12-05T14:30:00-04:00",

    versiculo: {
        texto: "“Y DIOS DIJO: NO ES BUENO QUE EL HOMBRE ESTÉ SOLO. YO HARÉ UNA COMPAÑÍA ADECUADA PARA ÉL.”",
        cita: "GÉNESIS 2:18,21-24",
    },

    bendicion: "CON LA BENDICIÓN DE DIOS Y DE NUESTROS PADRES, NOS COMPLACE INVITARLE A NUESTRO MATRIMONIO.",

    padresNovia: ["Donato Montaño Ayala", "Teodocia Claure Valdelomar"],
    padresNovio: ["Ricardo Molina Tacaraya", "Aurora Claros Verduguez"],

    padrinos: [
        { titulo: "PADRINOS DE RELIGIÓN", nombre: "Javier Quiroz y Sra." },
        { titulo: "PADRINOS DE CIVIL", nombre: "Víctor Claros y Sra." },
        { titulo: "PADRINOS DE AROS", nombre: "Mario Orellana y Sra." },
    ],

    direccionSalon: "CALLE JUNÍN, A UNA CUADRA Y MEDIA DE LA PLAZA 24 DE SEPTIEMBRE ESQ. AV. CIRCUNVALACIÓN · MAIRANA",

    // Enlaces de "¿Cómo llegar?".
    // Iglesia: código de ubicación de Google (57HRV2JV+46, Mairana) tomado de
    // GCatholic; no vino de los novios, conviene que lo confirmen.
    mapaIglesia: "https://www.google.com/maps/search/?api=1&query=57HRV2JV%2B46",
    // Salón Navia: enlace que mandaron los novios
    mapaSalon: "https://maps.app.goo.gl/2jnx8A4A1Uuhrvcv5",
};

export const tituloPagina = `${evento.nombre1} & ${evento.nombre2} | 5 de Diciembre 2026`;
