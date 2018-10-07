import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import BaseComponent from './baseComponent';
import * as actions from '../actions/competitions';
import * as actionsCompetitions from '../actions/competitions';
import { mainPageTemplate } from '../templates/mainPageTemplate';

class MainPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      sortValue: null,
      pageNo: 0,
      pageSize: 10,
      totalPages: 0,
      firstPage: 0,
      pageInf: [1]
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
      pageNo: page
    }, () => this.getCompetitionInfo());
    console.log(this.state);
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
    }).then(res => this.goToState('/main'));
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
    for (let i = 1; i < this.state.content.totalPages+1; i++){
      console.log(this.state);
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
      mainPageTemplate(this)
    );
  }
}

export default MainPage;
