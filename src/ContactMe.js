import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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

theme.typography.h3 = {
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
    height: 'auto',
    width: '100',
    paddingTop:'5%',
    paddingStart:'10%',
    paddingEnd:'10%',
    paddingBottom:'2%',
    display: 'inherit',
    alignItems: 'center',
    backgroundColor:'#000',
    color:'#FFF'
  },
  textName:{
    fontWeight:'bold',
  },
  textDescription:{
    whiteSpace: 'pre-line',

  },
  textEmail:{
    fontWeight:'bold',
    paddingTop:'5%',
    paddingBottom:'2%',
  },
  linkEmail:{
    color:'#FFF',
    '&:hover': {
      color: '#888888',
      textDecoration:'none',
    },
  },
  hr:{
    border:'2px solid #1868e3',
    width:'20%',
    marginStart: '2px',
    marginTop: '5px',

  },
  icon:{
    color: '#888',
    '&:hover': {
      color: '#FFF',
    },
  },
  footer:{
    width: '100%',
    color:'#888',
    textAlign: 'center',
    backgroundColor:'#000',
  }
}));


function ContactMe(){

  const classes = useStyles();

  return(
    <div id="contact" className={classes.root}>
    <div>

      <ThemeProvider theme={theme}>
      <Typography variant="h1" className={classes.textName}>
        Contáctame
      </Typography>
      <hr className={classes.hr}/>
      <Typography variant="body1" className={classes.textDescription}>
        Te invito a contactarme para realizar proyectos increíbles.
      </Typography>
      <Typography className={classes.textEmail} variant="h3">
        <Link className={classes.linkEmail} href="mailto:ricardoj.epc@gmail.com" target="_blank" rel="noreferrer">
          ricardoj.epc@gmail.com
        </Link>
      </Typography>
      </ThemeProvider>


      <IconButton className={classes.icon} target="_blank" rel="noreferrer"
      href='https://github.com/RicardoJC'>
        <GitHubIcon/>
      </IconButton>
      <IconButton  className={classes.icon} target="_blank" rel="noreferrer"
      href='https://www.linkedin.com/in/ricardojicr/'>
        <LinkedInIcon/>
      </IconButton>


    </div>

    <div className={classes.footer}>
      <Typography variant="span">
        Ricardo JC 2020 | {'<> with ❤️'}
      </Typography>
    </div>

    </div>

  );

}



export default ContactMe;
