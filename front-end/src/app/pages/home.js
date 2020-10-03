import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Login from '../pages/login';
import Image from 'react-bootstrap/Image';

import Globo from '../images/Globo_Atual.PNG'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid1: {
    padding: theme.spacing(0),
  },
  grid2: {
    padding: theme.spacing(5),
    textAlign: 'center',
  },
  grid3:{
    padding: theme.spacing(6),
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      
      
      <div className={classes.root}>
        <Grid container spacing={0}>

          <Grid item xs={12} sm={4} style={{background: "#ededed",}}>
            <div className={classes.grid2}><Login/></div>
          </Grid>


          <Grid item xs={12} sm={8}>
            <div className={classes.grid1}>
                <Image src={Globo} style={{height:"auto",maxWidth:"100%"}}/>
            </div>
          </Grid>
          
         
          
        </Grid>
      </div>
    </div>
  );
}