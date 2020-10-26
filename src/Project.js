import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";

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

theme.typography.body2 = {
  fontSize: '14px',
  '@media (min-width:600px)': {
    fontSize: '18px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
  },
};

theme.typography.h5 = {
  fontSize: '16px',
  '@media (min-width:600px)': {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
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
    backgroundColor:'#FFFFFF',
  },
  textName:{
    color:'#000000',
    fontWeight:'bold',
    paddingBottom:'2%',
  },
  textDescription:{
    color:'#FFFFFF',

  },

  rootCard : {
    width: 345,
    backgroundColor:'#FFF',
    color: '#000',

  },
  media: {
    height: 240,
    backgroundPosition:'center top',
  },

}));



function Project() {

  const classes = useStyles();


  return(
    <div id="projects" className={classes.root}>

    <ThemeProvider>
      <Typography variant="h1" className={classes.textName}>
        Proyectos
      </Typography>
    </ThemeProvider>

    <Grid container spacing={3}>

      <Grid item xs>

        <Card className={classes.rootCard}>
          <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/mipot.png"
            title="Atomic"
          />
        <CardContent>

          <ThemeProvider>
            <Typography gutterBottom variant="h5">
              Atomic Things: MiPOT
            </Typography>

            <Typography variant="body2">
              Con Atomic Things realicé muchas cosas: desarrollé la app de Android con Java,
              bases de datos, arquitectura del sistema, desarrollo backend con NodeJS
              y tomaba juntas importantes de desarrollo.
            </Typography>
          </ThemeProvider>

        </CardContent>
        </CardActionArea>
          <CardActions>
            <Button size="large" color="primary" target="_blank" rel="noreferrer"
            href="http://www.atomicthings.com">
              ¿Quieres saber más?
            </Button>
          </CardActions>
        </Card>

      </Grid>

      <Grid item xs>
        <Card className={classes.rootCard}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/miopers.png"
            title="covid19_unam"
            />
            <CardContent>

            <ThemeProvider>
              <Typography gutterBottom variant="h5">
                Monitoreo de Twitter para COVID19
              </Typography>

              <Typography variant="body2">
                Como miembro del grupo de ingeniería lingüística, desarrollamos un monitor de Twitter
                para evaluar el comportamiento de las personas, estados de ánimo,
                la popularidad de las medidas del tomadas por el gobierno y síntomas de coronavirus.
                Mi aportación fue la primera sección y toda la página web.
              </Typography>
            </ThemeProvider>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary" target="_blank" rel="noreferrer"
            href="http://www.miopers.unam.mx/covid/#/">
              ¿Quieres saber más?
            </Button>
          </CardActions>
        </Card>

      </Grid>

      <Grid item xs>
        <Card className={classes.rootCard}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/creaton.jpg"
            title="Hackaton"
            />
            <CardContent>
            <ThemeProvider>
              <Typography gutterBottom variant="h5">
                Hackaton derechos humanos
              </Typography>

              <Typography variant="body2">
                Ana y yo participamos en un hackatón para juntar nuestras habilidades
                y proponer una solución a un tema muy importante en el país:
                violencia de género. Ganamos en la categoría de Atención a mujeres
                víctimas de violencia. :D
              </Typography>
            </ThemeProvider>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary" target="_blank" rel="noreferrer"
            href="https://www.facebook.com/CreatonPorLosDerechosHumanos/videos/278599159733062/?t=3569">
              ¿Quieres saber más?
            </Button>
          </CardActions>
        </Card>

      </Grid>




    </Grid>


    </div>
  );

}

export default Project;
