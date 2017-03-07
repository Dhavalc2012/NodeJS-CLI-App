//App for the teamtreehouse api for displaying username and their points

//Require https 
const https = require('https');
//const username = 'chalkers';
let data ;
function printMessage(username,badgeCount,points){
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
	console.log(message);
}


function getProfile(username) {
// Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
                          let body ="";
                          response.on('data', data => {
							  body += data.toString();
						  });
						  response.on('end',() => {
							 // console.log(body);
							  const profile = JSON.parse(body);
							  //console.dir(profile);
							  printMessage(username,profile.badges.length,profile.points.JavaScript);

						  });

						    // Read the data
                          // Parse the data
                          // Print the data
                          
                          });
}

let users = ["chalkers","dhawalchheda"];
/* users.forEach(user => {
	getProfile(user);
}); */

//We can write a short hand for above code as such since it has only parameter to pass
users.forEach(getProfile);