import React from 'react';
import * as weatherActions from '../actions/index';
import BaseComponent from '../containers/baseComponent'
import { Redirect } from 'react-router-dom';
import lupa from './lup.png'
import getCompetitionInfo from './CompetitionTable';

class SearchBar extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    //     this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }

    // CompetitionTabel = (e) => {
    //     this.getCompetitionInfo(e.target.value);
    //     console.log(this.state.valueSelect)
    //   }
    handleChange(e){
		this.setState({
            searchString: e && e.target && e.target.value ? e.target.value : ''
        });

    }

    render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
            <div className="Search">
                <form className="searchF">
                     <input type="search"  placeholder="Поиск..."  value={this.state.searchString} ref="filterText" onChange={(e) => this.handleChange(e)}/> 
                     <button className='SearchButton' onClick={() => this.props.onSearch(this.state.searchString)}><img src={lupa} alt='lupa' className="lupa"/></button>
                 </form>
              </div>
        )
    }
}
export default SearchBar;