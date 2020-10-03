import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import api from '../services/api';


export default class Show extends React.Component {

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
      <div><input type="file"></input><p><label>Colunas do Arquivo Shapefile</label></p><p>
<select id="col1">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col2">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col3">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col4">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col5">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col6">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col7">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col8">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col9">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
<p>
<select id="col10">
  {filmes.map(filme => (
            
            <option  key={filme.show.id}>{filme.show.name}</option>
            ))}
</select></p>
      </div>
      
    );
  };
};



