/*  SDI Project 3
	Raven Broussard
	SDI November 13, 2014
*/

// Variables
var familyMembers = ["Raven", "Cayla", "Cyrus"];
var vacationSpots = ["Statue of Liberty", "Lego Land", "Disney World"];
var moneyAvailable = true;
var moneyPriority = 2;
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
	
	
	