import React from 'react';

class TabelComp extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        information: []
      };
  }

  componentDidMount(){
    this.getTabelComp();
  }

  getTabelComp(){
      fetch('https://httpbin.org/GET/value')
      .then(response => {return response.json()})
      .then((information) => {
        this.setState({
          information: information
        });
      });
  }

  render(){
    const information = this.state.information;
    const rows = information.map((information) =>
    <tr key={information.id}>
      <th>{information.CompetitionName}</th>
      <th>{information.DateStartCompetition}</th>
      <th>{information.DateFinishCompetition}</th>
    </tr>
    )

      return(
        <dev>
          <table border='1'>
            <caption>Tabel competition</caption>
              <tbody>
                <tr>
                  <th>NAME COMPETITION</th>
                  <th>DATA START COMPETITION</th>
                  <th>DATA END COMPETITION</th>
                </tr>
                {rows}
                </tbody>
          </table>
        </dev>
      )
  }
}

export default TabelComp;
