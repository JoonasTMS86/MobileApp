$(document).ready(function()
{
	$('#weather').load("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=4700ebe42105ddd4f266d256baec92ee");
	
	
	
	$('#item1').click(function() 
	{
		$('#stuff').append('<li>Face</li>');
	});
	$('#item2').click(function() 
	{
		$('#stuff').append('<li>Mario and Sonic plush toys</li>');
	});
	$('#item3').click(function() 
	{
		$('#stuff').append('<li>Cat</li>');
	});
	$("#bottomline").click(function() 
	{
		alert('Contact me if you wish to use my stuff in your site.');
	});
	
	
	
	var howMany = localStorage.getItem('howMany');
	howMany++;
	localStorage.setItem('howMany', howMany);
	$('#date').append(howMany);
	$('#date').append(' times.');
	$.getJSON( "MobileApp.json", function( data )
	{
		
		var temp;
		$.each(data.temperatures, function(key, val)
		{
			if(val.country == 'Finland')
			{
				temp = val.temps;
			}
		});
		
		
		$('#temps').append('<p>The last 10 temperatures in Finland were: ' + temp + '</p>');
		
		
		var lowest;
		var pos1 = 0;
		var pos2;
		var smaller = 0;
		while(smaller < temp.length)
		{
			smaller = 0;
			pos2 = 0;
			while(pos2 < temp.length)
			{
				if(temp[pos1] <= temp[pos2])
				{
					smaller++;
				}
				pos2++;
			}
			if(smaller < temp.length)
			{
				pos1++;
			}
		}
		lowest = temp[pos1];
		var whichDay = pos1 + 1;
		$('#temps').append('<p id="tp">So, the lowest temperature was ' + lowest + ' celsius on day ' + whichDay + '.</p>');
		
	});
});