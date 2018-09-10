import React from 'react';
import BaseComponent from '../containers/baseComponent'
import {Redirect} from 'react-router-dom';
import lupa from './lup.png'
import * as actions from '../actions/competitions';

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
        searchByName: ''
    }
  }

  handleChange(e){
  	this.setState({
      searchByName: e && e.target && e.target.value ? e.target.value : ''
    }); console.log(this.state)
  }

  render() {
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return (
      <div className="Search">
        <form className="searchF">
           <input type="search"  placeholder="Поиск..."  value={this.state.searchByName} onChange={ e => this.handleChange(e)}/>
           <button className='SearchButton' onClick={() => this.props.onSearch(this.state.searchByName)}><img src={lupa} alt='lupa' className="lupa"/></button>
         </form>
      </div>
    )
  }
}

export default SearchBar;
