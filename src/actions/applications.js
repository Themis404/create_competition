import axios from 'axios';

export function getApplicationsCard(params) {
  let _params = Object.assign({
    applicationsId: 0
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/applications/'+ params.applicationsId
  ).then(res => res.data);
}

export function createApplication(params){
  return axios.post('https://afternoon-woodland-86438.herokuapp.com/applications/create',{
    vehicleType: params.vehicleType,
    competitionId: params.competitionId,
    person: params.person
  }).then(res => res.data);
}

export function getApplicationsTable(params) {
  let _params = Object.assign({
    page: 0,
    size: 0,
    competitionId: 0,
    sort: null,
    search: null,
    status: null
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/applications/list?', {
    params:_params
  }).then(res => res.data);
}

export function saveApplicationStatus(params){
  let _params = Object.assign({
    applicationsId: 0
  }, params);
  console.log(_params);
  return axios.put('https://afternoon-woodland-86438.herokuapp.com/applications/'+ params.applicationsId,{
    applicationStatus: params.applicationStatus
  }).then(res => res.data);
}
