let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern= []
let randomChosenColour;
let level = 1
let started = false


const randomNumber = function nextSequence() {
    let Number = Math.floor(Math.random() * 4)
    randomChosenColour = buttonColours[Number]
    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    gamePattern.push(randomChosenColour)
    $("h1").text(`Level: ${level++}`)
    userClickedPattern=[]

}

function gameStart(){
    if(!started){
        started = true;
        randomNumber()
    }
}

$(document).on("keypress", gameStart)

function playSound(name){
    let sound = new Audio("sounds/" + name + ".mp3")
    sound.play()
    
}
function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(()=> $("#"+ currentColour).removeClass("pressed"), 100)

}

function startOver(){
    level = 0
    gamePattern =[]
    started = false
    userClickedPattern =[]

    $("body").addClass("game-over");
    setTimeout(()=> $("body").removeClass("game-over"),200)
    $("h1").text("Game Over, Press Any Key to Restart")
        
}
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(randomNumber, 1000)
        }
    }else{
        playSound("wrong")
        startOver()

    }

}


function buttonSound() {
    $(document).on("click", (e) => {
        let userChosenColor = e.target.id
        playSound(userChosenColor)
        animatePress(userChosenColor)
        userClickedPattern.push(userChosenColor)
        let lastAnswer = userClickedPattern.length-1
        checkAnswer(lastAnswer)

    })
    
}


buttonSound()