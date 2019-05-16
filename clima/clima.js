const axios=require('axios');

const getClima= async (lat, lng)=>{

 //asincrona
 const resp  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5e50c8bf0aa785776d88c67e765b3d32&units=metrics`);

    return resp.data.main.temp;
}

module.exports={
    getClima
}