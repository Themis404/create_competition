import axios from 'axios';

export function getApplicationsCard(params) {
  let _params = Object.assign({
    competitionId: 0
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/days/list?', {
    params: _params
  }).then(res => res.data);
}

export function getApplicationsTable(params) {
  let _params = Object.assign({
    page: 0,
    size: 0,
    competitionId: 0,
    sort: null,
    searchByName: null,
    status: null
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/participants/list?', {
    params:_params
  }).then(res => res.data);
}
