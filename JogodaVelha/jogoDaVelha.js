var atual = "o";

function mudar(celula){
	var cor;
	if(celula.innerHTML == ""){
		if(atual == "x"){
			atual = "o";
			cor = "red";
		}
		else{
			atual = "x";
			cor = "white";
		}
		celula.innerHTML = atual;
		celula.style.backgroundColor=cor;
		verificar();
	}
	
}

function verificar(){
	var ganhador = false;
	var casa1 = document.getElementById("1");
	var casa2 = document.getElementById("2");
	var casa3 = document.getElementById("3");
	var casa4 = document.getElementById("4");
	var casa5 = document.getElementById("5");
	var casa6 = document.getElementById("6");
	var casa7 = document.getElementById("7");
	var casa8 = document.getElementById("8");
	var casa9 = document.getElementById("9");
	
	/* linhas */
	/* x */
	if( casa1.innerHTML == "x" 
		&& casa2.innerHTML == "x" 
			&& casa3.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	
	if( casa4.innerHTML == "x" 
		&& casa5.innerHTML == "x" 
			&& casa6.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	
	if( casa7.innerHTML == "x" 
		&& casa8.innerHTML == "x" 
			&& casa9.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	
	/* o */
	if( casa1.innerHTML == "o" 
		&& casa2.innerHTML == "o" 
			&& casa3.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	
	if( casa4.innerHTML == "o" 
		&& casa5.innerHTML == "o" 
			&& casa6.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	
	if( casa7.innerHTML == "o" 
		&& casa8.innerHTML == "o" 
			&& casa9.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	
	/* colunas */
	/* x */
	if( casa1.innerHTML == "x" 
		&& casa4.innerHTML == "x" 
			&& casa5.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	
	if( casa2.innerHTML == "x" 
		&& casa5.innerHTML == "x" 
			&& casa8.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	
	if( casa3.innerHTML == "x" 
		&& casa6.innerHTML == "x" 
			&& casa9.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	
	/* o */
	if( casa1.innerHTML == "o" 
		&& casa4.innerHTML == "o" 
			&& casa7.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	
	if( casa2.innerHTML == "o" 
		&& casa5.innerHTML == "o" 
			&& casa8.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	
	if( casa3.innerHTML == "o" 
		&& casa6.innerHTML == "o" 
			&& casa9.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	
	/* transversal */
	/* x */
	if(casa1.innerHTML == "x" 
		&& casa5.innerHTML == "x"
			&& casa9.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	if(casa3.innerHTML == "x" 
		&& casa5.innerHTML == "x"
			&& casa7.innerHTML == "x"){
		alert("X ganhador!");
		ganhador = true;
	}
	/* o */
	if(casa1.innerHTML == "o" 
		&& casa5.innerHTML == "o"
			&& casa9.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	if(casa3.innerHTML == "o" 
		&& casa5.innerHTML == "o"
			&& casa7.innerHTML == "o"){
		alert("o ganhador!");
		ganhador = true;
	}
	
	if(ganhador)
		reiniciar();
	
	if(casa1.innerHTML != "" && casa2.innerHTML != "" && casa3.innerHTML != ""
		&& casa4.innerHTML != "" && casa5.innerHTML != "" && casa6.innerHTML != ""
			&& casa7.innerHTML != "" && casa8.innerHTML != "" && casa9.innerHTML != ""){ 
		alert("Nenhum ganhador!");
		reiniciar();
	}
	
	
}

function reiniciar(){
	var casa1 = document.getElementById("1");
	var casa2 = document.getElementById("2");
	var casa3 = document.getElementById("3");
	var casa4 = document.getElementById("4");
	var casa5 = document.getElementById("5");
	var casa6 = document.getElementById("6");
	var casa7 = document.getElementById("7");
	var casa8 = document.getElementById("8");
	var casa9 = document.getElementById("9");
	
	casa1.innerHTML = "";
	casa1.style.backgroundColor = "";
	casa2.innerHTML = "";
	casa2.style.backgroundColor = "";
	casa3.innerHTML = "";
	casa3.style.backgroundColor = "";
	casa4.innerHTML = "";
	casa4.style.backgroundColor = "";
	casa5.innerHTML = "";
	casa5.style.backgroundColor = "";
	casa6.innerHTML = "";
	casa6.style.backgroundColor = "";
	casa7.innerHTML = "";
	casa7.style.backgroundColor = "";
	casa8.innerHTML = "";
	casa8.style.backgroundColor = "";
	casa9.innerHTML = "";
	casa9.style.backgroundColor = "";
	
	atual = "o";
}
