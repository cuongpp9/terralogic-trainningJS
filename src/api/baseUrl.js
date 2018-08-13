export default function getBaseUrl(){
	const idDevelopment = window.location.hostname === 'localhost';
	return idDevelopment? 'http://localhost:3006/' : '/';
}
