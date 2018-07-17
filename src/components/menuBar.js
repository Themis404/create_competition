import React from 'react';
import { Redirect } from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import i from './enduro.png'
class MenuBar extends BaseComponent{

  constructor(props) {
    super(props);
  }

  render(){
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return(
      <div className='menu'>
        <ul>
          <figure><img src={i} alt='logo' className='imgLogo' /></figure>
          <li onClick={() => this.goToState('/main')} >TABLE COMPETITIONS</li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
