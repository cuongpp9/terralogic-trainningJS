import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
	return get ('users');
}

export function deleteUser(id){
	//console.log("url:", baseUrl+ url);
	return del(`users/${id}`);
}

function del(url){
	const request = new Request(baseUrl + url, {
		method: 'DELETE'
	});
	return fetch(request).then(onSuccess).catch(onError);
}

function get(url){
	return fetch(baseUrl+ url).then(onSuccess).catch(onError);
}

function onSuccess(response){
	return response.json();
}
function onError(error){
	console.log(error); //eslint-disable-line no-console
}
