import React from 'react';

class InputInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      dateStart: '',
      dateFinish: '',
      visible: false,
      submitButtonDisabled: true  //т.к. поля пустые
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
        description: this.state.description,
        dateStart : this.state.dateStart,
        dateFinish: this.state.dateFinish,
        visible: this.state.visible})
    }).then(res=>{
      console.log(res);
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

  updateName(e) {
    this.setState( {name: e.target.value} );
    this.checkFieldsEmpty() //можно проверять здесь
  }

  updateDateStart(e) {
    this.setState( {dateStart: e.target.value} )
  }

  updateDateFinish(e) {
    this.setState( {dateFinish: e.target.value} )
  }

  updateDescription(e) {
    this.setState( {description: e.target.value} )
  }

  updateVisible(e) {
    if (e.target.value === '1') {
      this.setState({visible: true})
    }
    else {
      this.setState({visible: false})
    }
  }

  checkFieldsEmpty = () => {
    if (this.state.name.length === 0) {
      this.setState({submitButtonDisabled: true});
    } else {
      this.setState({submitButtonDisabled: false});
    }
  };

  render() {
    return (
        <div className="createComp width_input">
          <form onSubmit={this.handleSubmit} className='centerInput'>
            <p>Create competition:</p>
            <p>Name</p>
            <input id='inputName'
                   value={this.state.name}
                   onChange={e => this.updateName(e)}/>
            <p>Description</p>
            <input id='inputDescription'
                   value={this.state.description}
                   onChange={e => this.updateDescription(e)}/>
            <p>Date first</p>
            <input id='inputDateStart' value={this.state.dateStart}
                   onChange={e => this.updateDateStart(e)}/>
            <p>Date last</p>
            <input id='inputDateFinish' value={this.state.dateFinish}
                   onChange={e => this.updateDateFinish(e)}/>
            <p>Visible</p>
            <input id='inputVisible'
                   value={this.state.visible}
                   onChange={e => this.updateVisible(e)}/>
            <button type="submit" className="button" disabled={this.state.submitButtonDisabled}>Create</button>
          </form>
        </div>
    )
  }
}

export default InputInfo;
