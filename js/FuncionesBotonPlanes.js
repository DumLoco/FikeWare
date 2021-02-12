function OcultarMostrar(objetoMostrarOcultarId) {
    const objeto = document.getElementById(objetoMostrarOcultarId);
    if (objeto.style.display === 'none') {
        objeto.style.display = 'inline';
    } else {
        objeto.style.display = 'none';
    }
}


function aumentarReducirTamaño(objetoIdAumentarTamaño) {
    const objetoAumentar = document.getElementById(objetoIdAumentarTamaño);

    if (objetoAumentar.clientHeight > 1000){
        objetoAumentar.style.height = "620px";
    }else if (objetoAumentar.clientHeight < 1000){
        objetoAumentar.style.height= "1150px";
    }
    
}

function cambiarPosicionElemento(elementoIdCambiarPosicion, marginTopNuevo, marginTopOriginal){
    const elementoCambiarPosicion = document.getElementById(elementoIdCambiarPosicion);

    if (elementoCambiarPosicion.style.marginTop != marginTopNuevo){
        elementoCambiarPosicion.style.marginTop = marginTopNuevo
    }else{
        elementoCambiarPosicion.style.marginTop = marginTopOriginal
    }
    
}

function botonMasFunciones(objetoMostrarOcultarId, objetoIdAumentarTamaño,elementoIdCambiarPosicion,marginTopNuevo,marginTopOriginal){
    OcultarMostrar(objetoMostrarOcultarId)
    aumentarReducirTamaño(objetoIdAumentarTamaño)
    cambiarPosicionElemento(elementoIdCambiarPosicion, marginTopNuevo, marginTopOriginal)
}