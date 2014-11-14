/*  SDI Project 3
	Raven Broussard
	SDI November 13, 2014
*/

// Variables
var familyMembers = ["Raven", "Cayla", "Cyrus"];
var vacationSpots = ["Statue of Liberty", "Lego Land", "Disney World"];
var ticketsAvailable = true;
var ticketPriority = 2;
var knownProblems = ["no vacancies", "long lines", "not enough time"];
var packedEverything = true;
var luggageLost = false;

// Objects
var theAirlines = [
		Delta = {overbooked: false, pilotName: "Larry", discountDays; ["Tuesday", "Wednesday", "Thursday"]}
		Southwest = {, pilotName: "James", discountDays; ["Monday", "Sunday" "Friday"]}];
		
var  = function (item) {
		var gateNumber = "";
		var setGate = function (num){  //sets gate number we will leave from
				gateNumber = num;
				return gateNumber;
		}
		
		var departure = "";
		var setDeparture = function (newDeparture) { //sets up/down
			departure = newDeparture;
			return departure;
		} 
		
		var hours = 8;
		var addHours = function (addHours){   //adds time to the vacation
			return (hours + addHours);
		}
		
		var getFlight = function (){   //return day or night flight
			return "daytime";
		}
		
		var vacationItinerary = funtion (extreme) {  
			for (var i = 0; i < extreme.vactionSpots.length; i++){
			var vacy = extreme.vacationSpots[i];
			console.log("Gate Number: " + vacy.gatenumber + " is where we have to depart: " + vacy.getflight + "we have" + vacy.hours + " and our flight is currently "  + vacy.status + ".");
		}
	}
	
	return {
			"addHours":       addHours,
			"setDeparture":   setDeparture,
			"getFlight":    getFlight,
			"vacationItinerary": vacationItinerary,
			"setGate":  setGate,
			
	}
	
	
//  Functions

var arrived = function (vactionSpots){  //  Procedure
	console.log("Well we are about to land at our destination, let's go and have a great time!");
	if (vactionSpots === "Statue of Liberty"){
		console.log("Statue of Liberty is the first thing I want to visit, let's hope everything is good.");
	}
	else{
		console.log("This is Texas, let's go to Lego Land.");
	}
	return;
}

var newProblems = function (familyMembers, knownProblems){   //  Boolean function
	console.log("We need to find out if we are on schedule for all this site seeing, let's ask " + familyMembers + ".");
	if (knownProblems){
		console.log("We'll to find a solution and move forward.");
		return knowProblem;
	}
	else{
		console.log("Everything is going so great, let's have a great time.");
		return knownProblem;
	}
}

var workers = function (priority){ // Number function
 		var availableWorkers = 0;
	while (availableWorkers < priority){
		console.log("Everything is so wrong.. Excuse me, can anyone help me with this?");
		console.log("I have a priority " + ticketPriority + " problem and need " + (ticketPriority - availableWorkers) + " more people to help.");
		availableWorkers++;
}
console.log("Thanks, for all the help.");
return availableWorkers;
}

var reschedule = function (vactionSpots, reschedule){ // string function
	var newSite;
	var locationDistance = 10;
	var reference = "Site seeing map";
	if (vacationSpots === "Lego Land") {
			newSite = "Sea Life";
	}
	else {
			newSite = "Grapevine Golf Course";
	}
	var regroup = "We should try " + newSite + " " + reschedule + " which can be found on the map " + reference + " near by" + locationDistance + ".";
	return regroup;
}

var notifyPilots = function (ticketPriority, familyMembers){ // array function
	var travelHours = 7;
	var waitInLine = 2;
	var prepTime = 1;
	var message = "";
	var familyMembersNotified = [];
	for (var i = 0; i < familyMembers.length; i++){
		console.log("Excuse me, " + familyMembers[i] + ", I wanted to let you know that the park will be open" +
		(travelHours + waitInLine + prepTime) + " hours.");
		familyMembersNotified.push(familyMembers[i]);
	}
	return familyMembersNotified;
}

var checkAvailablity = function (theAirlines, discountDays){ //pass in object to compare to the day
	for(var i = 0; i < theAirlines.length; i++){ //for each obj (or index) in the array...
		console.log("fist choice");
	var daysArray = theAirlines[i].days;
	for (var j = 0; i < daysArray.length; j++){ //for each string in the "days" array...
		console.log("second choice...");
		if (daysArray[j] === "mon"){ //look for "mon"
			console.log("third choice...");
	return theAirlines[i];
	}
	}
}
};

