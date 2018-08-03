import axios from 'axios';

export function list(params) {
  let _params = Object.assign({
    page: 0,
    size: 2,
    sort: null,
    searchByName: null
  }, params);
  console.log(_params);
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/competitions/list', {
    params: _params
  }).then(res => res.data);
}
