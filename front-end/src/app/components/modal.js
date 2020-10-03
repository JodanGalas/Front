import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Grid from '@material-ui/core/Grid';
import '../pages/Connection.css'
import { Link } from 'react-router-dom'
import Show from '../pages/showapi';
import Formcon from './form'
    
    

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

    
        openModal() {
        this.setState({
            visible : true
        });
    }

        closeModal() {
        this.setState({
            visible : false
        });
    }

    render(){
        return (
            <section>
                
                <input type="button" value="Conectar-se ao PostgreSQL" onClick={() => this.openModal()}  style={{textAlign:"center"}}/>
                <Modal visible={this.state.visible} width="400px" height="600px" effect="fadeInDown" onClickAway={() => this.closeModal()}>
               
                
        <strong>Conecte-se ao PostgreSQL</strong>
       
          <Formcon/>

                   <a href="javascript:void(0);" onClick={() => this.closeModal()} style={{color:"#fe6d00"}}>Fechar</a>
                    
                </Modal>
            </section>
        );
    }
  }












                        