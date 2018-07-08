import React from 'react';

class InputInfo extends React.Component{

  constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            dateStart: '',
            dateFinish: '',
            visible: false,
            isDisabled: 'false'
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
                      res.ok ? console.log('sucses') : console.warn('mistake');
          })
            e.preventDefault();
  }

  updateName(e) {
      this.setState({
            name: e.target.value ? e.target.value : ''
      })
  }

  updateDateStart(e) {
      this.setState({
            dateStart: e.target.value ? e.target.value : ''
      })
  }

  updateDateFinish(e) {
      this.setState({
            dateFinish: e.target.value ? e.target.value : ''
      })
  }

  updateDescription(e) {
      this.setState({
            description: e.target.value ? e.target.value : ''
      })
  }

  updateVisible(e) {
    if (e.target.value === '1') {
      this.setState({
        visible: true
      })
    }
    else {this.setState({visible: false})}
  }

  checkFieldsEmpty = () => {

    if ((this.state.name.length) === 0){
      this.state.isDisabled='true';
    }
    else if ((this.state.name.length) > 0){
      this.state.isDisabled='false';
    }

    console.log(this.state);
    console.log(this.state.isDisabled);
  }

  render(){
      let buttonInput = document.getElementById('buttonInput');
        return(
            <div className="createComp width_input">
            <form onSubmit={this.handleSubmit}  className='centerInput'>
                <label className="textInput">
                    <p>Create competition:</p>
                    <p>Name</p>
                    <p><input id='inputName' value={this.state.name}
                        onChange={e => {
                          this.updateName(e)
                          this.checkFieldsEmpty()}} /></p>
                    <p>Description</p>
                    <p><input id='inputDescription' value={this.state.description}
                        onChange={e => {
                          this.updateDescription(e)
                          this.checkFieldsEmpty()}} /></p>
                    <p>Date first</p>
                    <p><input id='inputDateStart' value={this.state.dateStart}
                        onChange={e => {
                          this.updateDateStart(e)
                          this.checkFieldsEmpty()}} /></p>
                    <p>Date last</p>
                    <p><input id='inputDateFinish' value={this.state.dateFinish}
                        onChange={e => {
                          this.updateDateFinish(e)
                          this.checkFieldsEmpty()}} /></p>
                    <p>Visible</p>
                    <p><input id='inputVisible' value={this.state.visible} onChange={e => this.updateVisible(e)} /></p>
                </label>
                <button type="submit" className="button" disabled={this.state.isDisabled}>Create</button>
            </form>
            </div>
        )
  }
}

export default InputInfo;
