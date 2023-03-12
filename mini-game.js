const grid=document.querySelector(".grid")
let width=300/20
let movingRight=true
let move=1
let attackersDown=[]
const resultsDisplay=document.querySelector(".result")

for(let i=1; i<225; i++){
    const square=document.createElement("div")
    grid.appendChild(square)
}

const squares=Array.from(document.querySelectorAll(".grid div"))
console.log(squares)
const attacker=[0,1,2,3,4,5,6,7,8,9,
                15,16,17,18,19,20,21,22,23,24,
                30,31,32,33,34,35,36,37,38,39]

function getAttacker(){
    for(let i=0; i<attacker.length; i++){
        if(!attackersDown.includes(i)){
        squares[attacker[i]].classList.add("attacker")
    }}
}
getAttacker()

function removeAttacker(){
    for(let i=0; i<attacker.length; i++){
        squares[attacker[i]].classList.remove("attacker")
    }
}    
function moveAtttacker(){
    const leftCorner= attacker[0]%width === 0
    const rightCorner= attacker[attacker.length-1]%width === width-1
    removeAttacker()
    if(rightCorner && movingRight){
        for(let i=0; i<attacker.length; i++){
            attacker[i]+=width+1
        }
        movingRight=false
        move=-1
    }
    if(leftCorner && !movingRight){
        for(let i=0; i<attacker.length; i++){
            attacker[i]+=width-1
        }
        movingRight=true
        move=1

    }
    for(let i=0; i<attacker.length;  i++){
        attacker[i]+=move
    }
    getAttacker()
    if(squares[nowDefenderindex].classList.contains("attacker","defender")){
        clearInterval(invaderid)
        resultsDisplay.innerHTML="Game Over"
    }
    if(attackersDown.length === attacker.length){
        clearInterval(invaderid)
        resultsDisplay.innerHTML="You win"
    }
}
invaderid= setInterval(moveAtttacker,1000)
nowDefenderindex=202
function getDefender(){
    squares[nowDefenderindex].classList.add("defender")
}
getDefender()
function removeDefender(){
    squares[nowDefenderindex].classList.remove("defender")
}

function moveDefender(e){
    squares[nowDefenderindex].classList.remove("defender")
        switch(e.key){
            case 'ArrowLeft':
                if(nowDefenderindex% width !== 0) nowDefenderindex -=1 
                break
            case 'ArrowRight':
                if(nowDefenderindex% width<width-1 ) nowDefenderindex +=1 
                break 
        }
    squares[nowDefenderindex].classList.add("defender")
}

document.addEventListener('keydown',moveDefender)
// let beamIndex=nowDefenderindex
function shootBeam(e){
    
    let beamIndex=nowDefenderindex-width
    // squares[beamIndex].classList.add("beam")
    function moveBeam(){
        // beamIndex=nowDefenderindex-width
        squares[beamIndex].classList.remove("beam")
        beamIndex -= width
        squares[beamIndex].classList.add("beam")
        if(squares[beamIndex].classList.contains("attacker")){
            const attackerDown = attacker.indexOf(beamIndex)
            attackersDown.push(attackerDown)
            squares[beamIndex].classList.remove("attacker")
            squares[beamIndex].classList.remove("beam")
            clearInterval(beamId)
            resultsDisplay.innerHTML=attackersDown.length
        }
        // if(beamIndex<width){
        //     squares[beamIndex].classList.remove("beam")
        //     clearInterval(beamId)
        // }
    }
    switch(e.key){
        case 'ArrowUp':
            beamId= setInterval(moveBeam,50)
            break

    }
    
    
}
 document.addEventListener('keydown',shootBeam)