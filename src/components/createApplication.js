import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import * as actions from '../actions/index';

class createApplication extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      fatherName: '',
      age: '',
      phone: '',
      emergencyPhone: '',
      email: '',
      recingMastery: '',
      vehicleType: '',
      gender: '',
      competition: '',
      competitionId: 1
    }
  }

  componentDidMount() {
    this.getCompetitionInfo();
  }

  getCompetitionInfo = () => {
    actions.list({
    }).then((content) => {
          this.setState({
            content: content
          });
        });
  }

  getActivCompetition = () => {

  }

  handleSubmit = (e) => {
    console.log(this.state);
    fetch('https://afternoon-woodland-86438.herokuapp.com/participants/create', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
        fatherName: this.state.fatherName,
        age: this.state.age,
        phone: this.state.phone,
        emergencyPhone: this.state.emergencyPhone,
        email: this.state.email,
        recingMastery: this.state. recingMastery,
        vehicleType: this.state.vehicleType,
        competition: this.state.competition,
        gender: this.state.gender
      })
    }).then(res => {
      console.log(res);
      this.setState({name: '', surname: '', fatherName: '', age: '', phone: '', emergencyPhone: '', email: '', recingMastery: '', vehicleType: '', gender: ''});
      console.log(this.state);
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

  updateName(e) {
    this.setState( {name: e.target.value} );
  }

  updateSurname(e) {
    this.setState( {surname: e.target.value} )
  }

  updateFatherName(e) {
    this.setState( {fatherName: e.target.value} )
  }

  updateAge(e) {
    this.setState( {age: e.target.value} )
  }

  updatePhone(e) {
    this.setState( {phone: e.target.value} )
  }

  updateEmergencyPhone(e) {
    this.setState( {emergencyPhone: e.target.value} )
  }

  updateEmail(e) {
    this.setState( {email: e.target.value} )
  }

  updateRecingMastery(e) {
    this.setState( {recingMastery: e.target.value} )
  }

  updateVehicleType(e) {
    this.setState( {vehicleType: e.target.value} )
  }

  updateGender(e) {
    this.setState( {gender: e.target.value} )
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
      <div className="col-md-12 nonePadding">
        <form onSubmit={this.handleSubmit} className=''>
          <h2 className="text-center col-md-12 marginTopStandart">Заявление на участие в соревновании:</h2>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Имя*</p></h5>
          <input required id='inputName' className="form-control" placeholder = "Иван"
                  value={this.state.name}
                  onChange={e => this.updateName(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Фамилия*</p></h5>
          <input required id='inputSurname' className="form-control" placeholder = "Иванов"
                  value={this.state.surname}
                  onChange={e => this.updateSurname(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Отчество</p></h5>
          <input id='inputLastName' className="form-control" placeholder = "Иванович"
                  value={this.state.fatherName}
                  onChange={e => this.updateFatherName(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Возраст*</p></h5>
          <input required type = 'number' id='inputAge' className="form-control"
                  value={this.state.age}
                  onChange={e => this.updateAge(e)}></input>
                <h5><p className='col-md-12 nonePadding marginTopStandart'>Пол*</p></h5>
          <input required id='inputSurname' className="form-control" placeholder = "MALE/FEMALE"
                  value={this.state.gender}
                  onChange={e => this.updateGender(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Введите свой номер телефона*</p></h5>
          <input required type='tel' id='inputNumber' className="form-control" placeholder = "+7 "
                  value={this.state.phone}
                  onChange={e => this.updatePhone(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Введите номер телефона в случае ЧС*</p></h5>
          <input required type='tel' id='inputNumberEs' className="form-control" placeholder = "+7 "
                  value={this.state.emergencyPhone}
                  onChange={e => this.updateEmergencyPhone(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Адрес электронной почты*</p></h5>
          <input required type='email' id='inputEmail' className="form-control" placeholder = "email@email.ru"
                  value={this.state.email}
                  onChange={e => this.updateEmail(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Уровень подготовки*</p></h5>
          <input required id='inputLevel' className="form-control"  placeholder = 'NEWBIE, INTERMEDIATE, PROFESSIONAL'
                  value={this.state.recingMastery}
                  onChange={e => this.updateRecingMastery(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Тип транспортного средсва*</p></h5>
          <input required id='inputTypeTransport' className="form-control" placeholder = 'MOTORCYCLE/ATV'
                  value={this.state.vehicleType}
                  onChange={e => this.updateVehicleType(e)}></input>
          <button type="submit" className="btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart">Отправить</button>
        </form>
      </div>
    )
  }
}

export default createApplication;
