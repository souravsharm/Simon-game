let array = ["red", "blue", "green", "yellow"]
let hasStarted = false; 
function nextSquence(){
    let randomNumber = Math.floor(Math.random()*4)
    return array[randomNumber]
}
function pattern(){

    
    let sequence = []
    let value = nextSquence();
    sequence.push(value)
    let lastColor = sequence[sequence.length -1]
    buttonAnimation(lastColor)
    console.log("The "+ sequence + " The last color is: " + lastColor)
    if (!hasStarted) { 
        hasStarted = true; 
        return;
    }
      
    userTurn(sequence, lastColor)

    
}   
function userTurn(sequence, lastColor){
    let gameSelectedColor = lastColor 
    $(document).on("click", (event) => {
        console.log(event.target)

    })
    
    // let value = userClick.hasClass(gameSelectedColor)
    // console.log(value)
    // if() {
    //     addingSound("wrong")
    // }
    // $(gameSelectedColor).click(pattern)

}
$(document).on("keypress", pattern)

function addingSound(color){
    let soundURL = "./sounds/" + color + ".mp3"
    let soundObj = new Audio(soundURL);
    soundObj.play()

    setTimeout(()=> {
        soundObj.pause()

    }, 1000)
}

function buttonAnimation(color){
    $("." + color).addClass("pressed")
    addingSound(color)
    setTimeout( () =>  {
        $("." + color).removeClass("pressed")
    }, 10)
   
}
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
    level = 1
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
