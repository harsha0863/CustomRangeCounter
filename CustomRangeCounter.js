let fromUserInput=document.getElementById("fromUserInput");
let toUserInput=document.getElementById("toUserInput");
let counterText=document.getElementById("counterText");
let startBtn=document.getElementById("startBtn");
startBtn.onclick=function(){
    if(fromUserInput.value===""){
        alert("Enter the from value");
    }
    else if(toUserInput.value===""){
        alert("Enter to value");
    }
    else{
        let incr=parseInt(fromUserInput.value);
        let stop=parseInt(toUserInput.value)
        let counterFunc=function(){
            counterText.textContent=incr;
            if(incr===stop){
                clearInterval(intervalId);
            }
              incr=incr+1;
        }
        let intervalId=setInterval(counterFunc,1000);
    }
}