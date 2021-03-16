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

    function AumentaReduceTamaño(alturaObjetoVerificar, alturaObjetoGrande, AlturaObjetoChico) {
        if (objetoAumentar.clientHeight > alturaObjetoVerificar) { //Verifca Tamaño del objeto
            objetoAumentar.style.height = AlturaObjetoChico;
        } else {
            objetoAumentar.style.height = alturaObjetoGrande;
        }
    }

    function DefinirRectangulo(objetoIdAumentarTamaño, alturaObjetoVerificar, alturaObjetoGrande, AlturaObjetoChico, alturaObjetoVerificarSeg, alturaObjetoGrandeSeg, AlturaObjetoChicoSeg){
        if (objetoIdAumentarTamaño == "RectanguloPlanesPrimera") {
            AumentaReduceTamaño(alturaObjetoVerificar, alturaObjetoGrande, AlturaObjetoChico)
        } else if (objetoIdAumentarTamaño == "RectanguloPlanesSegunda") {
            AumentaReduceTamaño(alturaObjetoVerificarSeg, alturaObjetoGrandeSeg, AlturaObjetoChicoSeg)
        }
    }



    if (screen.width > 1400) {
        DefinirRectangulo(objetoIdAumentarTamaño, 1000, "1250px", "700px", 900, "970px", "700px")
    } else if (screen.width < 1400 && screen.width > 700) {
       /* AumentaReduceTamaño(1000, "1400px", "770px")*/
        DefinirRectangulo(objetoIdAumentarTamaño, 1000, "1400px", "770px", 1051, "1270px", "770px")
    } else if (screen.width < 700) { //Verifca Tamaño del objeto para pantallas mobile
        DefinirRectangulo(objetoIdAumentarTamaño, 1051, "1570px", "770px", 1051, "1370px", "870px")
    }
}



function cambiarPosicionElemento(elementoIdCambiarPosicion) {
    const elementoCambiarPosicion = document.getElementById(elementoIdCambiarPosicion);

    function switchMarginTop(marginTopNuevo, marginTopOriginal) {
        if (elementoCambiarPosicion.style.marginTop != marginTopNuevo) {
            elementoCambiarPosicion.style.marginTop = marginTopNuevo
        } else {
            elementoCambiarPosicion.style.marginTop = marginTopOriginal
        }
    }

    if (screen.width > 1400) {
        switchMarginTop("10%", "10%");
    } else if (screen.width < 1400 && screen.width > 700) {
        if(elementoIdCambiarPosicion == 'botonPlanes'){
            switchMarginTop("15%", "110px");
        }else if (elementoIdCambiarPosicion == 'botonPlanesSegunda') {
            switchMarginTop("30px", "20px");
        }
        
    } else if (screen.width < 700) { //Verifca Tamaño del objeto para pantallas mobile
        switchMarginTop("2%", "10%");
    }

    function switchMarginTop(marginTopNuevo, marginTopOriginal) {
        if (elementoCambiarPosicion.style.marginTop != marginTopNuevo) {
            elementoCambiarPosicion.style.marginTop = marginTopNuevo
        } else {
            elementoCambiarPosicion.style.marginTop = marginTopOriginal
        }
    }

}

    


function botonMasFunciones(objetoMostrarOcultarId, objetoIdAumentarTamaño, elementoIdCambiarPosicion, marginTopNuevo, marginTopOriginal) {
    OcultarMostrar(objetoMostrarOcultarId)
    aumentarReducirTamaño(objetoIdAumentarTamaño)
    cambiarPosicionElemento(elementoIdCambiarPosicion)
}