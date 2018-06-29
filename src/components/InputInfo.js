import React from 'react';

class InputInfo extends React.Component{

  constructor(props){
        super(props);
        this.state = {
            CompetitionName: '',
            DateStartCompetition: '',
            DateFinishCompetition: ''
        }
  }

  componentDidMount(){
    this.handleSubmit();
  }

  handleSubmit = (event) => {
        fetch('http://bigman212.pythonanywhere.com/orders', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({CompetitionName: this.state.CompetitionName, DateStartCompetition: this.state.DateStartCompetition, DateFinishCompetition: this.state.DateFinishCompetition})
        }).then(res=>res.json())
          .then(res => console.log(res));
  }

  updateCompetitionName(e) {
      this.setState({
            CompetitionName: e.target.value ? e.target.value : ''
      })
  }

  updateDateStartCompetition(e) {
      this.setState({
            DateStartCompetition: e.target.value ? e.target.value : ''
      })
  }

  updateDateFinishCompetition(e) {
      this.setState({
            DateFinishCompetition: e.target.value ? e.target.value : ''
      })
  }

  render(){
        return(
            <div className="elementsComp">
            <form onSubmit={this.handleSubmit}>
                <label className="textInput">
                    Create competition:
                    Name
                    <input value={this.state.CompetitionName} onChange={e => this.updateCompetitionName(e)} />
                    Date first
                    <input value={this.state.DateStartCompetition} onChange={e => this.updateDateStartCompetition(e)} />
                    Date last
                    <input value={this.state.DateFinishCompetition} onChange={e => this.updateDateFinishCompetition(e)} />
                </label>
                <button type="submit">Create</button>
            </form>
            </div>
        )
  }
}

export default InputInfo;
