import axios from 'axios';

export function list(params) {
  let _params = Object.assign({
    page: 0,
    size: 0,
    sort: null,
    searchByName: null
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/competitions/list', {
    params: _params
  }).then(res => res.data);
};

export function saveAccessStatus(params){
  let _params = Object.assign({
    competitionId: 0
  }, params);
  console.log(_params);
  return axios.put(`https://afternoon-woodland-86438.herokuapp.com/competitions/${params.competitionId}`,{
    accessStatus: params.accessStatus
  }).then(res => res.data);
};

export function createCompetition(params){
  return axios.post('https://afternoon-woodland-86438.herokuapp.com/competitions/create',{
    name: params.name,
    description: params.description,
    dateStart: params.dateStart,
    dateFinish: params.dateFinish,
    registrationStart: params.registrationStart,
    registrationEnd: params.registrationEnd

  }).then(res => res.data);
};

export function daleteCopmetitionCard(params){
  return axios({
    method: 'delete',
    url: `https://afternoon-woodland-86438.herokuapp.com/competitions/${params.competitionId}/delete`,
    headers: {
      'Access-Control-Allow-Headers': 'origin',
      'Access-Control-Allow-Origin': '*'}
    }).then(res => res.data);
};

export function daleteCopmetitionCard1(params){
  let _params = Object.assign({
    competitionId: 0
  }, params);
  console.log(_params);
  return axios.delete(`https://afternoon-woodland-86438.herokuapp.com/competitions/${params.competitionId}/delete`,{
  }).then(res => res.data);
};
