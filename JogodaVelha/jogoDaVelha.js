//C:\Users\schin\Desktop\Arquivos\Thiago\JogoDaVelha\WebContent\index.html

var atual = "o";

function myMove(celula){
	if(celula.innerHTML == ""){
		celula.innerHTML = "x";
		celula.style.backgroundColor = "white";	
		return true;
	}else{
		alert("Casa ocupada!");
		return false;
	}
}

function mudar(celula){
	var cor;	
	var computadorAleatorio = document.getElementById("computadorAleatorio").checked;
	console.log("computadorAleatorio: " + computadorAleatorio);
	var computador = document.getElementById("computador").checked;
	console.log("computador: " + computador);
	
	//if(celula.innerHTML == ""){ // i can click
		console.log("celula vazia");
		if(computadorAleatorio){ //play with random pc	
			//console.log("myMove");
				
			if(myMove(celula)){
				if(verificarGanhador())
					reiniciar();
				else
					aiPlayRandom();
			}
						
		}else if(computador){ //play with pc						
		
				if(myMove(celula)){	
					if(verificarGanhador())
						reiniciar();
					else
						aiPlay();
				}
						
		}else{ // player x player
			if(atual == "x"){
				atual = "o";
				cor = "red";
			}
			else{
				atual = "x";
				cor = "white";
			}
			
			celula.innerHTML = atual;
			celula.style.backgroundColor = cor;	
			
			if(verificarGanhador()){
				reiniciar();
			}
		}
		
		marcarSom();		
	//}else{
	//	alert("Casa já ocupada!");
	//}	
}

function verificarGanhador(){
	if(verificarLinhas() || verificarColunas() || verificarVertical() || todasOcupadas())
		return true;
	
	return false;
}

function pickRandom(){ //problem is here
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	
	//random number 0~occuped cel
	var randomCel = Math.floor((Math.random() * 9));
	console.log("randomCel: " + randomCel);
	//is it occuped?
	var text = true;
	if(casasOcupadas() != 9){
		while(text){
					
			if(elementos[randomCel].innerHTML != ""){ //it's occuped try again
				randomCel = Math.floor((Math.random() * 9)); //pick another
			}else{
				text = false;
			}
		}
	}else{
		reiniciar();
		return 0;
	}
	
	return randomCel;
}
//return number of occuped cel
function casasOcupadas(){
	
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	
	var count = 0;
	
	for(var i = 0; i < elementos.length; i++){
		if(elementos[i].innerHTML == "")
			count++;
	}
	
	return count;
}
/*function to get where computer need to play to not let me win

*  0 1 2    if ( 0 && 1 && 2 == null) mark 2
*  3 4 5	if( 3 && 5 && 5 == null) mark 5	
*  6 7 8
*  */
function canWinCel(){
	
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	
	if(casasOcupadas() == 1)
		return pickRandom();
	
	for(var i = 0; i <  elementos.length; i+=3){ // i+=3 pular para próxima linha 0, 3, 6
		if( elementos[i].innerHTML == "" && elementos[i + 1].innerHTML == "x" && elementos[i + 2].innerHTML == "x"){
			return (i);			
		}else if( elementos[i].innerHTML == "x" && elementos[i + 1].innerHTML == "" && elementos[i + 2].innerHTML == "x"){
			return (i+1);			
		}else if( elementos[i].innerHTML == "x" && elementos[i + 1].innerHTML == "x" && elementos[i + 2].innerHTML == ""){
			return (i+2);
		}
	}
	
	for(var i = 0; i < elementos.length; i++){ //i++ pq as colunas vão de 1 em 1
		if (i == 3) // verifiquei as 3 colunhas 0, 1, e 2 então sai do loop já que ninguém ganhou
			break;
		if( elementos[i].innerHTML == "" && elementos[i + 3].innerHTML == "x" && elementos[i + 6].innerHTML == "x"){
			return i;
		}else if( elementos[i].innerHTML == "x" && elementos[i + 3].innerHTML == "" && elementos[i + 6].innerHTML == "x"){
			return (i+3);
		}else if( elementos[i].innerHTML == "x" && elementos[i + 3].innerHTML == "x" && elementos[i + 6].innerHTML == ""){
			return (i+6);
		}
	}	
	
	//x vertical
	if( document.getElementById("1").innerHTML == "" 
		&& document.getElementById("5").innerHTML == "x" 
			&& document.getElementById("9").innerHTML == "x"){
		return 0;
	}else if( document.getElementById("1").innerHTML == "x" 
			&& document.getElementById("5").innerHTML == "" 
				&& document.getElementById("9").innerHTML == "x"){
			return 4;
	}else if( document.getElementById("1").innerHTML == "x" 
		&& document.getElementById("5").innerHTML == "x" 
			&& document.getElementById("9").innerHTML == ""){
		return 8;		
	}else if( document.getElementById("3").innerHTML == "" 
		&& document.getElementById("5").innerHTML == "x" 
			&& document.getElementById("7").innerHTML == "x"){
		return 2;
	}else if( document.getElementById("3").innerHTML == "x" 
		&& document.getElementById("5").innerHTML == "" 
			&& document.getElementById("7").innerHTML == "x"){
		return 4;
	}else if( document.getElementById("3").innerHTML == "x" 
		&& document.getElementById("5").innerHTML == "x" 
			&& document.getElementById("7").innerHTML == ""){
		return 6;
	}
	
	return pickRandom();
	
}

function aiPlayRandom(celula){
	//console.log("join aiPlayRandom");
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	var random = 0 ;
	if(casasOcupadas() != 9){
		//console.log("casasOcupadas != 9");
		random = pickRandom();
		//console.log("random: " + random);
			
		elementos[random].innerHTML = "o";
		elementos[random].style.backgroundColor = "red";
	}
	
}

function aiPlay(){
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");	
	var cel = canWinCel();
	console.log("Can win cel: " + cel);
	elementos[cel].innerHTML = "o";
	elementos[cel].style.backgroundColor = "red";
	
}

function addPontoX(){
	var elemento = document.getElementById("pontosx");
	var pontos = elemento.innerHTML;
	pontos++;
	elemento.innerHTML = pontos;
}

function addPontoO(){
	var elemento = document.getElementById("pontoso");
	var pontos = elemento.innerHTML;
	pontos++;
	elemento.innerHTML = pontos;
}

function addPontoEmpate(){
	var elemento = document.getElementById("empates");
	var pontos = elemento.innerHTML;
	pontos++;
	elemento.innerHTML = pontos;
}

function todasOcupadas(){
	var contador = 0;
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	for(var i = 0; i <  elementos.length; i++)
		if( elementos[i].innerHTML != "")
			contador++;
	
	if(contador == 9){
		addPontoEmpate()
		return true;
	}
	
	return false;
}

function verificarLinhas(){
	/*
	 * 0 1 2     0, 0+1, 0+2 , linha 0 : 0, 1, 2
	 * 3 4 5	 3, 3+1, 3+2 , linha 3 : 3, 4, 5
	 * 6 7 8	 6, 6+1, 6+2 , linha 6 : 6, 7, 8	
	 * 
	 * 
	 * */
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	for(var i = 0; i <  elementos.length; i+=3){ // i+=3 pular para próxima linha
		if( elementos[i].innerHTML == "x" && elementos[i + 1].innerHTML == "x" && elementos[i + 2].innerHTML == "x"){
			alert("Jogador X ganhou!");
			addPontoX()
			return true;
		}
		if( elementos[i].innerHTML == "o" && elementos[i + 1].innerHTML == "o" && elementos[i + 2].innerHTML == "o"){
			alert("Jogador O ganhou!");
			addPontoO()
			return true;
		}		
	}
	return false;
}

function verificarColunas(){
	
	/*
	 * 0 1 2     0, 0+3, 0+6 , coluna 0: 0, 3, 6
	 * 3 4 5	 1, 1+3, 1+6 , coluna 1: 1, 4, 7
	 * 6 7 8	 2, 2+3, 2+6 , coluna 2: 2, 5, 8	
	 * 
	 * 
	 * */
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	for(var i = 0; i < elementos.length; i++){ //i++ pq as colunas vão de 1 em 1
		if (i == 3) // verifiquei as 3 colunhas 0, 1, e 2 então sai do loop já que ninguém ganhou
			break;
		if( elementos[i].innerHTML == "x" && elementos[i + 3].innerHTML == "x" && elementos[i + 6].innerHTML == "x"){
			alert("Jogador X ganhou!");
			addPontoX()
			return true;
		}
		if( elementos[i].innerHTML == "o" && elementos[i + 3].innerHTML == "o" && elementos[i + 6].innerHTML == "o"){
			alert("Jogador O ganhou!");
			addPontoO()
			return true;
		}		
	}
	return false;
}

function verificarVertical(){
	//x vertical
	if( document.getElementById("1").innerHTML == "x" 
		&& document.getElementById("5").innerHTML == "x" 
			&& document.getElementById("9").innerHTML == "x"){
		alert("Jogador X ganhou!");
		addPontoX()
		return true;
	}
	if( document.getElementById("3").innerHTML == "x" 
		&& document.getElementById("5").innerHTML == "x" 
			&& document.getElementById("7").innerHTML == "x"){
		alert("Jogador X ganhou!");
		addPontoX()
		return true;
	}
	//o vertical
	if( document.getElementById("1").innerHTML == "o" 
		&& document.getElementById("5").innerHTML == "o" 
			&& document.getElementById("9").innerHTML == "o"){
		alert("Jogador O ganhou!");
		addPontoO()
		return true;
	}
	if( document.getElementById("3").innerHTML == "o" 
		&& document.getElementById("5").innerHTML == "o" 
			&& document.getElementById("7").innerHTML == "o"){
		alert("Jogador O ganhou!");
		addPontoO()
		return true;
	}
}

function reiniciar(){
	var tabela = document.getElementsByTagName("table")[0];
	var elementos = tabela.getElementsByTagName("td");
	for(var i = 0; i <  elementos.length; i++){	
		elementos[i].innerHTML = "";
		elementos[i].style.backgroundColor = "";
	}	
	atual = "o";	
}

function marcarSom(){
	document.getElementById("marcar").play();
}

/*
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
	

	if( casa1.innerHTML == "x" 
		&& casa4.innerHTML == "x" 
			&& casa7.innerHTML == "x"){
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
*/

/*
 * 
 * /*
	if(!computadorAleatorio && !computador){ //human x human
		if(celula.innerHTML == ""){
			if(atual == "x"){
				atual = "o";
				cor = "red";
			}
			else{
				atual = "x";
				cor = "white";
			}
			marcarSom();
			
			celula.innerHTML = atual;
			celula.style.backgroundColor = cor;	
			
			if(verificarGanhador())
				reiniciar();
					
		}else
			alert("Casa já ocupada!");
	}else{//human (x) move than computer (o) move.
		
		if(celula.innerHTML == ""){
			
			celula.innerHTML = "x";
			cor = "white";
			celula.style.backgroundColor = cor;
			
			if(verificarGanhador()) //check winner
				reiniciar();
			
			else{
				if(computadorAleatorio){
					aiPlayRandom(celula);
					
					if(verificarGanhador())
						reiniciar();
					
				}else if(computador){			
					
					aiPlay();
					
					if(verificarGanhador())
						reiniciar();
				}
			}			
			
		}		
		marcarSom();
		
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
}*/
