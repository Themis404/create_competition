import React from 'react';
import * as weatherActions from '../actions/index';
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import lupa from './lup.png'

class SearchBar extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
      }
      componentDidMount() {
        this.getCompName();
      }
    
      getCompName = () => {
        fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/list?page=0&size=5&sort=name,asc&searchByName='+this.state.name)
            .then(response => {
              console.log(response);
              return response.json()
            })
            
        console.log(this.state);
      };
    render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
            <div className="Search">
                <form className="searchF">
                     <input type="search"  placeholder="Поиск..." ref="search" value={this.state.name}/> 
                     <button className='SearchButton' onClick={this.getCompName}><img src={lupa} alt='lupa' className="lupa"/></button>
                 </form>
              </div>
        )
    }
}
export default SearchBar;