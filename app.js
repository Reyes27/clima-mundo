const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion e la cuidad para obetener el clima',
        demand: true
    }
}).argv;

clima.getInfo(argv.direccion).then(console.log);
//lugar.getLugarLatLng(argv.direccion).then(console.log);

//clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);