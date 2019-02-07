import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.8.171:3000',
});

export default api;

/*
  Para emulador no mac: baseURL: 'http://localhost:3000'
  Para emulador do Android - Genymotion: baseURL: 'http://10.0.3.2:3000'
  Para emulador do Android - Android Studio: baseURL: 'http://10.0.2.2:3000'
  Tentar usar o endereço da própria máquina se nada funcionar - Usando isso por causa da execução direta no dispositivo
*/

