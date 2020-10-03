import React from 'react';

export default class NavBar extends React.Component  {
    render(){
        return(
            <div>                
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#" style={{color: "#EC942C"}}>WebGis</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <section class="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav  pr-3">
                            <a className="nav-item nav-link mt-md-3" href="#">HOME</a>
                            <a className="nav-item nav-link mt-md-3" href="#">AGRONEGÓCIO</a>
                            <a className="nav-item nav-link mt-md-3" href="#">QUEM SOMOS</a>
                            <a className="nav-item nav-link mt-md-3 mb-3 md-md-0" href="#">SOBRE</a>
                        </div>
                    </section>
                </nav>                
            </div>
        );
    }
}