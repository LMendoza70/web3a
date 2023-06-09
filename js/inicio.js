var v1=0,v2=0,re,texto='',uss="admin",pss="0000"
//declaramos el formulario para poder invocuar su evento submit
var form=document.getElementById("frmlogin");

form.addEventListener("submit",function(evento){
    var usuario =document.getElementById("user").value
    var password =document.getElementById("pass").value
    evento.preventDefault();
    if(uss==usuario && pss==password){
        window.location.href="../respuesta.html"
    }else{
        alert("Datos incorrectos")
    }

})

function captura1() {
    v1=document.getElementById("v1").value
    v1=Number.parseFloat(v1)
}

function captura2(){
    v2=document.getElementById("v2").value
    v2=Number.parseFloat(v2)
    re=document.getElementById("resultado")
    
}

function res(){
    texto="El resultado de la resta es : "+(v1-v2)
    re.textContent=texto
}

function sum(){
   texto ="El resultado de la suma es : "+(v1+v2)
   re.textContent=texto
}

function mul(){
    texto ="El resultado de la multiplicacion es : "+(v1*v2)
   re.textContent=texto
}

function div(){
    texto ="El resultado de la division es : "+(v1/v2)
    re.textContent=texto
}
