import React from 'react';
import { Redirect } from 'react-router-dom';
import MenuBar from '../components/MenuBar'

class MenuPage extends React.Component{

    constructor(params){
      super(params);
    }

    render(){
      if (this.reload) {
          this.reload = false;
          return <Redirect to={this.redirect} push={true} />;
      }
      return(
        <div>
          <MenuBar/>
          {this.props.children}
        </div>
      );
    }
}
export default MenuPage;
