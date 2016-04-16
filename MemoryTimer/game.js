var total = 5;
var miss = 0;

/*button to start*/
function start(btnStart){
	if(btnStart.innerHTML == "Start"){
		btnStart.innerHTML = "Reset";		
		timeToEnd();		
		play();
	}
	else{
		btnStart.innerHTML = "Start";
		reset();
	}
}

/* clicked cell */
function check(cel){	
	if(cel.innerHTML == ""){
		addMiss();
		return false;
	}
	else{
		if(total == 0){
			return true;
		}
		else{
			total--;
			cel.innerHTML = "";
		}
	}
}

/* setup game */
function play(){
	var plays = 0;
	var nCell = 0; //0 to 9
	var oldCell = 0;
	var tab = document.getElementsByTagName("table")[0];
	var cel = tab.getElementsByTagName("td");	
	
	while (plays <= 4){
		do{
			nCell = Math.floor(Math.random() * 9);			
		}while(nCell == oldCell);
		cel[nCell].innerHTML = "X";
		oldCell = nCell;			
		plays++;
	}
}

/* timer */
function timeToEnd(){
	var timeText = document.getElementById("time");
	var interval;
	var seconds = 3;
	var second = 0;
	
	interval = setInterval(function(){
		timeText.innerHTML = (seconds - second).toString() + " s";
		timeText.style.color = "red";

		if(cellsEmpty() == 9){ //if win			
			addScore();
			total = 5;			
			play();
			//seconds = 0;
			timeToEnd();
		}else if(second >= seconds){ //if time end
			clearInterval(interval);			
		}
		second++;
	}, 1000);	
}

/* check if all cell is empty */
function cellsEmpty(){
	var tab = document.getElementsByTagName("table")[0];
	var cel = tab.getElementsByTagName("td");
	var count = 0;
	for(var i = 0; i < cel.length; i++){
		if(cel[i].innerHTML == "")
			count++;
	}
	return count;
}


/* add score */
function addScore(){
	var s = document.getElementById("score");
	var sum = parseInt(s.innerHTML) + 1;
	s.innerHTML = sum;
}

function addMiss(){
	var s = document.getElementById("miss");
	var sum = parseInt(s.innerHTML) + 1;
	s.innerHTML = sum;
}

/* reset game ??? */
function reset(){
	total = 5;
}

