const htmlPre = 'https://www.youtube.com/channel/'; //+ channelid
const xmlPre = 'https://www.youtube.com/feeds/videos.xml?channel_id='; //+channelid 

// Replace example.json with the path to your youtube subscribers json file
var subs = require('./subscriptions.json');

									/*Title*/
console.log(generateOPML('Youtube')); 

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

function generateOPML(title) {
	const OPML_HEADER = `<?xml version='1.0'?><opml version='1.0'>
	<head> <title> ${title} </title> </head>
	<body>
		<outline title='Subscribtions' text='Subscribtions'>
`;
	const OPML_FOOTER = 
`		</outline>
	</body>
</opml>`;

	let opml = OPML_HEADER; 
	for(i in subs) {
		opml += generateChannelOutline(i);
	} 
	opml += OPML_FOOTER;

	return opml;
}

//i is the index in the subscribers.json file
function generateChannelOutline(i) { 
	let id = getChannelId(i);
	//Template literals are awesome ;)
	let outline = `
<outline
			title='${getChannelName(i)}'
			text='${getChannelDesc(i)}'
			type='rss'
			xmlUrl='${xmlPre} ${id}'
			htmlUrl='${htmlPre} ${id}'
		/>`
	return outline;
}

function getChannelId(i) {
	return subs[i].snippet.resourceId.channelId;
}

function getChannelName(i) {
	return escapeXml(subs[i].snippet.title);
}

function getChannelDesc(i) {
	return escapeXml(subs[i].snippet.description);
}

//Some characters need to be escaped in xml
function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}
