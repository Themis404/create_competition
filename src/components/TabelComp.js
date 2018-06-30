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
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/1', {mode: 'cors'})
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then((content) => {
        console.log(content);
        this.setState({
          content: content
        });
      });
  }

  render(){
    const contents = this.state.content;
    const rows = contents.map((contentRow) =>
    <tr key={contentRow.id} className="tr">
      <td className="td">{contentRow.name}</td>
      <td className="td">{contentRow.dateStart}</td>
      <td className="td">{contentRow.dateFinish}</td>
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
