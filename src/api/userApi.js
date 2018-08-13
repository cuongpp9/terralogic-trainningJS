import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
	return get ('users');
}
function get(url){
	//console.log("url:", baseUrl+ url);
	return fetch(baseUrl+ url).then(onSuccess, onError);
}

function onSuccess(response){
	//console.log("Success", response); //eslint-disable-line no-console
	return response.json();
}
function onError(error){
	console.log(error); //eslint-disable-line no-console
}
