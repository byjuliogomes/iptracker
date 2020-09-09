const axios = require('axios');

const token = "at_AcRKZYvYqDsLMFdWrXZLRGBpAre1k";
const ip = "191.209.21.11";



export default function IP() {
return axios.get(`https://geo.ipify.org/api/v1?apiKey=${token}&ipAddress=${ip}`)
    .then(function (response) {

        const location = response.data.location;
        var data = {
            lat: location.lat,
            lng: location.lng,
            country: location.country,
            region: location.region,
            city: location.city,
            timezone: location.timezone,
            isp: response.data.isp,
            ipnumber: response.data.ip,
        };
        console.log(data.ipnumber)
        return data;
    });
}