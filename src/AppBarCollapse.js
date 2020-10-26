import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBarCollapse from './ButtonAppBarCollapse';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    position: 'absolute',
    right: 0
  },
  wrapper: {
    [theme.breakpoints.down('md')] : {
      display: 'none'
  },
    margin:'10px',
    paddingLeft: '16px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent'
  },

  listContainer: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  },
  listMenus: {
    float: 'left'
  },

  listItems: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '6px 8px'
  }
});

class AppBarCollapse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }
  render(){

    return(
      <div className={this.props.classes.root}>
        <ButtonAppBarCollapse dataTarget='#appbar-collapse'/>
        <div className={this.props.classes.wrapper} id='appbar-collapse'>
          <ul className={this.props.classes.listContainer} id='list-appbar-collapse'>
          <Button color="inherit" href="#hello">Home</Button>
          <Button color="inherit" href="#projects">Proyectos</Button>
          <Button color="inherit" href="#contact">Contacto</Button>
          </ul>
        </div>
      </div>
    );
  }

}

AppBarCollapse.propTypes = {
classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarCollapse);
