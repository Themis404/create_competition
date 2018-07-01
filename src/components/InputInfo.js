import React from 'react';

class InputInfo extends React.Component{

  constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            dateStart: '',
            dateFinish: '',
            visible: false
        }
  }

  handleSubmit = (e) => {
    console.log(this.state);
        fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/create', {
          method: 'POST',
          headers: {
            // 'Access-Control-Allow-Headers': 'origin, content-type, accept',
            // 'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            dateTimeStart: this.state.dateStart,
            dateTimeFinish: this.state.dateFinish,
            visible: this.state.visible})
        }).then(res=>res.json())
          .then(res => console.log(res));
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

  render(){
        return(
            <div className="elementsComp header">
            <form onSubmit={this.handleSubmit}>
                <label className="textInput">
                    Create competition:
                    Name
                    <input value={this.state.name} onChange={e => this.updateName(e)} />
                    Description
                    <input value={this.state.description} onChange={e => this.updateDescription(e)} />
                    Date first
                    <input value={this.state.dateStart} onChange={e => this.updateDateStart(e)} />
                    Date last
                    <input value={this.state.dateFinish} onChange={e => this.updateDateFinish(e)} />
                    Visible
                    <input value={this.state.visible} onChange={e => this.updateVisible(e)} />
                </label>
                <button type="submit" className="button">Create</button>
            </form>
            </div>
        )
  }
}

export default InputInfo;
