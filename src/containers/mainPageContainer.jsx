import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from './baseComponent'
import SearchBar from '../components/SearchBar.js';
import * as actions from '../actions/competitions';

class MainPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
          content: [],
          sortValue: null,
          pageNo: 0,
          pageSize: 4,
          totalPages: 0,
        };
      }

      componentDidMount() {
        this.getCompetitionInfo();
      }


      goToPrev() {
          if (!this.state.pageNo) {
            return;
          }
          this.setState({
            pageNo: this.state.pageNo - 1
          }, () => this.getCompetitionInfo());
      }

      goToNext() {
          if (this.state.pageNo === this.state.totalPages - 1) {
            return;
          }
          this.setState({
            pageNo: this.state.pageNo + 1
          }, () => this.getCompetitionInfo());
      }

      getCompetitionInfo = () => {
        actions.list({
          page: this.state.pageNo,
          size: this.state.pageSize,
          sort: this.state.sortValue ? this.state.sortValue : null,
          searchByName: this.state.searchByName ? this.state.searchByName: null
        }).then((content) => {
              this.setState({
                content: content,
                totalPages: content.totalPages
              });
            });
      }

      sortNameCompetitions = () => {
        this.setState({
          sortValue: this.state.sortValue === 'name,asc' ? 'name,desc' : 'name,asc'
        }, () => this.getCompetitionInfo());
      }

      sortDateCompetitions = () => {
        this.setState({
          sortValue: this.state.sortValue === 'dateStart,asc' ? 'dateStart,desc' : 'dateStart,asc'
        }, () => this.getCompetitionInfo());
      }

      render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
          <div className='container'>
            <div className="center-block">
              <SearchBar onSearch={ e => this.setState({searchByName: e}, () => this.getCompetitionInfo())}/>
              <div className='btn-group marginBotStandart col-md-12 nonePadding'>
                <button onClick={() => this.goToState('/create-competition')} className='btn btn-info heightButton col-md-2'><span className='fas fa-plus'></span> Create competition</button>

              </div>
              <h3><p className="text-center col-md-4 col-md-offset-4 nonePadding">COMPETITIONS TABLE</p></h3>
              <div className='row container col-md-center'>
                <table className="table table-condensed table-striped table-hover">
                  <thead>
                    <tr className="info active">
                      <th className="text-center col-md-3" onClick={() => this.sortNameCompetitions()}>NAME COMPETITION <span class="fa fa-sort float-right"></span></th>
                      <th className="text-center col-md-2" onClick={() => this.sortDateCompetitions()}>DATE START COMPETITION <span class="fa fa-sort float-right"></span></th>
                      <th className="text-center  col-md-2">DATE END COMPETITION</th>
                      {/* <th className="th">Description</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {
                      !!this.state.content.content && this.state.content.content.map((contentRow, key) =>
                          <tr key={key} className="tr">
                            <td className="text-center col-md-3" onClick={() =>  this.goToState('/competition/'+contentRow.id)}>{contentRow.name}</td>
                            <td className="text-center col-md-2">{contentRow.dateStart}</td>
                            <td className="text-center col-md-2">{contentRow.dateFinish}</td>
                            {/* <td className="td">{contentRow.description}</td> */}
                          </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>

              <div className='row-md-1 heightButton'>
                <div className='col-md-offset-5'>
                {
                  !!this.state.pageNo &&
                  <button className='btn heightButton col-md-1 colMargin' onClick={() => this.goToPrev()}><span class="fas fa-angle-left"></span></button>
                }
                {
                  !this.state.pageNo &&
                  <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => this.goToPrev()}><span class="fas fa-angle-left"></span></button>
                }
                  <h4><p className='col-md-1 colMargin heightButton btn text-center '>{this.state.pageNo+1}/{this.state.totalPages}</p></h4>
                {
                  this.state.pageNo < this.state.totalPages - 1 &&
                  <button className='btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}><span class="fas fa-angle-right"></span></button>
                }
                {
                  this.state.pageNo >= this.state.totalPages - 1 &&
                  <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}><span class="fas fa-angle-right"></span></button>
                }
              </div>
            </div>

            </div>
          </div>
        )
    }
}

export default MainPage;
