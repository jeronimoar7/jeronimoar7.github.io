var luz=0;
var agua=0;
var animales=0;
var vuelo=0;
var artesana=0;
var jardin=0;
var escarcha=0;

var respuesta=[false,false,false,false,false,false,false,false,false]

function aumentar_luz(numero){
    luz++;
    respuesta[numero-1]=true;
    document.getElementById("contenedor"+numero).style.display = "none"
    verificar_respuesta()

}

function aumentar_agua(numero){
    agua++;
    respuesta[numero-1]=true;
    document.getElementById("contenedor"+numero).style.display = "none"
    verificar_respuesta()
}

function aumentar_animales(numero){
    animales++;
    respuesta[numero-1]=true;
    document.getElementById("contenedor"+numero).style.display = "none"
    verificar_respuesta()
}

function aumentar_vuelo(numero){
    vuelo++;
    respuesta[numero-1]=true;
    document.getElementById("contenedor"+numero).style.display = "none"
    verificar_respuesta()
}

function aumentar_artesana(numero){
    artesana++;
    respuesta[numero-1]=true;
    document.getElementById("contenedor"+numero).style.display = "none"
    verificar_respuesta()
}

function aumentar_jardin(numero){
    jardin++;
    respuesta[numero-1]=true;
    document.getElementById("contenedor"+numero).style.display = "none"
    verificar_respuesta()
}

function aumentar_escarcha(numero){
    escarcha++;
    respuesta[numero-1]=true;
    document.getElementById("contenedor"+numero).style.display = "none"
    verificar_respuesta()
}


function verificar_respuesta(){
    var todo=true;
    for (i=0; i<respuesta.length;i++){
        if(respuesta[i]==false){
            todo=false;
        }
    }
    if (todo==true){
        if((luz > agua)&&(luz>animales)&&(luz>vuelo)&&(luz>artesana)&&(luz>jardin)&&(luz>escarcha )) {
            var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/luzres.gif'; 
          img.style.width= '250 px';
          img.style.height='250 ';
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
            document.getElementById("resultado").innerText = "¿Qué tenemos por aquí? Un Hada de la Luz:Puedes crear hermosos destellos de luz,\n guiar a otros con tu brillo y  alegrar cualquier rincón oscuro con su luminosidad,\n eres leal y te anticipas de cualquier cosa que pudiese salir mal, \nSolo confía hada de la luz ¿ok?."
        }
       else if ((agua>luz)&&(agua>animales)&&(agua>vuelo)&&(agua>artesana)&&(agua>jardin)&&(agua>escarcha)){
        var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/silvermist.gif'; 
          img.style.width= '340 px';
          img.style.height='340 ';
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
        document.getElementById("resultado").innerText ="Me complace darte la bienvenida a las Hadas del Agua:\nAl parecer serías un hada del agua eso quiere decir que\n puedes controlar el agua en todas sus formas desde manipular gotas\n de agua hasta grandes corrientes marinas, \naunque no dejas de ser un poco despistada eso te da un toque especial"
       }
       else if ((animales>luz)&&(animales>agua)&&(animales>vuelo)&&(animales>artesana)&&(animales>jardin)&&(animales>escarcha)){
        var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/animaleres.gif';
          img.style.width= '400 px';
          img.style.height='350 '; 
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
        document.getElementById("resultado").innerText =" Felicidades eres un hada de los animales:\nEste talento te permite cuidar y proteger a los animales, \nasí como ayudar a mantener el equilibrio en el ecosistema,\npero cuidado a veces tu corazón te guia a algunas situaciones que puedan doler,\n sin nada más que decir, !Buena suerte hada de los animales¡"
       }
       else if ((vuelo>luz)&&(vuelo>agua)&&(vuelo>animales)&&(vuelo>artesana)&&(vuelo>jardin)&&(vuelo>escarcha)){
        var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/vuelo.gif'; 
          img.style.width= '370 px';
          img.style.height='370';
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
        document.getElementById("resultado").innerText ="Bienvenida hada de vuelo veloz:\n Siendo un hada de Vuelo Veloz puedes moverte a gran velocidad,\n lo que le permite realizar tareas rápidamente y llegar a lugares\n lejanos en poco tiempo, usa este talento de manera responsable\n quizás el ser un poco arrogante no te queda mal."
       } 
       else if ((artesana>luz)&&(artesana>agua)&&(artesana>animales)&&(artesana>vuelo)&&(artesana>jardin)&&(artesana>escarcha)){
        var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/artesanasres.gif'; 
          img.style.width= '370 px';
          img.style.height='370 ';
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
        document.getElementById("resultado").innerText ="En hora buena, se bienvenida a las hadas artesanas:\n  Al parecer serías un hada ingeniosa, siendo experta en arreglar\n  cosas y crear inventos increíbles, es por eso que te podrías\n  convertir en una hábil hada artesana, pero cuidado recuerda\n  que el ser muy curiosa te puede meter en problemas."
       }
       else if ((jardin>luz)&&(jardin>agua)&&(jardin>animales)&&(jardin>vuelo)&&(jardin>artesana)&&(jardin>escarcha)){
        var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/jardinres.gif';
          img.style.width= '350 px';
          img.style.height='350 '; 
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
        document.getElementById("resultado").innerText ="Se bienvenida a las Hadas del Jardin:\n  Eres capaz de hacer que las plantas crezcan y florezcan con su toque mágico,\n creando hermosos jardines y manteniendo la belleza natural del mundo mágico,\n aunque aun siendo un Hada del Jardín puede que no te guste el lodo, irónico ¿cierto?."
       }
       else if ((escarcha>luz)&&(escarcha>agua)&&(escarcha>animales)&&(escarcha>vuelo)&&(escarcha>artesana)&&(escarcha>jardin)){
        var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/escarchares.gif'; 
          img.style.width= '250 px';
          img.style.height='300';
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
        document.getElementById("resultado").innerText ="Espero te guste el frío, bienvenid@ Hada de la escarcha:\n Quizá lo tuyo no son los dias soleados o lluviosos hablamos de un ambiente más frío,\n puedes volar a través de la nieve con gracia y belleza teniendo el talento de controlar la escarcha \n y el hielo, lo cual te hace ser un hada tímid@ pero a la vez valiente, \nsiendo un hada de la escarcha te va a ir espectacular."
       }
       else {
        var img = document.createElement('img'); 
        // Establece la ubicación de la imagen 
          img.src = 'imagenes/polvillo.gif'; 
          img.style.width= '380 px';
          img.style.height='380';
         // Agrega la imagen al documento 
         imagenresultado.appendChild(img); 
        document.getElementById("resultado").innerText="Vaya que sorpresa, se bienvenida a las Hadas del Polvillo:\n Seras responsable de recolectar, distribuir el  polvillo magico\n  que es vital en el mundo de las hadas,\n es un trabajo muy importante, no seas descuidad@"
      }
    }
   
}