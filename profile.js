//App for the teamtreehouse api for displaying username and their points

//Require https 
const https = require('https');
//const username = 'chalkers';
let data ;
function printMessage(username,badgeCount,points){
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
	console.log(message);
}

function printError(error){
	console.error(error.message);
}

function get(username) {
// Connect to the API URL (https://teamtreehouse.com/username.json)
try {
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
                          let body ="";
                          response.on('data', data => {
							  body += data.toString();
						  });
						  response.on('end',() => {
							 // console.log(body);
							 try {
							  const profile = JSON.parse(body);
							  //console.dir(profile);
							  printMessage(username,profile.badges.length,profile.points.JavaScript);
							 } catch(error) {printError(error);}
								
						  });

						    // Read the data
                          // Parse the data
                          // Print the data
                          
                          });
	request.on('error', error => console.log(`There was some error for this request: ${error.message}`));
}catch(error){printError(error);}

}
/* Only name of the function as assignment and no paraments */
module.exports.let = get;