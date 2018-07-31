import axios from 'axios';

export function fetchSearch(name) {
    return axios.get('`https://afternoon-woodland-86438.herokuapp.com/competitions/list?page=0&size=5&sort=name,asc&searchByName',{params:{
        q:name
    }}).then(res => res.data);
}
