//*****************************IMG LOGO**************************************** */


const logoLD = document.querySelector('.header-image'); 

logoLD.addEventListener('click', ()=>{

  window.open('https://logisticadigital.com.co/');

  Swal.fire({
    imageUrl: 'img/Logos/logoLD.png',
    imageHeight: 200,
    imageAlt: 'A tall image',
    text: 'Conectando al Mundo'
  })

})


//********************************IMG PUNTO 1 ********************************* */

//FIBRA

const imgFibra = document.querySelector('.img-fullconectf'); 

imgFibra.addEventListener("mouseover", function() {
  imgFibra.style.cursor = "pointer";
});

imgFibra.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/fullfibra2.jpeg',
    text: 'Conexión general Fibra Óptica',
    imageAlt: 'A tall image'
  })

})

const imgFibra2= document.querySelector('.img-fullconectf2'); 

imgFibra2.addEventListener("mouseover", function() {
  imgFibra2.style.cursor = "pointer";
});

imgFibra2.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/fullfibra1.jpeg',
    text: 'Conexión general Fibra Óptica',
    imageAlt: 'A tall image'
  })

})


//RADIO
const imgRadio = document.querySelector('.img-fullconectr'); 

imgRadio.addEventListener("mouseover", function() {
  imgRadio.style.cursor = "pointer";
});

imgRadio.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/fullradio.jpeg',
    text: 'Conexión general Radioenlace',
    imageAlt: 'A tall image'
  })

})

const imgRadio2 = document.querySelector('.img-fullconectr2'); 

imgRadio2.addEventListener("mouseover", function() {
  imgRadio2.style.cursor = "pointer";
});

imgRadio2.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/fullradio0.jpg',
    text: 'Conexión general Radioenlace',
    imageAlt: 'A tall image'
  })

})


//*********************************IMG INT ANTENA******************************* */

const imgAntena = document.querySelector('.img-install-antena'); 

imgAntena.addEventListener("mouseover", function() {
  imgAntena.style.cursor = "pointer";
});

imgAntena.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Antenas/antenar.jpg',
    text: 'Apuntamiento, Línea de Vista',
    imageAlt: 'A tall image'
  })

})

//*******************************IMG PUNTO 2 ************************************/

const imgSoprteF1 = document.querySelector('.conection-fibra-r'); 

imgSoprteF1.addEventListener("mouseover", function() {
  imgSoprteF1.style.cursor = "pointer";
});

imgSoprteF1.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/fullfibra0.jpg',
    text: 'Conexión general Fibra Óptica',
    imageAlt: 'A tall image'
  })

})


const imgSoprteF2 = document.querySelector('.conection-fibra-o'); 

imgSoprteF2.addEventListener("mouseover", function() {
  imgSoprteF2.style.cursor = "pointer";
});

imgSoprteF2.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/routerfconection.jpeg',
    text: 'El internet se conecta al puerto WAN o puerto color Azul del router',
    imageAlt: 'A tall image'
  })

})


const imgSoprteR1 = document.querySelector('.conection-radio-p'); 

imgSoprteR1.addEventListener("mouseover", function() {
  imgSoprteR1.style.cursor = "pointer";
});

imgSoprteR1.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/poeconection.jpeg',
    
    imageAlt: 'A tall image'
  })

})


const imgSoprteR2 = document.querySelector('.conection-radio-p1'); 

imgSoprteR2.addEventListener("mouseover", function() {
  imgSoprteR2.style.cursor = "pointer";
});

imgSoprteR2.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/routerrconection.jpeg',
    text: 'El internet se conecta al puerto LAN o puerto color Naranja del router',
    imageAlt: 'A tall image'
  })

})


const imgSoprteR3 = document.querySelector('.conection-radio-r'); 

imgSoprteR3.addEventListener("mouseover", function() {
  imgSoprteR3.style.cursor = "pointer";
});

imgSoprteR3.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/lucesrradio0.jpg',
    
    imageAlt: 'A tall image'
  })

})

//Toma CORRIENTE

const imgSoprteE = document.querySelector('.conection-energy'); 

imgSoprteE.addEventListener("mouseover", function() {
  imgSoprteE.style.cursor = "pointer";
});

imgSoprteE.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'https://jdelectricos.com.co/wp-content/uploads/2021/10/tomacorrientes.jpeg',
    text: 'Desconéctalos de la toma y conecta de nuevo',
    
    imageAlt: 'A tall image'
  })

})

//****************************IMG PASO 4************************************* */

const lucesFibraOnu = document.querySelector('.luces-fibra-onu'); 

lucesFibraOnu.addEventListener("mouseover", ()=> {
  lucesFibraOnu.style.cursor = "pointer";
});

lucesFibraOnu.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/onu.jpg',
    text: 'Todas las luces deben ser color verde',
    imageAlt: 'A tall image'
  })

})


const lucesFibraRouter = document.querySelector('.luces-fibra-router'); 

lucesFibraRouter.addEventListener("mouseover", ()=> {
  lucesFibraRouter.style.cursor = "pointer";
});

lucesFibraRouter.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/lucesrfibra.jpg',
    text: 'Todas las luces deben ser color verde',
    imageAlt: 'A tall image'
  })

})


const lucesRadioPoe = document.querySelector('.luces-radio-p'); 

lucesRadioPoe.addEventListener("mouseover", ()=> {
  lucesRadioPoe.style.cursor = "pointer";
})

lucesRadioPoe.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/poe.jpg',
    text: 'Muestra una luz color blanco',
    imageAlt: 'A tall image'
  })

});

const lucesRadioRouter = document.querySelector('.luces-radio-r'); 

lucesRadioRouter.addEventListener("mouseover", ()=> {
  lucesRadioRouter.style.cursor = "pointer";
})

lucesRadioRouter.addEventListener('click', ()=>{

  Swal.fire({
    imageUrl: 'img/Conexiones-Internas/lucesrradio.jpg',
    text: 'Muestra 3 luces, no importa que una sea naranja',
    imageAlt: 'A tall image'
  })

});




function irASeccion(select) {
  // Obtener el valor de la opción seleccionada
  const seccionId = select.value;

  // Si se seleccionó una opción válida, desplazarse hacia la sección correspondiente
  if (seccionId) {
    const seccion = document.getElementById(seccionId);
    seccion.scrollIntoView({ behavior: 'smooth' });
  }
}

