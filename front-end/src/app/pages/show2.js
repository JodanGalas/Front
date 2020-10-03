import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import api from '../services/api';





export default class Show2 extends React.Component{
    state = {
      filmes: [],
    }
  
    async componentDidMount() {
      const response = await api.get('star%20wars');
  
      this.setState({ filmes: response.data });
    }
  
    render() {
  
      const { filmes } = this.state;
  
      return (
        <div><p>
          <select id="table">
  {filmes.map(filme => (
            
             <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p><label>Colunas</label>
    {filmes.map(filme => (
              <p>
              <input type="text"  key={filme.show.id} value={filme.show.name} style={{width:"250px"}}/>
              </p>
              ))}
  
  
  
        </div>
        
      );
    };
  };
  