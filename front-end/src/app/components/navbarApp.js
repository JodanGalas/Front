import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PersonIcon from '@material-ui/icons/Person';
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component  {
    render(){
        return(
            <div class="float-right">                
                <nav class="navbar navbar-expand-lg navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <section class="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav  pr-3">
                            <Link to="/dashboard"><a className="nav-item nav-link mt-md-3"><AppsIcon/></a></Link>  
                            <Link to="/myProfile"><a className="nav-item nav-link mt-md-3"><PersonIcon/></a></Link>
                            <Link to="/"><a className="nav-item nav-link mt-md-3"><ArrowForwardIcon/></a></Link>
                        </div>
                    </section>
                </nav>                
            </div>
        );
    }
}