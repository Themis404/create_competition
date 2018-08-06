import React from 'react';
import {Redirect} from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';

class createApplication extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      lastName: '',
      age: '',
      number: '',
      numberEs: '',
      email: '',
      level: '',
      typeTransport: ''
    }
  }

  handleSubmit = (e) => {
    console.log(this.state);
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/create', {
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
        lastName: this.state.lastName,
        age: this.state.age,
        number: this.state.number,
        numberEs: this.state.numberEs,
        email: this.state.email,
        level: this.state. level,
        typeTransport: this.state.typeTransport
      })
    }).then(res => {
      console.log(res);
      this.setState({name: '', surname: '', lastName: '', age: '',number: '',numberEs: '',email: '', level: '', typeTransport: ''});
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

  updateLastName(e) {
    this.setState( {lastName: e.target.value} )
  }

  updateAge(e) {
    this.setState( {age: e.target.value} )
  }

  updateNumber(e) {
    this.setState( {number: e.target.value} )
  }

  updateNumberEs(e) {
    this.setState( {numberEs: e.target.value} )
  }
  updateEmail(e) {
    this.setState( {email: e.target.value} )
  }
  updateLevel(e) {
    this.setState( {level: e.target.value} )
  }
  updateTypeTransport(e) {
    this.setState( {typeTransport: e.target.value} )
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
                  value={this.state.lastName}
                  onChange={e => this.updateLastName(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Возраст*</p></h5>
          <input required type = 'number' id='inputAge' className="form-control"
                  value={this.state.age}
                  onChange={e => this.updateAge(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Введите свой номер телефона*</p></h5>
          <input required type='tel' id='inputNumber' className="form-control" placeholder = "+7 "
                  value={this.state.number}
                  onChange={e => this.updateNumber(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Введите номер телефона в случае ЧС*</p></h5>
          <input required type='tel' id='inputNumberEs' className="form-control" placeholder = "+7 "
                  value={this.state.numberEs}
                  onChange={e => this.updateNumberEs(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Адрес электронной почты*</p></h5>
          <input required type='email' id='inputEmail' className="form-control" placeholder = "email@email.ru"
                  value={this.state.email}
                  onChange={e => this.updateEmail(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Уровень подготовки*</p></h5>
          <input required id='inputLevel' className="form-control"
                  value={this.state.level}
                  onChange={e => this.updateLevel(e)}></input>
          <h5><p className='col-md-12 nonePadding marginTopStandart'>Тип транспортного средсва*</p></h5>
          <input required id='inputTypeTransport' className="form-control"
                  value={this.state.typeTransport}
                  onChange={e => this.updateTypeTransport(e)}></input>
          <button type="submit" className="btn btn-success col-md-4 col-md-offset-4 marginTopStandart marginBotStandart">Отправить</button>
        </form>
      </div>
    )
  }
}

export default createApplication;
