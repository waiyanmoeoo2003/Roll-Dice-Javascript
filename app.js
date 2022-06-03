
var scores,activePlayer,roundScore,gameplaying;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){ 
	if(gameplaying){
		// alert(Math.floor(Math.random()*6)+1);
		var dice=Math.floor(Math.random()*6+1);
		var diceDOM=document.querySelector('.dice');
		diceDOM.src="dice-"+dice+".png";
		diceDOM.style.display="block";
		if(dice>1){
			roundScore+=dice;
			document.querySelector('#current-'+activePlayer).textContent=roundScore;
		}else{
			nextplayer();
		}
	}
});
function nextplayer(){
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display="none";
	activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore=0;
	document.querySelector('#current-0').textContent=0;
	document.querySelector('#current-1').textContent=0;

}
document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gameplaying){
		scores[activePlayer]+=roundScore;
		document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
		if(scores[activePlayer]>=30){
			gameplaying=false;
			document.querySelector('#name-'+activePlayer).textContent='WINNER !!';
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		}else{
			nextplayer();

		}
	}
	

})
function init(){
	scores=[0,0];
	activePlayer=0;
	roundScore=0;
	gameplaying=true;
	document.querySelector('.dice').style.display = "none";
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('#name-0').textContent='PLAYER 1';
	document.querySelector('#name-1').textContent='PLAYER 2';
	document.querySelector('#score-0').textContent=0;
	document.querySelector('#score-1').textContent=0;
	document.querySelector('#current-0').textContent=0;
	document.querySelector('#current-1').textContent=0;

}
document.querySelector('.btn-new').addEventListener('click',init);