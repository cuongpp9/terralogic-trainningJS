// export default function getBaseUrl(){
// 	const idDevelopment = window.location.hostname === 'localhost';
// 	return idDevelopment? 'http://localhost:3006/' : '/';
// }

export default function getBaseUrl() {
	return getQueryStringParameterByName('userMockApi') ? 'http://localhost:3006/' : 'https://safe-headland-32311.herokuapp.com/';
  }
	
  function getQueryStringParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
