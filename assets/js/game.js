const choices = ['paper','rock','scissors'],
$score = document.getElementById("score"),
buttons = document.querySelectorAll(".chosen"),
$main = document.querySelector(".main"),
$reset = document.getElementById("reset"),
$selection = document.querySelector(".selection"),
user_option = document.getElementById("User-option"),
CPU_option = document.getElementById("CPU-option"),
$flagResult = document.getElementById("result"),
$open = document.querySelector(".btn-rule"),
modal = document.getElementById("rules-modal"),
$close = document.querySelector(".btn-close");

let userPick,
score = 0

$open.addEventListener("click",()=>{
    modal.style.display = 'flex';
});

$close.addEventListener("click",()=>{
    modal.style.display = 'none';
})
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        userPick = button.getAttribute('data-choice');
        
        winner();
    });
});
$reset.addEventListener("click",()=>{
    $main.style.display = "flex";
    $selection.style.display = 'none';
});
const totalScore = () =>{
    score += 1;

    $score.textContent = score;
}
const pickRandomChoice = () =>{
    return choices[Math.floor(Math.random() * choices.length)];
}

const winner = () =>{
    const CPU = pickRandomChoice();

    showResult(user_option,userPick);
    showResult(CPU_option,CPU);

    if(userPick === CPU){
        $flagResult.innerText = 'draw';
    }else if(userPick === 'paper' && CPU === 'rock' ||
     userPick === 'rock' && CPU === 'scissors' || 
     userPick === 'scissors' && CPU === 'paper'){
        $flagResult.innerText = 'Win';
        totalScore();
    }else{
        $flagResult.innerText = 'Lose';
    }
    $main.style.display = "none";
    $selection.style.display = 'flex';
}
const showResult = (element,choice)=>{
    element.classList.remove('btn-paper');
    element.classList.remove('btn-rock');
    element.classList.remove('btn-scissors');

    element.classList.add(`btn-${choice}`);
    element.querySelector("img").src = `assets/images/icon-${choice}.svg`;
    element.querySelector("img").alt = choice;
}