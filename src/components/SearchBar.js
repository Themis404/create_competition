import React from 'react';
import BaseComponent from '../containers/baseComponent'
import {Redirect} from 'react-router-dom';
import lupa from './lup.png'

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    }
  }

  handleChange(e) {
    this.setState({
      searchString: e && e.target && e.target.value ? e.target.value : ''
    });
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
        <div className="Search">
          <form className="searchF">
            <input type="search" placeholder="Поиск..." value={this.state.searchString}
                   onChange={(e) => this.handleChange(e)}/>
            <button className='SearchButton' onClick={() => this.props.onSearch(this.state.searchString)}><img
                src={lupa} alt='lupa' className="lupa"/></button>
          </form>
        </div>
    )
  }
}

export default SearchBar;