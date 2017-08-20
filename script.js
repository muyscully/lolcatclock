var time = new Date().getHours();
var message; 
var messageText = document.getElementById("timeEvent");
var wakeUpTime= 8; //8AM
var napTime=12;  //12PM
var afternoon=12; //12PM
var evening=18;  //6PM
var partyTime= 21;//9PM
var noon=12;
var isPartyTime = false;


var updateClock = function()
{
var lolcat = document.getElementById('lolcat');
var image= "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";


if(time==wakeUpTime)
{ 
	image= "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"; 
	message ="Wake up Time!";

}
else if (time==afternoon)
{
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	message= "It's lunch time!";
}

else if (time==napTime)
{
	image= "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	message= "Nap time!";
	
}

else if (time==partyTime)
{
	image= "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	message="It's party time!!";
}

else if (time<afternoon)
{
    message = "Top of the morning to you!"; 
}
else if (time>evening) 
{
	 
  	message = "It's night time yeah!!!";
}
			
else 
{
	
	message="Good Afternoon!";

}
			
 
messageText.innerText = message;
lolcat.src= image;


var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


showCurrentTime(); 
};

updateClock();
	
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);

var partyTimeButton =  document.getElementById("partyTimeButton");

var partyEvent = function() {
   
   if (isPartyTime === false) {
		 //PartyTime is false. Hitting the button makes it true. So it IS party time!! The party is happening. When you want the party to end, click on "party over"
		 
      isPartyTime = true;
      time = partyTime;
    document.getElementById("partyTimeButton").style.background = "#0A8DAB";
		  document.getElementById("partyTimeButton").innerText = "Party Over";
		 
     
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
		  document.getElementById("partyTimeButton").style.background = "#222";
	
	document.getElementById("partyTimeButton").innerText = "Party Time";
   
   }
};

partyTimeButton.addEventListener("click", partyEvent);

//select time to wake up
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");


var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

	
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

//select time for lunch
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchTimeEvent = function()
{
    afternoon = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener('change', lunchTimeEvent);

//Nap Time Selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napTimeEvent = function()
{
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napTimeEvent);









