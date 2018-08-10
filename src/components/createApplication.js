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
      competitionId: '1',
      gender: '',
      typeGender: [
        {
          name: 'Select by',
          value: ''
        },
        {
          name: 'Female',
          value: 'FEMALE'
        },
        {
          name: 'Male',
          value: 'MALE'
        }],
      recingMastery: '',
      typeMastery: [
        {
          name: 'Select by',
          value: ''
        },
        {
          name: 'Newbie',
          value: 'NEWBIE'
        },
        {
          name: 'Intermediate',
          value: 'INTERMEDIATE'
        },
        {
          name: 'Professional',
          value: 'PROFESSIONAL'
        }],
        vehicleType: '',
        typeVehicle: [
          {
            name: 'Select by',
            value: ''
          },
          {
            name: 'Motorcycle',
            value: 'MOTORCYCLE'
          },
          {
            name: 'ATV',
            value: 'ATV'
          }],
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
        competitionId: this.state.competition,
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
          <select required className='btn btn-default heightButton noneFloat col-md-12' onChange={event => this.setState({gender: event && event.target && event.target.value ? event.target.value : null})} value={this.state.gender ? this.state.gender : ''}>
            {
              this.state.typeGender.map((typeGender, key) =>
                <option key={key} value={typeGender.value}>{typeGender.name}</option>
              )
            }
          </select>
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
          <select required className='btn btn-default heightButton noneFloat col-md-12' onChange={event => this.setState({recingMastery: event && event.target && event.target.value ? event.target.value : null})} value={this.state.recingMastery ? this.state.recingMastery : ''}>
            {
              this.state.typeMastery.map((typeMastery, key) =>
                <option key={key} value={typeMastery.value}>{typeMastery.name}</option>
              )
            }
          </select>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Тип транспортного средсва*</p></h5>
          <select required className='btn btn-default heightButton noneFloat col-md-12' onChange={event => this.setState({vehicleType: event && event.target && event.target.value ? event.target.value : null})} value={this.state.vehicleType ? this.state.vehicleType : ''}>
            {
              this.state.typeVehicle.map((typeVehicle, key) =>
                <option key={key} value={typeVehicle.value}>{typeVehicle.name}</option>
              )
            }
          </select>
          <button type="submit" className="btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart">Отправить</button>
        </form>
      </div>
    )
  }
}

export default createApplication;
