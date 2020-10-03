import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Grid from '@material-ui/core/Grid';
import '../pages/Connection.css'
import { Link } from 'react-router-dom'
export default class Sucesso extends Component {
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

    render() {
        return (
            <section>
                <input type="button" value="Salvar" style={{width:"auto"}} onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400px" height="50px" effect="fadeInUp" onClickAway={() => this.closeModal()}>
        <strong>Salvo com Sucesso!</strong>
                   <a href="javascript:void(0);" onClick={() => this.closeModal()} style={{color:"#fe6d00"}}>Fechar</a>
                    
                </Modal>
            </section>
        );
    }
}