// diccionario
let language = {
  eng: {
    fraseprueba: "We make your ideas a reality.",
    quienes2: "About Us",
    inicio2: "Home",
    servicios2: "Services",
    contacto2: "Contact",
    nuestros2: "We create and develop solutions based on a vast array of technologies, hence we can adapt quickly to the needs of your business or organization. We are a young team who's main focus lies at solving any type of challenge.",
    nuestros3: "Our services",
    creaciones: "Our creations",
    mobile2: "Mobile Development",
    disDes: "Design & Development",
    seguinos: "Follow Us on:",
    mas: "More:",
    formcontact: "Contact",
    sabermas: "If you wish to know more about our services, plase send us a message!",
    nombre: "Name and Surname",
    asunto2: "Subject",
    mensaje: "Message",
    derechos: " - All rights reserved 2020",
    enviar: "Send",
    nosotros: "About Us",
    objetivo: "Our Mission",
  },
  es: {
    fraseprueba: "Concretamos tus ideas.",
    quienes2: "Quienes Somos",
    inicio2: "Inicio",
    servicios2: "Servicios",
    contacto2: "Contacto",
    nuestros2: "Diseñamos y desarrollamos soluciones a partir de diversas tecnologias, por lo cual podemos adaptarnos a las necesidades de su organizacion. Somos un equipo joven enfocado en resolver cualquier tipo de desafío.",
    nuestros3: "Nuestros Servicios",
    creaciones: "Nuestras creaciones",
    mobile2: "Desarrollo Mobile",
    disDes: "Diseño y Desarrollo",
    seguinos: "Seguinos en:",
    mas: "Mas:",
    formcontact: "Contacto",
    sabermas: "Si queres saber mas sobre nuestros servicios, te invitamos a mandar tu consulta aca.",
    nombre: "Nombre y Apellido",
    asunto2: "Asunto",
    mensaje: "Mensaje",
    derechos: " - Todos los derechos reservados 2020",
    enviar: "Enviar",
    nosotros: "Nosotros",
    objetivo: "Objetivo",
  }
 };

 //selectores de id
let fraseprueba = document.getElementById("fraseprueba");
let quienes2 = document.getElementById("quienes2");
let inicio2 = document.getElementById("inicio2");
let servicios2 = document.getElementById("servicios2");
let contacto2 = document.getElementById("contacto2");
let nuestros2 = document.getElementById("nuestros2");
let creaciones = document.getElementById("creaciones");
let mobile2 = document.getElementById("mobile2");
let disDes = document.getElementById("disDes");
let seguinos = document.getElementById("seguinos");
let mas = document.getElementById("mas");
let formcontact = document.getElementById("formcontact");
let sabermas = document.getElementById("sabermas");
let nombre = document.getElementById("nombre");
let asunto2 = document.getElementById("asunto2");
let mensaje = document.getElementById("mensaje");
let derechos = document.getElementById("derechos");
let enviar = document.getElementById("enviar");
let nosotros = document.getElementById("nosotros");
let objetivo = document.getElementById("objetivo");

           // anchors para reload
           let dataReload = document.querySelectorAll("[data-reload]");

           // window hash que define el idioma
           if (window.location.hash) {
            fraseprueba.textContent = (window.location.hash === "#es") ? language.es.fraseprueba : language.eng.fraseprueba
            quienes2.textContent = (window.location.hash === "#es") ? language.es.quienes2 : language.eng.quienes2
            inicio2.textContent = (window.location.hash === "#es") ? language.es.inicio2 : language.eng.inicio2
            servicios2.textContent = (window.location.hash === "#es") ? language.es.servicios2 : language.eng.servicios2
            contacto2.textContent = (window.location.hash === "#es") ? language.es.contacto2 : language.eng.contacto2
            nuestros2.textContent = (window.location.hash === "#es") ? language.es.nuestros2 : language.eng.nuestros2
            nuestros3.textContent = (window.location.hash === "#es") ? language.es.nuestros3 : language.eng.nuestros3
            creaciones.textContent = (window.location.hash === "#es") ? language.es.creaciones : language.eng.creaciones
            mobile2.textContent = (window.location.hash === "#es") ? language.es.mobile2 : language.eng.mobile2
            disDes.textContent = (window.location.hash === "#es") ? language.es.disDes : language.eng.disDes
            seguinos.textContent = (window.location.hash === "#es") ? language.es.seguinos : language.eng.seguinos
            mas.textContent = (window.location.hash === "#es") ? language.es.mas : language.eng.mas
            formcontact.textContent = (window.location.hash === "#es") ? language.es.formcontact : language.eng.formcontact
            sabermas.textContent = (window.location.hash === "#es") ? language.es.sabermas : language.eng.sabermas
            nombre.textContent = (window.location.hash === "#es") ? language.es.nombre : language.eng.nombre
            asunto2.textContent = (window.location.hash === "#es") ? language.es.asunto2 : language.eng.asunto2
            mensaje.textContent = (window.location.hash === "#es") ? language.es.mensaje : language.eng.mensaje
            derechos.textContent = (window.location.hash === "#es") ? language.es.derechos : language.eng.derechos
            enviar.textContent = (window.location.hash === "#es") ? language.es.enviar : language.eng.enviar
            nosotros.textContent = (window.location.hash === "#es") ? language.es.nosotros : language.eng.nosotros
            objetivo.textContent = (window.location.hash === "#es") ? language.es.objetivo : language.eng.objetivo
           }

          // para que no refreshee al mismo tiempo que cambia el hash
           let reloadPage = () => {
          setTimeout(function () {
          location.reload();
              }, 100);
            }
    
           // define language reload onclick iterator 
           for (var i = 0; i <= dataReload.length; i++) {
            dataReload[i].onclick = reloadPage 
        }