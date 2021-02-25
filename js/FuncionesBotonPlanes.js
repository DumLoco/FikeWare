function OcultarMostrar(objetoMostrarOcultarId) {
    const objeto = document.getElementById(objetoMostrarOcultarId);
    if (objeto.style.display === 'none') {
        objeto.style.display = 'inline';
    } else {
        objeto.style.display = 'none';
    }
}


function aumentarReducirTamaño(objetoIdAumentarTamaño, alturaNueva) {
    const objetoAumentar = document.getElementById(objetoIdAumentarTamaño);

    if (objetoAumentar.clientHeight > 1000){
        if (screen.width < 1700){
            objetoAumentar.style.height = "760px";
        }else{
            objetoAumentar.style.height = "700px";
        }
    }else if (objetoAumentar.clientHeight < 1000){
        if (screen.width < 1700){
            objetoAumentar.style.height = "1250px";
        }else{
            objetoAumentar.style.height = "1250px";
        }
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