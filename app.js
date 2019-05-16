const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options(
    {
        direccion:{
            alias:'d',
            desc:'direccion de la ciudad pra obtener el clima',
            demand:true
        }

    }).argv;

//argv.direccion
// lugar.getLugarLatLng(argv.direccion)
// .then(console.log)

// clima.getClima(40.750000, -74.000000)
// .then(console.log)
// .catch(console.log);

 const getInfo= async(direccion) =>{
     
    try {
        const coordenadas = await  lugar.getLugarLatLng(direccion);
        const temperatura = await  clima.getClima(coordenadas.lat, coordenadas.lng);
        
        return `El clima de ${coordenadas.direccion} es de ${temperatura} .`;
    } 
    catch (error) {
        return `no  se pudo determinar el clima de ${direccion}`;
    }
   

  
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)