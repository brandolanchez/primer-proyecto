
var nombre=prompt("introduce nombre");
var apellido=prompt("introduce apellido");
var edad=prompt("introduce tu edad");
var restando=prompt("cuantos anios deseas quitarte?");
edad-=restando;

document.write("<p>");

document.write("Bienvenido "+ nombre + " " + apellido + "</br>" + 
" te gustaria tener "+ edad + " anios");
        
        document.write("</p>");