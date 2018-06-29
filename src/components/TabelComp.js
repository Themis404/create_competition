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
      fetch('http://bigman212.pythonanywhere.com/orders')
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
    <tr key={information.id} className="tr">
      <td className="td">{information.CompetitionName}</td>
      <td className="td">{information.DateStartCompetition}</td>
      <td className="td">{information.DateFinishCompetition}</td>
    </tr>
    )

      return(
        <div className="elementsComp">
          <table className="table">
            <caption>Tabel competition</caption>
              <tbody >
                <tr className="tr">
                  <th className="th">NAME COMPETITION</th>
                  <th className="th">DATA START COMPETITION</th>
                  <th className="th">DATA END COMPETITION</th>
                </tr>
                {rows}
                </tbody>
          </table>
        </div>
      )
  }
}

export default TabelComp;
