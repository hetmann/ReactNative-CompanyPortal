var api = {
  findContact(searchTerm){
  	searchTerm = encodeURIComponent(searchTerm.toLowerCase().trim());
  	var url = `http://portal.company.url/contacts/basic?q=${searchTerm}`;
	return fetch(url).then( (res) => res.json() );
  }
};

module.exports = api;