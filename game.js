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
