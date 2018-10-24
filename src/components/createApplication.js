import React from 'react';
import {Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import * as actions from '../actions/applications';

class createApplication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'block',
      person: {},
      name: '',
      surname: '',
      patronymic: '',
      birthday: '',
      phone: '',
      emergencyPhone: '',
      email: '',
      competitionId: '6',
      gender: '',
      typeGender: [
        {
          name: 'Пол',
          value: ''
        },
        {
          name: 'Женский',
          value: 'FEMALE'
        },
        {
          name: 'Мужской',
          value: 'MALE'
        }
      ],
      racingMastery: '',
      typeMastery: [
        {
          name: 'Уровень',
          value: ''
        },
        {
          name: 'Спортсмен ',
          value: 'NEWBIE '
        },
        {
          name: 'Любитель',
          value: 'NEWBIE '
        },
        {
          name: 'Хобби',
          value: 'NEWBIE '
        }
      ],
      vehicleType: '',
      typeVehicle: [
        {
          name: 'ТС',
          value: ''
        },
        {
          name: 'Мотоцикл',
          value: 'MOTORCYCLE'
        }
      ],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    actions.createApplication({
      competitionId: this.state.competitionId,
      vehicleType: this.state.vehicleType,
      person: {
        name: this.state.name,
        surname: this.state.surname,
        patronymic: this.state.patronymic,
        birthday: this.state.birthday,
        phone: this.state.phone,
        emergencyPhone: this.state.emergencyPhone,
        email: this.state.email,
        racingMastery: this.state. racingMastery,
        gender: this.state.gender
      }
    }).then(res => this.goToState('/create-application'));
  };

  updateName(e) {
    this.setState( {name: e.target.value} );
  }

  updateSurname(e) {
    this.setState( {surname: e.target.value} );
  }

  updateFatherName(e) {
    this.setState( {patronymic: e.target.value} );
  }

  updateAge(e) {
    this.setState( {birthday: e.target.value} );
  }

  updatePhone(e) {
    this.setState( {phone: e.target.value} );
  }

  updateEmergencyPhone(e) {
    this.setState( {emergencyPhone: e.target.value} );
  }

  updateEmail(e) {
    this.setState( {email: e.target.value} );
  }

  updateRacingMastery(e) {
    this.setState( {racingMastery: e.target.value} );
  }

  updateVehicleType(e) {
    this.setState( {vehicleType: e.target.value} );
  }

  updateGender(e) {
    this.setState( {gender: e.target.value} );
  }
  offQ = () => {
    this.setState({
      activeButton: this.state.activeButton === "block" ? "none" : "block"
    });
    console.log(this.state.activeButton);
  }

  render() {
    if (this.reload) {
      this.reload = false;
      return <Redirect to={this.redirect} push={true}/>;
    }
    return (
      <div className="col-md-12 nonePadding">
        <form  className=''>
          <h2 className="text-center col-md-12 marginTopStandart">Заявление на участие в соревновании</h2>
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
                  value={this.state.patronymic}
                  onChange={e => this.updateFatherName(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Возраст*</p></h5>
          <input required type = 'date' id='inputAge' className="form-control"
                  value={this.state.birthday}
                  onChange={e => this.updateAge(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Пол*</p></h5>
          <select required className='btn btn-default heightButton noneFloat col-md-12'
                  onChange={event => this.setState({gender: event && event.target && event.target.value ? event.target.value : null})}
                  value={this.state.gender ? this.state.gender : ''}>
                  {
                    this.state.typeGender.map((typeGender, key) =>
                      <option key={key} value={typeGender.value}>{typeGender.name}</option>
                    )
                  }
          </select>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Введите свой номер телефона*</p></h5>
          <input required  type='text' id='phone' className="mask-phone form-control" placeholder = "+7 XXX XXX XXXX"
                  value={this.state.phone}
                  onChange={e => this.updatePhone(e)}>
          </input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Введите номер телефона в случае ЧС*</p></h5>
          <input required type='tel' id='inputNumberEs' className="form-control" placeholder = "+7 XXX XXX XXXX"
                  value={this.state.emergencyPhone}
                  onChange={e => this.updateEmergencyPhone(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Адрес электронной почты*</p></h5>
          <input required type='email' id='inputEmail' className="form-control" placeholder = "email@email.ru"
                  value={this.state.email}
                  onChange={e => this.updateEmail(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Уровень подготовки*</p></h5>
          <select required className='btn btn-default heightButton noneFloat col-md-12'
                  onChange={event => this.setState({racingMastery: event && event.target && event.target.value ? event.target.value : null})}
                  value={this.state.racingMastery ? this.state.racingMastery : ''}>
                  {
                    this.state.typeMastery.map((typeMastery, key) =>
                      <option key={key} value={typeMastery.value}>{typeMastery.name}</option>
                    )
                  }
          </select>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Тип транспортного средсва*</p></h5>
          <select required className='btn btn-default heightButton noneFloat col-md-12'
                  onChange={event => this.setState({vehicleType: event && event.target && event.target.value ? event.target.value : null})}
                  value={this.state.vehicleType ? this.state.vehicleType : ''}>
                  {
                    this.state.typeVehicle.map((typeVehicle, key) =>
                      <option key={key} value={typeVehicle.value}>{typeVehicle.name}</option>
                    )
                  }
          </select>
          <button  className="btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart" onClick={() => this.offQ()}>Отправить</button>
          <div class="alert alert-success" role="alert" onClick={() => this.offQ()} style={{display: (this.state.activeButton === "none" ? "block" : "none")}} >
              Вы зарегистрированы!
          </div>
        </form>
      </div>
    );
  }
}

export default createApplication;
