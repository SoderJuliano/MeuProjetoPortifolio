import axios from 'axios';

axios.defaults.baseURL = 'https://abra-api.top';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// Configuração de CORS
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,HEAD,PATCH,POST,DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Accept';


export function setNewNotification(data) {
    return axios.post('/notifications', data).then((response) => 
    {
        // console.log('chamada POST executada');
        // console.log(response.data);
    })
}
