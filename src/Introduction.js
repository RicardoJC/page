import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

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
    width: '100',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url('../richard.jpg')`,
    //backgroundImage: `url(${"https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/developer-writing-code.jpg?itok=Edfj75lB"})`,
    //    backgroundImage: `url(${"https://s2.best-wallpaper.net/wallpaper/1920x1080/1108/Four-penguins_1920x1080.jpg"})`,

  },
  button:{
    fontSize: '16px',
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor: '#FFF',
    borderRadius: '1em',
    '&:hover': {
      backgroundColor: '#FFFFFFAA',
      boxShadow: 'none',
    },

  },
    textName:{
      color:'#FFFFFF',
      fontSize: '9vw',
      fontWeight:'bold',

    },
    textDescription:{
      color:'#FFFFFF',
    }

}));


function Introduction() {

  const classes = useStyles();

  return (
    <div id="hello" className={classes.root}>
    <table>
      <tr>
        <th>
        <ThemeProvider>
          <Typography variant="body1" className={classes.textDescription}>
            Desarrollador y pensador de la vida a ratos
          </Typography>
        </ThemeProvider>
        </th>
      </tr>
      <tr>
        <th>
        <ThemeProvider>
          <Typography variant="h1" className={classes.textName}>
            ¡Bienvenid@!
          </Typography>
        </ThemeProvider>
        </th>
      </tr>
      <tr>
        <th>
          <Button size="large" className={classes.button} href="#whoami" >¡Hola!</Button>
        </th>
      </tr>
    </table>
    </div>
  );
}

export default Introduction;
