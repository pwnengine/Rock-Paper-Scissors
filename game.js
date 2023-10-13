const types = [ 'rock', 'paper', 'scissors' ];

const game_object = {
  selection: types[0],
  computer: types[0],
  wins: 0,
  loses: 0,
  ties: 0
};

function computer_move() {
  let ran = Math.floor(Math.random() * 3) + 1;
  console.log(ran);
  return ran;
}

function check_game() {
  console.log(`sel ${game_object.selection} | com ${game_object.computer}`);

  const sel = game_object.selection;
  const com = game_object.computer;

  if((sel === 'rock' && com === 'rock') || (sel === 'paper' && com === 'paper') || (sel === 'scissors' && com === 'scissors')) {
    game_object.ties++;
    return 'tie';
  }
  if((sel === 'rock' && com === 'scissors') || (sel === 'paper' && com === 'rock')  || (sel === 'scissors' && com === 'paper')) {
    game_object.wins++;
    return 'win';
  } else {
    game_object.loses++;
    return 'lose';
  }
}

function play_game(sel) {
  game_object.selection = types[sel]; 
  game_object.computer  = types[computer_move() - 1];

  const game_outcome = check_game();

  console.log(game_outcome);

  document.querySelector('.outcome').innerHTML = 
  `
  <h3 style="color:white;">GAME OUTCOME: ${game_outcome} </h3>

  <p style="color:white;"> Wins: ${game_object.wins} <br> Ties: ${game_object.ties} <br> Loses: ${game_object.loses} </p>
  `;

  let col = 'green';
  if(game_outcome === 'lose') {
    col = 'red';
  } else if(game_outcome === 'tie') {
    col = 'orange';
  }
  document.querySelector('.msg').innerHTML = `
  <p style="font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 100px; color: ${col}; position: fixed; left:50%; top:70%; transform: translate(-50%, -70%)"> ${game_outcome}! </p>
  `;

  setTimeout(function () {
    document.querySelector('.msg').innerHTML = '';
  }, 2000);
}