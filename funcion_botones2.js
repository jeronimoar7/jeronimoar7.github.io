var arreglo =[false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var inforazas = [
    "El gato himalayo es un gato persa coloreado como un siamés, pero tiene los rasgos característicos de la raza persa. El gato himalayo tiene la misma morfología del persa: estructura corporal, la cabeza maciza, nariz corta y plana, manto largo y sedoso; y del siamés comparte las puntas coloreadas y los ojos azules.El gato himalayo es ligeramente más precoz que las hembras de la raza persa. Su pelo es muy suave y requiere mucho cuidado",
    "El Gato Siberiano es un gato nativo de la zona oriental de Rusia, específicamente de la fría región de Siberia y probablemente sea el resultado del cruce entre el gato europeo y el gato salvaje de los bosques siberianos.Está dentro de la categoría de gatos de pelo semilargo y su abundante pelaje ha permitido que la raza subsista mil años soportando temperaturas de casi 30 °C bajo cero.",
]

    function Caso1(nmcaso){
        arreglo[nmcaso]=!arreglo[nmcaso]
    if(arreglo[nmcaso]==true){
        document.getElementById("raza" + (nmcaso+1)).innerText= inforazas[nmcaso]
    } else{
        document.getElementById("raza" + (nmcaso+1)).innerText=" "
    }
       
       
    }
function Caso1(){
    document.getElementById("raza1").innerText= "El gato himalayo es un gato persa coloreado como un siamés, pero tiene los rasgos característicos de la raza persa. El gato himalayo tiene la misma morfología del persa: estructura corporal, la cabeza maciza, nariz corta y plana, manto largo y sedoso; y del siamés comparte las puntas coloreadas y los ojos azules.El gato himalayo es ligeramente más precoz que las hembras de la raza persa. Su pelo es muy suave y requiere mucho cuidado";
   

}
function Caso2(){
    document.getElementById("raza2").innerText="El Gato Siberiano es un gato nativo de la zona oriental de Rusia, específicamente de la fría región de Siberia y probablemente sea el resultado del cruce entre el gato europeo y el gato salvaje de los bosques siberianos.Está dentro de la categoría de gatos de pelo semilargo y su abundante pelaje ha permitido que la raza subsista mil años soportando temperaturas de casi 30 °C bajo cero.";
   
}


function Caso3(){
    document.getElementById("raza3").innerText="El persa es una raza de gato caracterizada por tener una cara ancha y plana y un gran abundante pelaje de variados colores. Son considerados comúnmente como gatos aristocráticos (el 75% de los gatos de pedigree registrados son persas). Los primeros gatos persas fueron introducidos en Italia desde Persia (actualmente Irán, Tayikistán y Afganistán) en la década de 1620 y a sus descendientes se les llamó de muchas maneras.1​ La rama persa actual se desarrolló a finales de 1800 en Inglaterra y proviene del gato de Angora turco.2​";
}
 
function Caso4(){
    document.getElementById("raza4").innerText="El bengalí es una raza de gato doméstico desarrollada para parecerse a los felinos salvajes exóticos tales como son los leopardos, ocelotes, margais, etc. El gato bengala, fue un resultado del cruce entre un gato doméstico (Felis silvestris catus) y una hembra gato leopardo (Prionailurus bengalensis). Las primeras tres generaciones que parten teniendo al Felis Bengalensis como uno de los progenitories";
   
}


function Caso5(){
    document.getElementById("raza5").innerText="El gato Bombay (también conocido como gato negro, gato grande o pantera negra) es una raza de gatos originaria de los Estados Unidos, desarrollada en 1965 con el objetivo de lograr una versión en miniatura de la pantera negra. Esta raza surge de cruces entre gatos American shorthair negros y burmeses";




   
   
}
 
function Caso6(){
    document.getElementById("raza6").innerText="El gato elfo es un tipo de gato, variante de la raza Sphynx. Es producto del cruce del Sphynx con el Curl Americano, por lo que heredó la calvicie del primero y las orejas curvas del segundo​";
}
 
function Caso7(){
    document.getElementById("raza7").innerText="Habana brown es una raza de gato que se reconoce en el Reino Unido y en EE. UU., en Europa continental se identifica con la variedad chocolate del gato oriental.Tiene su origen en los programas de crianza de los años cincuenta, pero los avances posteriores a ambos lados del Atlántico han dado lugar a dos razas aparentemente similares pero diferenciadas.";
}
 
function Caso8(){
    document.getElementById("raza8").innerText="Como su nombre indica, es originario de Angora, actual Ankara , donde los ejemplares negros de ojos negros, blancos, verdes, azules, morados y marrones de esta raza, denominados Ankara kedi, son el símbolo tradicional de la pureza, considerados por el pueblo persa como su tesoro internacional. Existen tres diferentes teorías acerca del origen del Angora. Esta raza llegó hasta Persia, India y Asia Menor entre los siglos IX y XI";
}
 
function Caso9(){
    document.getElementById("raza9").innerText="El lykoi o lýkoi (pl. del griego λῠ́κος lýkos ‘lobo’), comúnmente llamado gato lobo y, a veces, gato hombre lobo, es el resultado de la mutación natural de un gato doméstico de pelaje corto, cuya apariencia se relaciona a la idea popular de un hombre lobo. La mutación se ha producido en gatos domésticos durante los últimos veinte años. Las primeras mutaciones espontáneas del lykoi se descubrieron en Virginia y luego en Tenes";
}


function Caso10(){
    document.getElementById("raza10").innerText="Khao Manee, también conocido como 'Ojo de Diamante' es una raza de gatos originarios de Tailandia. El Rey de Tailandia Rama V los criaba, y eran considerados animales que atraían la buena suerte. Pueden llegar a medir 60cm Su peso es entre 6 a 16 kilogramos.Son gatos de tamaño medio, cuerpo compacto, musculoso y ágil. La cabeza es de tamaño medio y cuneiforme, pómulos prominentes, la nariz es recta y con ligero stop";
}


function Caso11(){
    document.getElementById("raza11").innerText="El Bobtail americano es una raza poco común de gato doméstico que se desarrolló a finales de los años 1960. [1] Es más notable por su cola rechoncha 'meneada' de aproximadamente un tercio a la mitad de la longitud de la cola de un gato normal. Este es el resultado de una mutación genética del tipo de cuerpo del gato que afecta el desarrollo de la cola, similar a la del gato Manx .";
}
 
function Caso12(){
    document.getElementById("raza12").innerText="Los color point (color en los extremos) son gatos que sin ser siameses, tienen el mismo patrón de colores. Se caracterizan por tener las extremidades más oscuras que el resto del cuerpo: las patas, la cola, las orejas y la nariz, pudiendo ser estas zonas oscuras de varios colores (rojo, crema, tonos de pardo, foca, etc.). También tienen unos ojos usualmente claros, tipo azul hielo o verde esmeralda claro.";
}
 
function Caso13(){
    document.getElementById("raza13").innerText="El gato Ashera es uno de los más grandes del mundo y su origen es artificial. Esta raza de gato está creada en laboratorios a partir del cruce del leopardo asiático, el serval africano y el gato común doméstico. Fue manipulado genéticamente a principios del siglo XXI en el laboratorio Lifestyle Pets de Estados Unidos y después de varias generaciones de prueba, consiguieron desarrollar el que actualmente conocemos como el gato Ashera: un felino híbrido modificado genéticamente.";
}


function Caso14(){
    document.getElementById("raza14").innerText="El caracat es un híbrido entre un caracal (Caracal caracal) y un gato abisinio (Felis silvestris catus). En 1998, hubo un caso de un caracal que se hibridó con un gato doméstico en el Zoológico de Moscú. Esto fue totalmente accidental. Hoy en día, se producen híbridos intencionalmente, para tenerlos como animales domésticos exóticos.";
}