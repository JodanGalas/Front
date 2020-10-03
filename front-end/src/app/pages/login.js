import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo Real.png'
import Examples from '../components/modal'
import Con from '../images/databases.png'

export default class Login extends React.Component {
  render(){
    return(

        

        <div class="container mt-md-3" style={{padding:50}}>
        <form>
            <img src={Logo} style={{width:"70%"}}/>
            <h6 style={{color: "#6F6F6F",marginTop:"30px",marginBottom:80}}>Análise de Dados Espaciais</h6>
            <img src={Con}/>

            <Examples/>
            

            
            
            <div className="mt-md-3" style={{paddingTop:105}}>
                <Link className="mt-md-3" to="/about" style={{color:"#6F6F6F"}} >
                    Sobre o Sistema
                </Link>
            </div>

        </form>
    </div>
    )
  }
}
