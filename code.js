const buttons = document.querySelectorAll('.buttons button');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
let playerscore=0;
let computerscore=0;
function getComputerMove() {
    const move =['rock', 'paper', 'scissors'];
    const randomindex = Math.floor(Math.random() * move.length);
    return move[randomindex];
}
function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) return 'tie';
    if (
        (playerMove === 'rock' && computerMove === 'scissors')
        || (playerMove === 'paper' && computerMove === 'rock')
        || (playerMove === 'scissors' && computerMove === 'paper')
    ){
        return 'player';
    }
    else {
        return 'computer';
    }
}
buttons.forEach(button => {
    if (button.disable) return;  
    button.addEventListener('click', ()=> { 
    const playerMove = button.dataset.move;
    const computerMove = getComputerMove();
    const winner = determineWinner(playerMove, computerMove);

    if(winner === 'player'){
        playerscore++;
    }
    else if(winner === 'computer'){
        computerscore++;
    }

    if(winner === 'tie'){
        resultDiv.innerText = "It's a tie!";
    }
    else if (winner === 'player'){
        resultDiv.innerText = "You win!";
    }
    else{
        resultDiv.innerText = "Computer wins!";
    }

    scoreDiv.innerText = `Player: ${playerscore} - computer ${computerscore}`;

    if(playerscore===5||computerscore===5){
        const finalwinner=playerscore===5 ?
        'you are the champion!': 'computer wins the match!';
        resultDiv.innerText = `${finalwinner} Final score - player: ${playerscore} computer: ${computerscore}` ;
        button.forEach(b=> b.disable =true );
    }
    });

  });


    
 

