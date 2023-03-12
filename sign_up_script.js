// let m1=document.getElementById("mismatch_mail")
// var m2=document.getElementById("mismatch_passwd")

// var email=document.getElementById("email").value
// var con_email=document.getElementById("#confirm_email").value
// var password=document.getElementById("#password").value
// var confirm_password=document.getElementById("#confirm_password").value


function isokay(){
    
    var email=document.querySelector("#email").value
    console.log("email")
    var con_email=document.getElementById("confirm_email").value
    console.log("confirm_email")
    var password=document.getElementById("password").value
    var confirm_password=document.getElementById("confirm_password").value
    if((email === null)||(con_email === null)||(password === null)||(confirm_password === null)){
        // m1.innerText +="Someone is null"

    }
     if((email !== con_email) || (password !== confirm_password)){
        //  m1.textContent="Mismatch mail id or Password"
         return alert("Mismatch mail id or Password")
     }
     return alert("message")
};

function getResult(playerMoveNum, oppMoveNum){
    if(playerMoveNum === oppMoveNum){//3cases
        result="Tie"
    }
    else if( oppMoveNum - playerMoveNum === 1){//1-0,2-1
        result="Win"
    }
    else if( playerMoveNum - oppMoveNum === 1){//0-1,1-2
        result="Lost"
    }
    else{
        if(oppMoveNum=== 2){
            result="Lost"
        }
        else{
            result="Win"
        }
    }
    return result
    
}


function play(playerMoveNum){
    let result=""
    let oppMoveNum=Math.floor(Math.random()*3)
    result = getResult(playerMoveNum,oppMoveNum)
    let move=document.getElementById("move")
    let oppMove=document.getElementById("oppMove")
    let res=document.getElementById("result")
    let moves=["Rock","Scissor","Paper"]
    move.textContent= "Your Move: "+moves[playerMoveNum]
    oppMove.textContent="Opponent Move: "+moves[oppMoveNum]
    res.textContent="Result: "+result
}



