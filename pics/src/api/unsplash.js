import axios from 'axios';

export default axios.create({
    baseURL :'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 4VNntAKGPldE7kNSCcsLoRGORsB2O4lXuOlXm-el-dw'

    }
});
