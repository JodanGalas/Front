import React from 'react'

import './global.css';
import './App.css';
import './About.css';
import Logo from '../images/Logo Menor.png'
import './backbtn.css';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Back from '../images/background.png'


function App() {
  return (
    <div><img src={Back} style={{width:"100%",height:"auto",zIndex:"-1",position:"absolute",opacity:"0.5"}}/>
    <div id="app" style={{zIndex:"1"}} >
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
      <Link to="/">
      <button className="btn-circle" onClick="history.go(-1)"><span class="glyphicon glyphicon-chevron-left"></span></button>
      </Link>
      <aside style={{marginLeft:"auto",width:900,paddingTop:40,marginTop:150}}>
        <h1 style={{textAlign:"center",color:"#fe6d00",paddingBottom:70}}>Sobre o Sistema</h1>
        <h4 style={{textAlign:"justify"}}>Essa ferramenta é configurada para entender os arquivos de formato shapefile e realizar conversões, usando regras definidas na etapa de planejamento, buscando compatibilidade com normas oficiais, e carregá-los e manipulá-los no banco de dados geográficos PostgreSQL com extensão Postgis, de acordo com a modelagem física definida pelo cliente. Também realiza o processo inverso de gerar um arquivo shapefile a partir de uma tabela do banco de dados PostgreSQL.</h4>
      </aside>
  
    </div></div>
  );
}

export default App;