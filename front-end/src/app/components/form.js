
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Grid from '@material-ui/core/Grid';
import '../pages/Connection.css'
import { Link } from 'react-router-dom'
import Show from '../pages/showapi';
import { con } from '../services/shape';
import { useState } from 'react';




export default function Formcon(){
      const [host, setHost] = useState('');
    const [database, setDatabase] = useState('');
    const [username, setUsername] = useState('');
    const [port, setPort] = useState('');
    const [password, setPassword] = useState('');
    const [spinning, setSpinning] = useState(false);
    const history = '../pages/connection';

  async function handleLogin() {

    try{
      console.log("resultado");
        setSpinning(true);
        console.log("resultado");
        const response = await con( host, port, database, username, password );
        console.log("resultado");
        if(response.status === 200){
         /* history.push('../pages/connection')*/
      }
      else{
          setSpinning(false);
      }             
   
    } catch (err) {
        console.log(err);
        setSpinning(false);
    }
}    


return(


<form  onSubmit={handleLogin}>
          <div class="input-block" style={{marginTop:"40px"}}>
            <label htmlFor="text">Host</label>
            <input class="form-control" type="text" name="host" id="host" onChange={e => setHost(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="text">Database</label>
            <input class="form-control" type="text" name="db" id="db" onChange={e => setDatabase(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="text">Usuário</label>
            <input class="form-control" type="text" name="user" id="user" onChange={e => setUsername(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="text">Porta</label>
            <input class="form-control" type="text" name="porta" id="porta" onChange={e => setPort(e.target.value)} required />
          </div>

          <div class="input-block">
            <label htmlFor="senha">Senha</label>
            <input class="form-control" type="password" name="senha" id="senha" onChange={e => setPassword(e.target.value)} required />
          </div>
          <Grid container spacing={0}>
          <Grid xs={12} sm={6}>

      <button type="submit" >Conectar</button>
     
          </Grid>
          <Grid xs={12} sm={6}>
          <button type="submit" style={{marginLeft:"auto"}}>Desconectar</button>
          </Grid>
          </Grid>
          <div class="input-block">
          <label htmlFor="senha" style={{color:"#6f6f6f"}}>STATUS:</label>
          </div>
        </form>
)
}

  