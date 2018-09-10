import axios from 'axios';

export function getApplicationsCard(params) {
  let _params = Object.assign({
    participantsId: 0
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/participants/'+ params.participantsId
  ).then(res => res.data);
}

export function createApplication(params){
  return axios.post('https://afternoon-woodland-86438.herokuapp.com/participants/create',{
    name: params.name,
    surname: params.surname,
    fatherName: params.fatherName,
    age: params.age,
    phone: params.phone,
    emergencyPhone: params.emergencyPhone,
    email: params.email,
    racingMastery: params.racingMastery,
    vehicleType: params.vehicleType,
    competitionId: params.competitionId,
    gender: params.gender
  }).then(res => res.data);
};

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
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/participants/list?', {
    params:_params
  }).then(res => res.data);
}

export function saveApplicationStatus(params){
  let _params = Object.assign({
    participantsId: 0
  }, params);
  console.log(_params);
  return axios.put('https://afternoon-woodland-86438.herokuapp.com/participants/'+ params.participantsId,{
    applicationStatus: params.applicationStatus
  }).then(res => res.data);
};
