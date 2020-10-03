import React from 'react'

import './global.css';
import './App.css';
import './Connection.css';
import Logo from '../images/Logo Menor.png'
import './backbtn.css';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Back from '../images/background.png'
import Doc from '../images/document.png'
import Hdl from '../images/handle.png'
import DB from '../images/server.png'


function App() {
  return (

    <div><img src={Back} style={{width:"100%",height:"100%",zIndex:"-1",position:"absolute",opacity:"0.5"}}/>
    
    <div id="app" style={{zIndex:"1",paddingTop:"0px",paddingLeft:"0px"}} >
      
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
      <Link to="/">
      <button className="btn-circle" onClick="history.go(-1)"><span class="glyphicon glyphicon-chevron-left"></span></button>
      </Link>
      <divajuste>
      <label style={{ paddingLeft:35, fontSize:"25px", fontFamily:"calibri", color: "Black"}}>Escolha o que deseja fazer:</label>
      </divajuste>
      <bgbtns style={{backgroundColor: 'rgba(52, 52, 52, 0.0)', }}>
        

      <Grid container spacing={10} style={{marginLeft: 40}}>

          <Grid xs={12} sm={4} style={{marginTop:0}}>
            <img src={Doc} style={{display:'block',margin:'auto',height:60,width:60}}/>
            <Link to="/deparashp">
          <button type="submit" style={{}}>Shapefile</button>
          </Link>
          <label style={{marginBottom:160, marginTop: 10, paddingLeft:25, fontSize:"16px", fontFamily:"calibri", color: "Black",}}>Shapefile para PostgreSQL</label>
          </Grid>

          <Grid xs={12} sm={4} style={{marginTop:180}}>
          <img src={Hdl} style={{display:'block',margin:'auto',height:60,width:60}}/>
          <button type="submit" style={{}}>Manipulação</button>
          <label style={{marginBottom:160, marginTop: 10, paddingLeft:20, fontSize:"16px", fontFamily:"calibri", color: "Black"}}>Manipulação do banco de dados</label>
          </Grid>

          <Grid xs={12} sm={4}>
          <img src={DB} style={{display:'block',margin:'auto',height:60,width:60}}/>
          <button type="submit" style={{}}>PostgreSQL</button>
          <label style={{marginBottom:160, marginTop: 10, paddingLeft:17, fontSize:"16px", fontFamily:"calibri", color: "Black"}}>PostgreSQL para Shapefile</label>
          </Grid>
          
        </Grid>
        </bgbtns></div></div>
  
 
  );
}

export default App;