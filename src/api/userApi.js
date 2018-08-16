import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();
console.log(baseUrl);

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
	//console.log("url:", baseUrl+ url);
	return fetch(baseUrl+ url).then(onSuccess).catch(onError);
}

function onSuccess(response){
	//console.log("Success", response); //eslint-disable-line no-console
	return response.json();
}
function onError(error){
	console.log(error); //eslint-disable-line no-console
}
