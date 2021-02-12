function nuevaVentana(htmlAbrir){
    window.open(htmlAbrir,'_blank');
} 

function determinarAsunto(asunto){
    const inputAsunto = document.getElementById("Asunto")
    inputAsunto.value = asunto
    
}

function llamadaFuncionesBotonContacto(htmlAbrir, asunto){
    nuevaVentana(htmlAbrir);
    determinarAsunto(asunto);
}