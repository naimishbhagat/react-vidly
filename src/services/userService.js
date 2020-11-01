import http from './httpService';
import {apiUrl} from '../config.json';
const apiEndPoint = apiUrl + "/users";

function userUrl(id){
    return apiEndPoint+'/'+id;
}
/*
export function getUsers(){
    return http.get(apiEndPoint);
}

export function deleteUser(userId){
    return http.delete(userUrl(userId));
}

export function getUser(userId){
    return http.get(userUrl(userId));
}
*/
export function register(user){
    const body = {...user};
    const username = body.username;
    delete user.username;
    return http.post(apiEndPoint,{
        email: username,
        ...user
    });
}