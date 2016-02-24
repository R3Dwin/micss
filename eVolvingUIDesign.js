function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}
function daystoChristmas()
{ 
	var chosen_date = document.getElementById("userdate1").value;
	var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/ ;
	var msPerDay = 24 * 60 * 60 * 1000;
	var msPerWeek = 24 * 60 * 60 * 1000*7;
	
	if(chosen_date==""){
		alert("Required field");
	}
	else{
		if(!(date_regex.test(chosen_date)))
		{
			alert("incorect format");
		}
		else{
			chosen_date = chosen_date.split("/");
			user_date = new Date(chosen_date[2]+"/"+(chosen_date[1]) +"/"+chosen_date[0]);
			today = new Date();
			msLeft = (user_date.getTime() - today.getTime());
			daysLeft = Math.round(msLeft/msPerDay);   
			weeksLeft = Math.floor(msLeft/msPerWeek);	
			weeks = Math.round(daysLeft/7);
			days= daysLeft - weeks*7;
			
			document.getElementById('demo1').innerHTML = weeks + " Weeks and " + days+ " Days between Today and Selected date";
			
		}
	} 
}

