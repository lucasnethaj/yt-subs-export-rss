const ytexport = require('./ytexport.js');

// Replace example.json with the path to your youtube subscribers json file
var subs = require('./subscriptions.json');

									/*Title*/
console.log(ytexport.generateOPML('Youtube')); 

//
// IF you just want a list of channel names you can run
// for(i in subs) {
// 	console.log(getChannelName(i));
// } 
// 
// If you just want the channel urls
// for(i in subs) {
// 	console.log(htmlPre + getChannelId(i));
// } 
//
//Or the xml urls
// for(i in subs) {
// 	console.log(xmlUrl + getChannelId(i));
// } 
