import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up('md')] : {
      display: 'none'
  },
  margin: '10px',
  boxShadow: 'none'
  }
});

class ButtonAppBarCollapse extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      wrapper: this.props.dataTarget.replace(/#/,''),
      listMenus: this.props.menu
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(e){
    e.preventDefault();
    let collapsed = document.getElementById(this.state.wrapper);
    if(collapsed.style.display === 'block'){
      collapsed.style.display = 'none';
    }else {
      collapsed.style.display = 'block';
      collapsed.style.backgroundColor = '#00000055';
      collapsed.style.top = '50px';
      collapsed.style.textAlign = 'justify';
      collapsed.style.width = '240px';
      collapsed.style.position = 'absolute';
      collapsed.style.zIndex = 1450;
    }
  }

  render(){

    return (
      <IconButton className={this.props.classes.buttonCollapse} onClick={this.toggleCollapse}>
        <MenuIcon style={{ color: '#FFFFFF' }}/>
      </IconButton>
    );
  }
}

ButtonAppBarCollapse.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBarCollapse);
