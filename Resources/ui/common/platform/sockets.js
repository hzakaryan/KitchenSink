function sockets(_args) {
	//TODO review this part when Jira tasks: TIMOB-8587 and TIMOB-10275 will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.Network module is not implemented for BlackBerry yet');
		return;
	}
	var self = Ti.UI.createWindow();
	// create table view data object
	var data = [
		{title:'Connecting socket', hasChild:true, test:'ui/common/platform/socket_connect'},
		{title:'Listening socket', hasChild:true, test:'ui/common/platform/socket_listener'},
		{title:'Server and client example', hasChild:true, test:'ui/common/platform/socket_server_client'}
	];
	
	if (Titanium.Platform.name == 'iPhone OS')
	{
		data.push({title:'iOS TCP Sockets [deprecated]', hasChild:true, test:'ui/handheld/ios/platform/ios_sockets'});
	}
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow();
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = sockets;
