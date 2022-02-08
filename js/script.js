'use strict';


const score0 = document.querySelector('.score--0');
const score1 = document.querySelector('.score--1');
const btnAdd0 = document.querySelector('.btn--0');
const btnAdd1 = document.querySelector('.btn--1');
const reset = document.querySelector('.reset');
document.querySelector('.turns--0').textContent = " ";
document.querySelector('.turns--1').textContent = " ";

score0.textContent = 0;
score1.textContent = 0;
let btn0 = 0;
let btn1 = 0;
let playing = true;
let team0 = [];
let team1 = [];


const winner = function(){

  if(btn0 >= 100){
    score0.classList.add('winner');
    score1.classList.add('losser');
    document.querySelector('.team0').classList.add('winner')
    document.querySelector('.team1').classList.add('losser')
    playing = false;
  }else if(btn1 >= 100){
    score1.classList.add('winner');
    score0.classList.add('losser');
    document.querySelector('.team1').classList.add('winner')
    document.querySelector('.team0').classList.add('losser')
    playing = false;
  }
}

btnAdd0.addEventListener('click', function(){
  if(playing){

    const points0 = Number(document.querySelector('.point--0').value);
    btn0 += points0;
    team0.push(points0);
    document.querySelector('.score--0').textContent = btn0;
    document.querySelector('.turns--0').textContent = team0;
    winner();
  }
})

btnAdd1.addEventListener('click', function(){
    if(playing){

      const points1 = Number(document.querySelector('.point--1').value);
      btn1 += points1;
      team1.push(points1);
      document.querySelector('.score--1').textContent = btn1;
      document.querySelector('.turns--1').textContent = team1;
      winner();
    }
    
})


reset.addEventListener('click', function(){
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  btn1 = 0;
  btn0 = 0;
  team0 = [];
  team1 = [];
  

  score0.classList.remove('winner');
  score1.classList.remove('losser');
  score1.classList.remove('winner');
  score0.classList.remove('losser');
  document.querySelector('.team0').classList.remove('winner');
  document.querySelector('.team0').classList.remove('losser');
  document.querySelector('.team1').classList.remove('losser');
  document.querySelector('.team1').classList.remove('winner');
  document.querySelector('.turns--0').textContent = " ";
  document.querySelector('.turns--1').textContent = " ";
  
})