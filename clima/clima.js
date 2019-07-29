const axios = require('axios');
const lugar = require('../lugar/lugar');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b9dbf3a0a3681461a60891f7c4e1c18c&units=metric`);

    return resp.data.main.temp;
}


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await getClima(coords.lat, coords.lng);
        return (`El clima de ${direccion} es de ${temp}`);

    } catch (error) {
        return (`No se pudo determinar el clima de ${dir}`);
    }

}

module.exports = {
    getClima,
    getInfo
}