import React from 'react'
import './global.css';
import './App.css';
import './Connection.css';
import './backbtn.css';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Back from '../images/background.png'
import Examples from './showapi'
import Show from './showapi';
import { Label } from '@material-ui/icons';
import Show2 from './show2';
import './Deparashp.css';
import Sucesso from '../components/modalsucesso'




function App() {
  
  return (

    <div><img src={Back} style={{width:"100%",height:"100%",zIndex:"-1",position:"absolute",opacity:"0.5"}}/>
    
    <div id="app" style={{zIndex:"1",paddingTop:"0px",paddingLeft:"0px"}} >
      
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
      <Link to="/connection">
      <button className="btn-circle" onClick="history.go(-1)"><span class="glyphicon glyphicon-chevron-left"></span></button>
      </Link>
    <div class="containerdepara" style={{marginTop:100,alignContent:"center"}}>
      
      <Grid container spacing={0}>
    
        <Grid xs={12} sm={5}><label>Upload de Arquivo</label><Show/></Grid>
        <Grid xs={12} sm={2}></Grid>
        <Grid xs={12} sm={5}><label>Tabela do Banco de dados</label><Show2/></Grid>
      </Grid>
      <Sucesso/>
      
      </div>
     
    </div>
   
      </div>
  
 
  );
}

export default App;