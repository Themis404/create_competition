import React from 'react';
import SearchBar from '../components/SearchBar.js';

const mainPageTemplate = (context) => {
  return (
    <div>
      <div class="modal" id="ModalDialog" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Подтверждение</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Вы действительно хотите удалить соревнование?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Да</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="center-block">
          <SearchBar onSearch={ e => context.setState({searchByName: e}, () => context.getCompetitionInfo())}/>
          <div className='btn-group marginBotStandart col-md-12 nonePadding'>
            <button onClick={() => context.goToState('/create-competition')} className='btn btn-info heightButton col-md-2'>
              <span className='fas fa-plus'></span>
              Create competition
            </button>
          </div>
          <h2><p className="text-center col-md-4 col-md-offset-4 nonePadding">COMPETITIONS TABLE</p></h2>
          <div className='row container col-md-center'>
            <table className="table table-condensed table-striped table-hover ">
              <thead>
                <tr className="info active">
                  <th className="text-center col-md-2" onClick={() => context.sortNameCompetitions()}>NAME COMPETITION
                    <span class="fa fa-sort float-right"></span></th>
                  <th className="text-center col-md-2" onClick={() => context.sortDateCompetitions()}>DATE START COMPETITION
                    <span class="fa fa-sort float-right"></span></th>
                  <th className="text-center  col-md-2">DATE END COMPETITION</th>
                  <th className="text-center col-md-1"></th>
                  {/* <th className="th">Description</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  !!context.state.content.content && context.state.content.content.map((contentRow, key) =>
                      <tr key={key} className="tr">
                        <td className="text-center col-md-2" onClick={() =>  context.goToState('/competition/'+contentRow.id)}>{contentRow.name}</td>
                        <td className="text-center col-md-2">{contentRow.dateStart}</td>
                        <td className="text-center col-md-2">{contentRow.dateFinish}</td>
                        <td className="text-center col-md-1">
                          <button id="btn-tooltip" type="button" data-target="#ModalDialog1" data-toggle="modal1" class="btn btn-default" aria-label="Eye" title="Activated">
                            <span onClick={e => context.putAccessStatus(e)} class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                          </button>
                          <button data-target="#ModalDialog" data-toggle="modal" id="btn-tooltip" type="button" class="btn btn-default" aria-label="Remove" title="Delete">
                            <span  onClick={e => context.deleteCompetition(e)} class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                          </button>
                        </td>
                        {/* <td className="td">{contentRow.description}</td> */}
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className='row-md-2 heightButton col-md-6 col-md-offset-4'>
              <h5 className='col-md-1 sizePageText nonePadding'><p>Страница</p></h5>
              <div className="col-md-2">
                <select className="btn btn-default heightButton"
                        onChange={event => context.setState({pageNo: event && event.target && event.target.value ? event.target.value : null})}
                        onClick={() => context.getCompetitionInfo()} value={context.state.pageNo ? context.state.pageNo : ''}>
                  {
                    !!context.state.pageInf && context.state.pageInf.map((pageCount, key) =>
                    <option key={key} className="" value={pageCount-1}>{pageCount}</option>)
                  }
                </select>
              </div>
              <h5 className='col-md-1 nonePadding marginTopPage'><p>из {context.state.totalPages}</p></h5>
              <div className='btn-group'>
                {
                  !!context.state.pageNo &&
                  <button className='btn heightButton col-md-1 colMargin' onClick={() => context.goToPrev()}>
                    <span class="fas fa-angle-left"></span></button>
                }

                {
                  !context.state.pageNo &&
                  <button disabled className='btn heightButton col-md-1 colMargin' onClick={() => context.goToPrev()}>
                    <span class="fas fa-angle-left"></span></button>
                }
                {
                  context.state.pageNo < context.state.totalPages - 1 &&
                  <button className='noneFloat btn heightButton col-md-1 colMargin' onClick={() => context.goToNext()}>
                    <span class="fas fa-angle-right"></span></button>
                }

                {
                  context.state.pageNo >= context.state.totalPages - 1 &&
                  <button disabled className='noneFloat btn heightButton col-md-1 colMargin' onClick={() => context.goToNext()}>
                    <span class="fas fa-angle-right"></span></button>
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { mainPageTemplate };
