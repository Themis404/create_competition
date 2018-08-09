import axios from 'axios';

export function getPointTable(params) {
  let _params = Object.assign({
    competitionId: 0
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/points/list?', {
    params: _params
  }).then(res => res.data);
}

export function getDaysCard(params) {
  let _params = Object.assign({
    pointId: 0
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/points/' + params.pointId
  ).then(res => res.data);
}
