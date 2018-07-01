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

  getTabelComp = () =>{
      fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/list', {mode: 'cors'})
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then((content) => {
        console.warn(content);
        this.setState({
          content: content
        });
      });
  }

  render(){
    const contents = this.state.content;
    let rows = <tr></tr>;
    if (contents.content){
        rows = contents.content.map((contentRow) =>
            <tr className="tr">
              <td className="td">{contentRow.name}</td>
              <td className="td">{contentRow.dateStart}</td>
              <td className="td">{contentRow.dateFinish}</td>
            </tr>)
    }

      return(
          <div className="elementsComp body">
              <table className="table">
              <tbody>
                <tr className="tr">
                  <th className="th">NAME COMPETITION</th>
                  <th className="th">DATA START COMPETITION</th>
                  <th className="th">DATA END COMPETITION</th>
                </tr>
                {rows}
              </tbody>
          </table>
          <button onClick={this.getTabelComp} className="button buttonPosition align">Update</button>
          </div>
      )
  }
}

export default TabelComp;
