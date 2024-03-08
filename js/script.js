/*hace foco en el campo de busqueda cuando carga la pagina
document.addEventListener("DOMContentLoaded", function(e) {
    document.getElementById("inputText").focus();
});*/

//envia una busqueda a google
function search(){
    text = document.getElementById("inputText").value
    if(text!= ""){
        location.href = "https://www.google.com/search?q="+text;
    }
    
}
//captura el enter para buscar a google
function onKeyUp(event) {
    var keycode = event.keyCode;
    if(keycode == '13'){
        search();
    }
}
