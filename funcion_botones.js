
/*const btnswitch=document.querySelector('switch');
btnswitch.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
btnswitch.classList.toggle('active');
});*/

var arreglo =[false,false,false,false,false,false,false,false,false,false,false,false,false,false]
var inforazas = [
    "Se trata del Rat Terrier, una raza criada para controlar ratas y roedores en granjas y minas de carbón, pero que se ha convertido en una mascota muy apreciada por su vivacidad y energía, además de su carácter leal y leal. Los perros rat terrier son de tamaño pequeño, aunque también hay ejemplares de tamaño mediano. El objetivo de los criadores, los colonos ingleses que los trajeron a América, era crear una raza de perros pequeños y ágiles que pudieran cazar ratas y otros roedores en granjas y minas de carbón, combatiendo así las plagas. Colores:,Blanco, beige-blanco, marrón-blanco, azul-blanco, negro-blanco, tricolor.De 4,5 a 11 kg.Los perros Rat Terrier son muy leales a su familia humana, a la que tienen mucho apego (y sí, también se llevan genial con los niños si han sido bien socializados desde cachorros). También son perros muy inteligentes y fáciles de entrenar. Por otro lado, son muy enérgicos, son perros muy activos, curiosos y juguetones que necesitan mucho ejercicio para mantenerse estables a nivel físico y mental. Como ya comentamos, a pesar de su tamaño, son perros con mucha energía, por lo que necesitan varios paseos diarios (de al menos 40 minutos cada uno) donde poder correr y jugar cuando quiera. En cuanto a los cuidados, quienes tengan el pelo corto sólo necesitarán cepillarlo una vez por semana, asegurándose de eliminar la suciedad de la superficie.",
    "El Pastor Alemán, también conocido como el Shepherd Dog, es una raza de perro de trabajo que se originó en el siglo XIX en Alemania. * Está clasificado como un perro de pastoreo, lo que significa que están diseñados para llevar a un rebaño de ganado de un lugar a otro. Los Pastor Alemán son muy inteligentes y son capaces de trabajar en diferentes condiciones climáticas y paisajes. * Los Pastor Alemán son conocidos por su lealtad, valentía, inteligencia y por ser buenos con los niños y las personas.",
    "Pastor Belga es una raza de perro de trabajo que se originó en Bélgica en el siglo XIX. * Aunque es un perro de trabajo, también se utiliza como perro de compañía y de deporte. * Estos perros son conocidos por su fuerza, agilidad, lealtad e inteligencia.A diferencia de los Pastor Alemán, los Pastor Belga son conocidos por ser muy enérgicos y necesitan mucho ejercicio. * Los Pastor Belga son conocidos por ser grandes compañeros de sus dueños y son muy leales y protectores, Sin embargo, también son conocidos por ser muy independientes y puede ser un desafío entrenar. Los Pastor Belga requieren mucha estimulación física y mental, así como un fuerte liderazgo, para poder prosperar.",
    " El Labrador Retriever, también conocido como el Canadian Retriever, es una raza de perro originaria de Canadá.  Está clasificado como un perro de trabajo, un perro de caza y un perro de muestra. * Los Labrador Retrievers son conocidos por su capacidad de buscar y traer objetos, por su habilidad para trabajar con ganado y por su capacidad para navegar.Los Labrador Retrievers son conocidos por su lealtad, valentía, inteligencia y por ser buenos con los niños y las personas.  A pesar de su reputación de ser amigables y amorosos, los Labrador Retrievers son muy protectores de su familia y amigos, y pueden ser firmes y valientes en defensa de sus seres queridos. ",
    "El pug es una raza de perro con origen histórico en China, pero con el patrocinio del Reino Unido.Historia: Algunos creen que la raza era originaria del Lejano Oriente, mientras que otros pensaban que fue en Europa. Actualmente se acepta, mayoritariamente, que el Pug tuvo su origen en China, desde donde pasó a Japón y más tarde a Europa. En China existe, desde hace mucho tiempo, una raza canina llamada Happa , que es similar a un Pequinés con el pelo liso.",
    "El San Bernardo, también conocido como el Gran San Bernardo, es un perro grande que se originó en los Alpes suizos en el siglo XVIII. Está clasificado como un perro de trabajo y un perro de familia, lo que significa que está diseñado para trabajar con ganado y hacer compañía a los seres humanos.* Los San Bernardo son muy inteligentes y capaces de trabajar en diferentes condiciones climáticas y paisajes.Los San Bernardo son conocidos por su lealtad, valentía, inteligencia y por ser buenos con los niños y las personas. A pesar de su reputación de ser amigable y cariñoso, los San Bernardo son capaces de ser firmes y protectores de su familia y amigos.",
    " El Gran Danés, también conocido como el Danish Mastiff, es un perro gigante que se originó en Reino Unido en el siglo XIX.Está clasificado como un perro de trabajo y un perro de compañía, lo que significa que está diseñado para trabajar con ganado y hacer compañía a los seres humanos.",
    "Husky siberiano de veinticuatro meses de edad. El Husky Siberiano vio la luz entre estos últimos, generalmente asentados en las costas del mar de Bering, en el Ártico. Debido a esto, la pureza del Husky Siberiano ha tenido que ser recuperada genéticamente hasta en dos ocasiones y es imposible saber cómo eran exactamente en sus orígenesUn husky llamado Togo y todos sus compañeros, incluyendo a Balto, atravesaron el estrecho de Bering y llevaron el suero necesario.",
    "El chihuahua,​ también conocido como chihuahueño,​es una raza de perro originaria de México, una de las razas de perros más antiguas del continente americano, además de ser el perro más pequeño del mundo. Historia :Vasijas con efigies de perro, que también parecen representar al chihuahua, y datan de alrededor del año 1325 han sido descubiertas en los actuales estados estadounidenses de Georgia y Tennessee.",
    "El pit bull terrier americano es una raza de perro originaria de Estados Unidos, que surgió a partir de la raza de los bull-and-terriers, importados desde el Reino Unido en el siglo xix. Se utilizaban como perros de pelea hasta que estos eventos fueron prohibidos en 1976. Actualmente son criados como mascotas y atletas en deportes legales aunque sigue siendo la raza predilecta en las peleas de perros por poseer una mordida sumamente fuerte de hasta 230 psi .​ Los APBT pueden mostrar agresión hacia otros perros, personas y animales si no se les da la educación adecuada, pues tienen una predisposición genética a ser agresivos, al ser ese es un requisito necesario para que un perro de pelea cumpla su función",
    "El Schnauzer es una raza canina que se originó en Alemania durante los siglos XV y XVI. Los Schnauzer fueron criados para perseguir y cazar.Amigables y cariñosos, los schnauzer se integran bien dentro de la vida familiar y se llevarán bien con los niños y otros perros, siempre y cuando estén correctamente socializados y entrenados. El schnauzer siempre está alerta, haciendo un excelente perro guardián, aunque su naturaleza vigilante puede llevarlo a ladrar persistentemente. Algunos schnauzer necesitan que se les quite el pelo muerto de forma manual.",
    "El shih tzu es una raza de perro originaria de Tíbet,La romanización Wade-Giles estaba en uso cuando la raza fue introducida por primera vez en los Estados Unidos, pero en los tiempos modernos se utiliza la romanización Pinyin, haciéndolo shīzi.Durante el siglo xvII el Dalai Lama obsequió al Emperador algunos ejemplares de esta raza. Sin embargo, la invasión japonesa en China durante ese mismo año ocasionó que la raza se extinguiera en su propio país de origen.",
    "El bóxer viene de dos perros tipo mastín utilizados como perros de caza durante la Edad Media en Alemania. El bóxer es una raza de perro de trabajo y compañía de origen alemán, tipo moloso, de tamaño mediano.Friedrun Stockmann y su esposo Phillp​ considerados los «padres de la raza bóxer» gracias a su criadero llamado vom Dom. Los sucesos bélicos en ese tiempo ocasionaron una considerable disminución de la raza, aunque ellos la mantuvieron estable.",
    "La Salchicha, también conocida como el Dachshund, es un perro de tamaño pequeño a mediano que se originó en Alemania en el siglo XIX. La Dachshund, también conocida como la Salchicha Alemana, es un perro pequeño que se originó en Alemania en el siglo XVIII."
]

    function Caso1(nmcaso){
        arreglo[nmcaso]=!arreglo[nmcaso]
    if(arreglo[nmcaso]==true){
        document.getElementById("raza" + (nmcaso+1)).innerText= inforazas[nmcaso]
    } else{
        document.getElementById("raza" + (nmcaso+1)).innerText=" "
    }
       
       
    }
    



function Caso3(){
    document.getElementById("raza3").innerText="l Pastor Belga es una raza de perro de trabajo que se originó en Bélgica en el siglo XIX. * Aunque es un perro de trabajo, también se utiliza como perro de compañía y de deporte. * Estos perros son conocidos por su fuerza, agilidad, lealtad e inteligencia.","A diferencia de los Pastor Alemán, los Pastor Belga son conocidos por ser muy enérgicos y necesitan mucho ejercicio. * Los Pastor Belga son conocidos por ser grandes compañeros de sus dueños y son muy leales y protectores.",
    "Sin embargo, también son conocidos por ser muy independientes y puede ser un desafío entrenar. * Los Pastor Belga requieren mucha estimulación física y mental, así como un fuerte liderazgo, para poder prosperar.";
}
 
function Caso4(){
    document.getElementById("raza4").innerText=" El Labrador Retriever, también conocido como el Canadian Retriever, es una raza de perro originaria de Canadá.  Está clasificado como un perro de trabajo, un perro de caza y un perro de muestra. * Los Labrador Retrievers son conocidos por su capacidad de buscar y traer objetos, por su habilidad para trabajar con ganado y por su capacidad para navegar.","Los Labrador Retrievers son conocidos por su lealtad, valentía, inteligencia y por ser buenos con los niños y las personas.  A pesar de su reputación de ser amigables y amorosos, los Labrador Retrievers son muy protectores de su familia y amigos, y pueden ser firmes y valientes en defensa de sus seres queridos. "
    ," Los Labrador Retrievers necesitan ejercicio regular y estimulación mental para ser felices y saludables, y pueden ser tercos e independientes.El Labrador Retriever, también conocido como el Labrador Retriever, es un perro mediano que se originó en Canadá en el siglo XIX.";
   
}


function Caso5(){
    document.getElementById("raza5").innerText="El pug es una raza de perro con origen histórico en China, pero con el patrocinio del Reino Unido.","Historia: Algunos creen que la raza era originaria del Lejano Oriente, mientras que otros pensaban que fue en Europa. Actualmente se acepta, mayoritariamente, que el Pug tuvo su origen en China, desde donde pasó a Japón y más tarde a Europa. En China existe, desde hace mucho tiempo, una raza canina llamada Happa , que es similar a un Pequinés con el pelo liso.";




   
   
}
 
function Caso6(){
    document.getElementById("raza6").innerText="El San Bernardo, también conocido como el Gran San Bernardo, es un perro grande que se originó en los Alpes suizos en el siglo XVIII. Está clasificado como un perro de trabajo y un perro de familia, lo que significa que está diseñado para trabajar con ganado y hacer compañía a los seres humanos.* Los San Bernardo son muy inteligentes y capaces de trabajar en diferentes condiciones climáticas y paisajes.",
    "Los San Bernardo son conocidos por su lealtad, valentía, inteligencia y por ser buenos con los niños y las personas. A pesar de su reputación de ser amigable y cariñoso, los San Bernardo son capaces de ser firmes y protectores de su familia y amigos.";
}
 
function Caso7(){
    document.getElementById("raza7").innerText=" El Gran Danés, también conocido como el Danish Mastiff, es un perro gigante que se originó en Reino Unido en el siglo XIX.Está clasificado como un perro de trabajo y un perro de compañía, lo que significa que está diseñado para trabajar con ganado y hacer compañía a los seres humanos.";
}
 
function Caso8(){
    document.getElementById("raza8").innerText="Husky siberiano de veinticuatro meses de edad. El Husky Siberiano vio la luz entre estos últimos, generalmente asentados en las costas del mar de Bering, en el Ártico. Debido a esto, la pureza del Husky Siberiano ha tenido que ser recuperada genéticamente hasta en dos ocasiones y es imposible saber cómo eran exactamente en sus orígenes","Un husky llamado Togo y todos sus compañeros, incluyendo a Balto, atravesaron el estrecho de Bering y llevaron el suero necesario.";
}
 
function Caso9(){
    document.getElementById("raza9").innerText="El chihuahua,11​ también conocido como chihuahueño,12​ es una raza de perro originaria de México, una de las razas de perros más antiguas del continente americano, además de ser el perro más pequeño del mundo. Historia :Vasijas con efigies de perro, que también parecen representar al chihuahua, y datan de alrededor del año 1325 han sido descubiertas en los actuales estados estadounidenses de Georgia y Tennessee.";
}


function Caso10(){
    document.getElementById("raza10").innerText="El pit bull terrier americano es una raza de perro originaria de Estados Unidos, que surgió a partir de la raza de los bull-and-terriers, importados desde el Reino Unido en el siglo xix. Se utilizaban como perros de pelea hasta que estos eventos fueron prohibidos en 1976. Actualmente son criados como mascotas y atletas en deportes legales aunque sigue siendo la raza predilecta en las peleas de perros por poseer una mordida sumamente fuerte de hasta 230 psi . 4​5​ Los APBT pueden mostrar agresión hacia otros perros, personas y animales si no se les da la educación adecuada, pues tienen una predisposición genética a ser agresivos,",
    " al ser ese es un requisito necesario para que un perro de pelea cumpla su función";
}


function Caso11(){
    document.getElementById("raza11").innerText="El Schnauzer es una raza canina que se originó en Alemania durante los siglos XV y XVI. Los Schnauzer fueron criados para perseguir y cazar.Amigables y cariñosos, los schnauzer se integran bien dentro de la vida familiar y se llevarán bien con los niños y otros perros, siempre y cuando estén correctamente socializados y entrenados. El schnauzer siempre está alerta, haciendo un excelente perro guardián, aunque su naturaleza vigilante puede llevarlo a ladrar persistentemente. Algunos schnauzer necesitan que se les quite el pelo muerto de forma manual.";
}
 
function Caso12(){
    document.getElementById("raza12").innerText="El shih tzu es una raza de perro originaria de Tíbet,La romanización Wade-Giles estaba en uso cuando la raza fue introducida por primera vez en los Estados Unidos, pero en los tiempos modernos se utiliza la romanización Pinyin, haciéndolo shīzi.Durante el siglo xvII el Dalai Lama obsequió al Emperador algunos ejemplares de esta raza. Sin embargo, la invasión japonesa en China durante ese mismo año ocasionó que la raza se extinguiera en su propio país de origen.";
}
 
function Caso13(){
    document.getElementById("raza13").innerText="El bóxer viene de dos perros tipo mastín utilizados como perros de caza durante la Edad Media en Alemania. El bóxer es una raza de perro de trabajo y compañía de origen alemán, tipo moloso, de tamaño mediano.",
    "Friedrun Stockmann y su esposo Phillp​ considerados los «padres de la raza bóxer» gracias a su criadero llamado vom Dom. Los sucesos bélicos en ese tiempo ocasionaron una considerable disminución de la raza, aunque ellos la mantuvieron estable.";
}


function Caso14(){
    document.getElementById("raza14").innerText="La Salchicha, también conocida como el Dachshund, es un perro de tamaño pequeño a mediano que se originó en Alemania en el siglo XIX. La Dachshund, también conocida como la Salchicha Alemana, es un perro pequeño que se originó en Alemania en el siglo XVIII.";
}
   
