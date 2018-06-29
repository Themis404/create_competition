import React from 'react';

class InputInfo extends React.Component{

  constructor(props){
        super(props);
        this.state = {
            content: [],
            name: '',
            dateStart: '',
            dateFinish: ''
        }
  }

  componentDidMount(){
    this.handleSubmit();
  }

  handleSubmit = (event) => {
        fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/list?page=0&size=2', {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Headers': 'origin, content-type, accept',
            'Access-Control-Allow-Origin': '*',
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: this.state.content.name, dateStart: this.state.content.dateStart, dateFinish: this.state.content.dateFinish})
        }).then(res=>res.json())
          .then(res => console.log(res));
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

  render(){
        return(
            <div className="elementsComp">
            <form onSubmit={this.handleSubmit}>
                <label className="textInput">
                    Create competition:
                    Name
                    <input value={this.state.content.name} onChange={e => this.updateName(e)} />
                    Date first
                    <input value={this.state.content.dateStart} onChange={e => this.updateDateStart(e)} />
                    Date last
                    <input value={this.state.content.dateFinish} onChange={e => this.updateDateFinish(e)} />
                </label>
                <button type="submit">Create</button>
            </form>
            </div>
        )
  }
}

export default InputInfo;
