import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from './baseComponent'
import SearchBar from '../components/SearchBar.js';
import * as actions from '../actions/competitions';
import * as actionsCompetitions from '../actions/competitions'

class MainPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
          content: [],
          sortValue: null,
          pageNo: 0,
          pageSize: 2,
          totalPages: 0,
          firstPage: 0,
          pageInf: []
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

      goToPage(page){
        this.setState({
          pageNo: page},
          () => this.getCompetitionInfo());
          console.log(this.state)
      }

      goToNext() {
          if (this.state.pageNo === this.state.totalPages - 1) {
            return;
          }
          this.setState({
            pageNo: this.state.pageNo + 1
          }, () => this.getCompetitionInfo());
      }

      deleteCompetition = (e) => {
        console.log(this.state);
        e.preventDefault();
        actionsCompetitions.deleteCopmetitionCard({
          competitionId: this.state.competitionId,
        }).then(res => {this.goToState('/main')})
      }

      putAccessStatus = (e) => {
        console.log(this.state);
        e.preventDefault();
        actionsCompetitions.saveAccessStatus({
          competitionId: this.state.competitionId,
          accessStatus: 'ALIVE'
          }).then(res => {
            console.log(res);
            this.setState({accessStatus: ''});
              console.log(this.state);
          });
      }

      countPage(){
      this.state.pageInf= [];
      for (var i = 1; i < this.state.content.totalPages+1; i++){
        console.log(this.state)
        this.state.pageInf.push(i);
      }
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
              }, () => this.countPage());
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
          <div>
            <div class="modal" id="ModalDialog" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Подтверждение</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Вы действительно хотите удалить соревнование?</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Да</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className="center-block">
                <SearchBar onSearch={ e => this.setState({searchByName: e}, () => this.getCompetitionInfo())}/>
                <div className='btn-group marginBotStandart col-md-12 nonePadding'>
                  <button onClick={() => this.goToState('/create-competition')} className='btn btn-info heightButton col-md-2'><span className='fas fa-plus'></span> Create competition</button>

                </div>
                <h2><p className="text-center col-md-4 col-md-offset-4 nonePadding">COMPETITIONS TABLE</p></h2>
                <div className='row container col-md-center'>
                  <table className="table table-condensed table-striped table-hover ">
                    <thead>
                      <tr className="info active">
                        <th className="text-center col-md-2" onClick={() => this.sortNameCompetitions()}>NAME COMPETITION <span class="fa fa-sort float-right"></span></th>
                        <th className="text-center col-md-2" onClick={() => this.sortDateCompetitions()}>DATE START COMPETITION <span class="fa fa-sort float-right"></span></th>
                        <th className="text-center  col-md-2">DATE END COMPETITION</th>
                        <th className="text-center col-md-1"></th>
                        {/* <th className="th">Description</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {
                        !!this.state.content.content && this.state.content.content.map((contentRow, key) =>
                            <tr key={key} className="tr">
                              <td className="text-center col-md-2" onClick={() =>  this.goToState('/competition/'+contentRow.id)}>{contentRow.name}</td>
                              <td className="text-center col-md-2">{contentRow.dateStart}</td>
                              <td className="text-center col-md-2">{contentRow.dateFinish}</td>
                              <td className="text-center col-md-1">
                                <button id="btn-tooltip" type="button" data-target="#ModalDialog1" data-toggle="modal1" class="btn btn-default" aria-label="Eye" title="Activated">
                                  <span onClick={e => this.putAccessStatus(e)} class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                                </button>
                                <button data-target="#ModalDialog" data-toggle="modal" id="btn-tooltip" type="button" class="btn btn-default" aria-label="Remove" title="Delete">
                                  <span  onClick={e => this.deleteCompetition(e)} class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </button>
                              </td>
                              {/* <td className="td">{contentRow.description}</td> */}
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </div>

                <div className='row-md-2 heightButton col-md-6 col-md-offset-6'>
                  <h5 className='col-md-1 sizePageText nonePadding'><p>Страница</p></h5>

                  <div className="col-md-2">
                    <select className="btn btn-default heightButton" onChange={event => this.setState({pageNo: event && event.target && event.target.value ? event.target.value : null})} onClick={() => this.getCompetitionInfo()} value={this.state.pageNo ? this.state.pageNo : ''}>
                     {
                       !!this.state.pageInf && this.state.pageInf.map((pageCount, key) =>
                       <option key={key} className="" value={pageCount-1}>{pageCount}</option>)
                     }
                   </select>
                 </div>

                  <h5 className='col-md-1 nonePadding marginTopPage'><p>из {this.state.totalPages}</p></h5>
                  <div className='btn-group'>
                    {
                      !!this.state.pageNo &&
                      <button className='btn heightButton col-md-1 colMargin' onClick={() => this.goToPrev()}><span class="fas fa-angle-left"></span></button>
                    }

                    {
                      !this.state.pageNo &&
                      <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => this.goToPrev()}><span class="fas fa-angle-left"></span></button>
                    }
                    {
                      this.state.pageNo < this.state.totalPages - 1 &&
                      <button className='noneFloat btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}><span class="fas fa-angle-right"></span></button>
                    }

                    {
                      this.state.pageNo >= this.state.totalPages - 1 &&
                      <button disabled className='noneFloat btn heightButton col-md-1 colMargin' onClick={() => this.goToNext()}><span class="fas fa-angle-right"></span></button>
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default MainPage;
