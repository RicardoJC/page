import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '32px',
  '@media (min-width:600px)': {
    fontSize: '42px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5vw',
  },
};

theme.typography.body1 = {
  fontSize: '14px',
  '@media (min-width:600px)': {
    fontSize: '18px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
  },
};



const useStyles = makeStyles(theme => ({
  root:{
    height:'auto',
    width:'100',
    paddingTop:'10%',
    paddingStart:'10%',
    paddingEnd:'10%',
    paddingBottom:'10%',
    display: 'inherit',
    alignItems: 'center',
    backgroundColor:'#1868e3',
  },

  textName:{
    color:'#FFFFFF',
    fontWeight:'bold',
  },
  textDescription:{
    color:'#FFFFFF',
    whiteSpace: 'pre-line',
  },
  hr:{
    border:'2px solid white',
    width:'20%',
    marginStart: '2px',
    marginTop: '5px',
    marginBottom: '10px',

  }

}));



function WhoIAm() {

  const classes = useStyles();


  return(
    <div id="whoami" className={classes.root}>
    <ThemeProvider>
      <Typography variant="h1" className={classes.textName}>
        Soy Richard
      </Typography>
      <hr className={classes.hr}/>
      <Typography variant="body1" className={classes.textDescription}>
      {"\n"}
        Tengo experiencia resolviendo problemas con ayuda de la tecnología.
        En mi tiempo libre estudio japonés y practico karate.
        Me gusta leer novelas o historias de diferentes culturas y su paso
        por la vida.
        Además, me gustan los videojuegos y mi compositor favorito es Tchaikovsky.
      </Typography>
      <Typography variant="span" className={classes.textDescription}>

      </Typography>

      </ThemeProvider>

    </div>
  );

}

export default WhoIAm;
