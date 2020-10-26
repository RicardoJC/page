import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AppBarCollapse from './AppBarCollapse';
import Introduction from './Introduction';
import WhoIAm from './WhoIAm';
import ContactMe from './ContactMe';
import Project from './Project';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
    background: '#00000033',
    boxShadow: 'none',
  },
}));


function App(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            RicardoJC
          </Typography>
          <AppBarCollapse/>
        </Toolbar>
      </AppBar>
      <Introduction/>
      <WhoIAm/>
      <Project/>
      <ContactMe/>

    </div>
  );
}

export default App;
