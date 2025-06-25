function verificarAcceso(){ 
const user = "admin"
const password = "1234"
const  userInput = document.getElementById("user").value.trim()
const passwordInput =  document.getElementById("password").value.trim()
if(!userInput|| !passwordInput){
    alert("Ingrese los datos solicitados")
    return;
}
if(user === userInput && password === passwordInput){
    alert("Bienvenido "+ userInput)
    localStorage.setItem("logueado", userInput);
    window.location.href ="pagina1.html"
    
}else
alert("Los datos ingresados no son correctos")
}
if(!userInput|| !passwordInput){
    alert("Ingrese los datos solicitados")
}
function cerrarSesion(){
    localStorage.removeItem ("logueado")
    window.location.href ="login.html"
}
