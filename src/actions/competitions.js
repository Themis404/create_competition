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
}

export function saveAccessStatus(params){
  let _params = Object.assign({
    competitionId: 0
  }, params);
  console.log(_params);
  return axios.put(`https://afternoon-woodland-86438.herokuapp.com/competitions/${params.competitionId}`,{
    accessStatus: ''
  }).then( function (response) {console.log(this.response)
  }).catch( function (error) {console.log(this.error)});

};

export function createCompetition(){
  axios.post('https://afternoon-woodland-86438.herokuapp.com/competitions/create',{
    name: '',
    description: '',
    dateStart: '',
    dateFinish: '',
    registrationStart: '',
    registrationEnd: ''
  }).then( function (response) {console.log(this.response)
  }).catch( function (error) {console.log(this.error)});

};
