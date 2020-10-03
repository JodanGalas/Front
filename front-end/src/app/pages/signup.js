import React from 'react'
import NavBar from '../components/navbarApp'
import './global.css';
import './App.css';
import './SignupeAbout.css';
import Logo from '../images/Logo Menor.png'
import './backbtn.css';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Back from '../images/background.png'


function App() {
  return (
    <div><img src={Back} style={{width:"100%",height:"100%",zIndex:"-1",position:"absolute",opacity:"0.5"}}/>
    <div id="app" style={{zIndex:"1",paddingTop:"100px"}} >
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
      <Link to="/">
      <button className="btn-circle" onClick="history.go(-1)" style={{marginTop:"500px"}}><span class="glyphicon glyphicon-chevron-left"></span></button>
      </Link>
      <aside style={{marginLeft:"auto"}}>
        <strong>CADASTRO</strong>
        <form action="" method="post">
          <div class="input-block" style={{marginTop:"90px"}}>
            <label htmlFor="name">Nome:</label>
            <input class="form-control" type="text" name="name" id="name" required />
          </div>

          <div class="input-block">
            <label htmlFor="email">E-mail:</label>
            <input class="form-control" type="email" name="email" id="email" required />
          </div>

          <div class="input-block">
            <label htmlFor="senha">Senha:</label>
            <input class="form-control" type="password" name="senha" id="senha" required />
          </div>

          <button type="submit">CADASTRAR</button>
        </form>
      </aside>
  
    </div></div>
  );
}

export default App;