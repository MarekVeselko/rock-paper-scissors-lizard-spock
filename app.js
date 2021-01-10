let scoreNumber = 0;

    
    document.getElementById("score").innerHTML = scoreNumber;
    
    const selectionButtons = document.querySelectorAll('[data-selection]');
    const finalColumn = document.querySelector("[data-final-column]")
    const SELECTIONS = [
        {
            name: "rock",
            emoji: "images/icon-rock.png",
            beats: "scissors", 
            beats2:"lizard"
        },
        {
            name: "paper",
            emoji: "images/icon-paper.png",
            beats: "rock",
            beats2:"spock"
        },
        {
            name: "scissors",
            emoji: "images/icon-scissors.png",
            beats: "paper", 
            beats2:"lizard"
        },
        {
            name: "lizard",
            emoji: "images/icon-lizard.png",
            beats: "paper",
            beats2: "spock"
        },
        {
            name: "spock",
            emoji: "images/icon-spock.png",
            beats: "rock", 
            beats2:"scissors"
        }
    ]
    
    selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener("click", e => {
            const selectionName = selectionButton.dataset.selection;
            const selection = SELECTIONS.find(selection => selection.name === selectionName)
            makeSelection(selection);
        })
    })
    
    function makeSelection(selection){
    const computerSelection = randomSelection();
    const playerWinner = isWinner(selection,computerSelection);
    const computerWinner = isWinner(computerSelection,selection);
    const playerWinner2 = isWinner2(selection,computerSelection);
    const computerWinner2 = isWinner2(computerSelection,selection);
    document.getElementById("play-again-text").innerHTML = "draw";
    if(playerWinner){
        scoreNumber = scoreNumber+1;
        document.getElementById("score").innerHTML = scoreNumber;
        document.getElementById("play-again-text").innerHTML = "You win";
    }
    if(playerWinner2){
        scoreNumber = scoreNumber+1;
        document.getElementById("score").innerHTML = scoreNumber;
        document.getElementById("play-again-text").innerHTML = "You win";
    }
    if(computerWinner){
        scoreNumber = scoreNumber-1;
        document.getElementById("score").innerHTML = scoreNumber;
        document.getElementById("play-again-text").innerHTML = "You lose";
    }
    if(computerWinner2){
        scoreNumber = scoreNumber-1;
        document.getElementById("score").innerHTML = scoreNumber;
        document.getElementById("play-again-text").innerHTML = "You lose";
    }
    
    addSelectionResults(computerSelection,computerWinner)
    addSelectionResults(selection,playerWinner)
    
    document.getElementById("selections").style.display ="none";
    document.getElementById("play-again-box").style.display = "inline-block";
    }
    
    function addSelectionResults(selection,winner){
        const div = document.createElement("img");
        div.src= selection.emoji;
        div.id = "result__selection"
        div.classList.add("result__selection");
        
        if(selection.name==="rock"){
            div.style.borderColor="#de405d";
        }
        if(selection.name==="paper"){
            div.style.borderColor="#516df3";
        }
        if(selection.name==="scissors"){
            div.style.borderColor="#eca318";
        }
        if(selection.name==="lizard"){
            div.style.borderColor="#49B7CE"
        }
        if(selection.name==="spock"){
            div.style.borderColor="#8A59E6"
        }
    
    
        finalColumn.after(div)
    }
    
    function randomSelection(){
        const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
        return SELECTIONS[randomIndex]
    }
    
    function isWinner(selection, opponentSelection){
        return selection.beats === opponentSelection.name
    }
    
    function isWinner2(selection, opponentSelection){
        return selection.beats2 === opponentSelection.name
    };




document.getElementById("play-again-btn").addEventListener("click",()=>{
    document.getElementById("selections").style.display ="inline-block";
document.getElementById("play-again-box").style.display = "none";
document.getElementById("result__selection").remove();
document.getElementById("result__selection").remove();
});

document.getElementById("rules-btn").addEventListener("click",()=>{
    document.getElementById("rules-box").style.display = "inline-block";
})

document.getElementById("x-button").addEventListener("click",()=>{
    document.getElementById("rules-box").style.display = "none";
    document.getElementById("myVideo").pause();
})

