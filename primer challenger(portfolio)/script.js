const formulario = document.getElementById("inputs")

formulario.addEventListener('submit', function(hamdleSubmit){
   
    hamdleSubmit.preventDefault();
    let nombre = document.getElementById('form_nombre').value
    console.log(nombre)
    let correo = document.getElementById('form_correo').value
    console.log(correo)
    let asunto = document.getElementById('form_asunto').value
    console.log(asunto)
    let mensaje = document.getElementById('form_mensaje').value
    console.log(mensaje)


}) 