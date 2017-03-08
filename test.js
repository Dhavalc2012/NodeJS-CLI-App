//const profile = require('./profile.js');
const profile = require('./profile.js');

//console.dir(process.argv);
let users = process.argv.slice(2);
/* users.forEach(user => {
	getProfile(user);
}); */

//We can write a short hand for above code as such since it has only parameter to pass
users.forEach(profile.let);