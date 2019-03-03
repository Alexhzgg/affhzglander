function n(n){
	return n > 9 ? "" + n: "0" + n;
}
function countdown(elementName,seconds,format,redirect=false)
{
 
	if(format=="s")
	{
		var counter_inter = setInterval(function(){
			document.getElementById(elementName).innerText = n(seconds--);
			if(seconds<0)
			{
				clearInterval(counter_inter);
				if(redirect)
				{
					window.location = redirect;
				}
			}
		}, 1000);
	}
	if(format=="m")
	{ 
		var counter_inter = setInterval(function(){
			seconds--;
			var m =  parseInt(seconds/60);
			var s = seconds-(m*60);
			document.getElementById(elementName).innerText = n(m)+":"+n(s);
			if(seconds<=0)
			{
				clearInterval(counter_inter);
				if(redirect)
				{
					window.location = redirect;
				}
			}
		}, 1000);
	}	
	if(format=="h")
	{ 
		var counter_inter = setInterval(function(){
			seconds--;
			h = Math.floor(seconds / 3600);
			m = Math.floor((seconds / 60) % 60);
			s = seconds % 60;	
			document.getElementById(elementName).innerText = n(h)+":"+n(m)+":"+n(s);
			if(seconds<=0)
			{
				clearInterval(counter_inter);
				if(redirect)
				{
					 document.location  = redirect;
					 //alert(redirect);
				}
			}
		}, 1000);
	}	
}