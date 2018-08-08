import axios from 'axios';

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
