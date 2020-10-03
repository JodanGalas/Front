
import api from './api';

export const con = async (host,port,database,username,password) => {
    try{
        const response = await api.post('/teste/connection', {host,port,database,username,password});
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}