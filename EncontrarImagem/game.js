/*
 * 0 1
 * 2 3
 */

var log = true;
var where = 0;
var oldPos = 0;
var cel = 0;
var row = 0;
var won = false;
var clicks = 0;

function start(){
	var oldPos = where;	
	
	while(where == oldPos){
		where = Math.floor(Math.random() * 8);			
	}
	
	if(where == 0){
		cel = 0;
		row = 0;
	}else if(where == 1){
		cel = 1;
		row = 0;
	}else if(where == 2){
		cel = 2;
		row = 0;
	}else if(where == 3){
		cel = 0;
		row = 1;
	}else if(where == 4){
		cel = 1;
		row = 1;
	}else if(where == 5){
		cel = 2;
		row = 1;
	}else if(where == 6){
		cel = 0;
		row = 2;
	}
	else if(where == 7){
		cel = 1;
		row = 2;
	}else {
		cel = 2;
		row = 2;
	}
	
	if(log){
		//console.log(where.toString());
		console.log("Postion : cell: " + cel + " , row: " + row);
	}
	
	return where;
}

function restart(){
	won = false;
	
	var p = document.getElementById("points");
	p.innerHTML = "3";
	
	var imgs = document.getElementsByTagName("img");
	
	for(var i = 0; i < imgs.length; i++){
		imgs[i].src = "find.png";
	}
	
	start();
}

function check(cell){
	clicks++;
	
	if(log){
		console.log("To find cell: " + cel);
		console.log("To find row: " + row);
		console.log("Click cell: " + cell.cellIndex);
		console.log("Click row: " + cell.parentNode.rowIndex);
	}	
	
	var c = cell.cellIndex;
	var r = cell.parentNode.rowIndex;
	
	if(c == cel && r == row){
		won = true;
		if(c == 0 && r == 0)
			document.getElementById("p1").src = "hide.png";		
		else if(c == 1 && r == 0)
			document.getElementById("p2").src = "hide.png";
		else if(c == 2 && r == 0)
			document.getElementById("p3").src = "hide.png";
		else if(c == 0 && r == 1 )
			document.getElementById("p4").src = "hide.png";	
		else if(c == 1 && r == 1)
			document.getElementById("p5").src = "hide.png";	
		else if(c == 2 && r == 1)
			document.getElementById("p6").src = "hide.png";	
		else if(c == 0 && r == 2)
			document.getElementById("p7").src = "hide.png";	
		else if(c == 1 && r == 2)
			document.getElementById("p8").src = "hide.png";	
		else if(c == 2 && r == 2)
			document.getElementById("p9").src = "hide.png";	
	}else{		
		if(chances() == 0){
			alert("you loose!");
			restart();
		}
	}
}

function checkWin(){
	if(confirm("You WON! \n Play again?")){
		restart();
		start();
	}
}

function chances(){
	var c = document.getElementById("points");
	var a = c.innerHTML;
	a--;
	c.innerHTML = a;
	if(log){
		console.log("Chances: " + a);		
	}
	
	return a;	
}

function hoverImage(imgControl){
	//if(imgControl.src != "hide.png")
	//	imgControl.src = "hover.png";
	//else
	//	imgControl.src = "hide.png"
}

function unHoverImage(imgControl){
	//if(imgControl.src != "hide.png")
	//	imgControl.src = "find.png";
	//else
	//	imgControl.src = "hide.png"
}
