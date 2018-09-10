import axios from 'axios';

export function getDaysTable(params) {
  let _params = Object.assign({
    competitionId: 0
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/days/list?', {
    params: _params
  }).then(res => res.data);
};

export function getDaysCard(params) {
  let _params = Object.assign({
    competitionDayId: 0
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/days/' + params.competitionDayId
  ).then(res => res.data);
};

export function createDay(params) {
  return axios.post('https://afternoon-woodland-86438.herokuapp.com/days/create',{
      competitionId: params.competitionId,
      name: params.name,
      date: params.date,
      timeStart: params.timeStart,
      timeFinish: params.timeFinish,
      sequenceNumber: params.sequenceNumber
  }).then(res => res.data);
};

export function daleteDayCard(params){
  return axios({
    method: 'delete',
    url: `https://afternoon-woodland-86438.herokuapp.com/days/${params.dayId}/delete`,
    headers: {
      'Access-Control-Allow-Headers': 'origin',
      'Access-Control-Allow-Origin': '*'}
  }).then(res => res.data);
};
