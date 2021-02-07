/*MIERDA QUE VA A SERVIR DESPUES Y TAMBIEN PARA LA NAVBAR*/ 
let mierda = window.pageYOffset;
window.onscroll = function(){
    let mierda2 = window.pageYOffset;
    if(mierda >= mierda2){
        document.getElementById('proyectosprincipal').style.opacity = '1';
    }
    else{
        document.getElementById('proyectosprincipal').style.opacity = '0';
    }
    mierda = mierda2;
}
