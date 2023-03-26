//Get time from user and find(morning,afternoon,or night)
let b=parseInt(prompt("Enter time in 24hrs"));
let a=new Date();
	a.setHours(b);
	let hour=a.getHours();
	if(hour>=6 && hour<=11)
	{
		console.log("Morning");
	}
	else if(hour>=12 && hour<=16)
	{
		console.log("Afternoon");
	}
	else{
		console.log("Night")
	}