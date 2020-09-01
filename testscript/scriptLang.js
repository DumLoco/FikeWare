// diccionario
let language = {
  eng: {
    fraseprueba: "We make your ideas a reality.",
    quienes2: "About Us",
    inicio2: "Home",
    servicios2: "Services",
    contacto2: "Contact",
    nuestros2: "We create and develop solutions based on a great number of technologies, Therefore we can adapt quickly to the needs of your business or organization. We are a young team whose main focus lies in solving any type of challenge.",
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
    nosotros2: "We are a development team that can offer you digital solutions that take into account your particular needs. We can and will capture the escence of your project in order to transform your ideas into reality, making use of the most adequate technology in each particular context.",
    nosotros3: "We are certain that the best product is born from the constant interaction with our clients, without ever disregarding the human factor. In that way, we can always reach the best possible result.",
    objetivo2: "Our constant goal is to offer a unique product, which can differentiate us and our client from the rest of the competition. To create new products and ideas, always trying to adapt them to everyone's needs, in order to give back to the comunity.",
    objetivo3: "In order to accomplish that, we work with agile methodology, always open to whatever feedback we can get from our clients and partners. We also give immediate response to every situation that could arise.",

  },
  es: {
    fraseprueba: "Concretamos tus ideas.",
    quienes2: "Quienes Somos",
    inicio2: "Inicio",
    servicios2: "Servicios",
    contacto2: "Contacto",
    nuestros2: "Diseñamos y desarrollamos soluciones a partir de diversas tecnologías, por lo cual podemos adaptarnos a las necesidades de tu organización. Somos un equipo joven enfocado en resolver cualquier tipo de desafío.",
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
    nosotros2: "Somos un equipo de desarrollo que puede ofrecerte soluciones digitales que se adapten a tus necesidades. Podemos plasmar la escencia de tu proyecto para hacer realidad tus ideas, utilizando la solución tecnológica más adecuada según tu contexto particular.",
    nosotros3: "Estamos convencidos de que el mejor producto nace de la interacción constante con nuestro cliente, sin descuidar el factor humano, para así llegar al mejor resultado posible.",
    objetivo2: "Nuestra meta constante es ofrecer un producto único, que nos diferencia tanto a nosotros como a nuestros clientes del resto de la competencia. Crear productos e ideas nuevas, que se adapten a las necesidades de todos para dar el mayor aporte a la comunidad.",    
    objetivo3: "Para ello, nos manejamos con metodologías ágiles y siempre receptivos ante cualquier tipo de feedback de nuestros clientes y partners, dando respuesta inmediata frente a cualquier sitaución que pueda surgir.",
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
let nosotros2 = document.getElementById("nosotros2");
let nosotros3 = document.getElementById("nosotros3");
let objetivo2 = document.getElementById("objetivo2");
let objetivo3 = document.getElementById("objetivo3");

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
            objetivo2.textContent = (window.location.hash === "#es") ? language.es.objetivo2 : language.eng.objetivo2
            objetivo3.textContent = (window.location.hash === "#es") ? language.es.objetivo3 : language.eng.objetivo3
            nosotros2.textContent = (window.location.hash === "#es") ? language.es.nosotros2 : language.eng.nosotros2
            nosotros3.textContent = (window.location.hash === "#es") ? language.es.nosotros3 : language.eng.nosotros3                                             
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