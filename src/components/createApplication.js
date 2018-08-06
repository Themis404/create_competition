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
        <div className="createApplication marginTopStandart">
          <form onSubmit={this.handleSubmit} className='positionInput'>
            <div className='textInput width_input'>
              <h2>Заявление на участие в соревновании:</h2>
              <p>Имя*</p>
              <p><input required id='inputName' className="cardApplicationForm" placeholder = "Иван"
                      value={this.state.name}
                      onChange={e => this.updateName(e)}/></p>
              <p>Фамилия*</p>
              <p><input required id='inputSurname' className="cardApplicationForm" placeholder = "Иванов"
                      value={this.state.surname}
                      onChange={e => this.updateSurname(e)}/></p>
              <p>Отчество</p>
              <p><input id='inputLastName' className="cardApplicationForm" placeholder = "Иванович"
                      value={this.state.lastName}
                      onChange={e => this.updateLastName(e)}/></p>
              <p>Возраст*</p>
              <p><input required type = 'number' id='inputAge' className="cardApplicationForm"
                      value={this.state.age}
                      onChange={e => this.updateAge(e)}/></p>
              <p>Введите свой номер телефона*</p>
              <p><input required type='tel' id='inputNumber' className="cardApplicationForm" placeholder = "+7 "
                      value={this.state.number}
                      onChange={e => this.updateNumber(e)}/></p>
              <p>Введите номер телефона в случае ЧС*</p>
              <p><input required type='tel' id='inputNumberEs' className="cardApplicationForm" placeholder = "+7 "
                      value={this.state.numberEs}
                      onChange={e => this.updateNumberEs(e)}/></p>
              <p>Адрес электронной почты*</p>
              <p><input required type='email' id='inputEmail' className="cardApplicationForm" placeholder = "email@email.ru"
                      value={this.state.email}
                      onChange={e => this.updateEmail(e)}/></p>
               <p>Уровень подготовки*</p>
               <p><input required id='inputLevel' className="cardApplicationForm"
                      value={this.state.level}
                      onChange={e => this.updateLevel(e)}/></p>
               <p>Тип транспортного средсва*</p>
               <p><input required id='inputTypeTransport' className="cardApplicationForm"
                      value={this.state.typeTransport}
                      onChange={e => this.updateTypeTransport(e)}/></p>

            </div>
            <div>
              <button type="submit" className="button">Отправить</button>
            </div>
          </form>
        </div>
    )
  }
}

export default createApplication;