import axios from 'axios';

export function postTagParticipant(params){
  return axios.post('https://afternoon-woodland-86438.herokuapp.com/tags/bind',{
    tagId: params.tagId,
    participantId: params.participantId
  }).then(res => res.data, console.log(this.data));
};

export function getTagParticipant(params){
  return axios.get('https://afternoon-woodland-86438.herokuapp.com/tags/list?status=FREE'
  ).then(res => res.data);
};
