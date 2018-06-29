import React from 'react';

class TabelComp extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        content: []
      };
  }

  componentDidMount(){
    this.getTabelComp();
  }

  getTabelComp(){
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/list?page=0&size=2')
      .then(response => {return response.json()})
      .then((content) => {
        this.setState({
          content: content
        });
      });
  }

  render(){
    const content = this.state.content;
    const rows = content.map((content) =>
    <tr key={content.id} className="tr">
      <td className="td">{content.name}</td>
      <td className="td">{content.dateStart}</td>
      <td className="td">{content.dateFinish}</td>
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
