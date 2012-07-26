function button_states() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if(isBlackberry)
	{
		scaleX += 7;
		scaleY += 2;
	};
	var win = Ti.UI.createWindow();
	
	var button1 = Titanium.UI.createButton({
	  left:10,
	  top:10,
	  height:50 * scaleY,
	  width:50 * scaleX,
	  enabled:true,
	  focusable:true,
	  title:'B1',
	  backgroundImage:'/images/slightlylargerimage.png'
	});
	
	var button2 = Titanium.UI.createButton({
	  left:70,
	  top:10,
	  height:50 * scaleY,
	  width:50 * scaleX,
	  focusable:true,
	  enabled:true,
	  title:'B2',
	  backgroundDisabledImage:'/images/slightlylargerimage.png'
	});
	
	var button3 = Titanium.UI.createButton({
	  left:130,
	  top:10,
	  height:50 * scaleY,
	  width:50 * scaleX,
	  enabled:true,
	  focusable:true,
	  title:'B3',
	  backgroundFocusedImage:'/images/slightlylargerimage.png'
	});
	
	var button4 = Titanium.UI.createButton({
	  left:190,
	  top:10,
	  height:50 * scaleY,
	  width:50 * scaleX,
	  focusable:true,
	  enabled:true,
	  title:'B4',
	  backgroundSelectedImage:'/images/slightlylargerimage.png'
	});
	
	var button5 = Titanium.UI.createButton({
	  left:10,
	  top:200,
	  height:60 * scaleY,
	  width:100 * scaleX,
	  focusable:true,
	  enabled:true,
	  title:'click me'
	});
	
	var state=1;
	button5.addEventListener('click',function()
	{
		switch(state)
		{
			case 0:
				button2.focusable=true;
				button2.enabled=true;
				state=1;
				break;
			case 1:
				button2.focusable=false;
				button2.enabled=false;
				state=0;
				break;
			
		}
	})
	
	
	win.add(button1);
	win.add(button2);
	win.add(button3);
	win.add(button4);
	win.add(button5);
	
	return win;
}

module.exports = button_states;