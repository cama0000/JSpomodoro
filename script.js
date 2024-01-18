let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let beginBtn = document.getElementById("begin");
let loginPanel = document.querySelector(".loginPanel");
let settingsPanel = document.querySelector(".settingsPanel");
let inputFocus = document.getElementById("inputFocus");
let inputRelax = document.getElementById("inputRelax");
let title = document.getElementById("title");
let focusBtn = document.getElementById("focusBtn");
let relaxBtn = document.getElementById("relaxBtn");
let vacationBtn = document.getElementById("vacationBtn");

let timeSet = 25 * 60;
let savedTime = timeSet;
let focusVal = 25;
let relaxVal = 5;
let vacationVal = 10;
min.innerHTML = 25;

settingsPanel.style.display = "none";
loginPanel.style.display = "none";
focusBtn.disabled = true;

function setFocus(){
    let zeroMin = (focusVal < 10) ? '0' : '';
    timeSet = focusVal * 60;
    savedTime = timeSet;
    min.innerHTML = zeroMin + timeSet / 60;
    sec.innerHTML = "00";

    focusBtn.disabled = true;
    relaxBtn.disabled = false;
    vacationBtn.disabled = false;
}

function setRelax(){
    let zeroMin = (relaxVal < 10) ? '0' : '';
    timeSet = relaxVal * 60;
    savedTime = timeSet;
    min.innerHTML = zeroMin + timeSet / 60;
    sec.innerHTML = "00";

    focusBtn.disabled = false;
    relaxBtn.disabled = true;
    vacationBtn.disabled = false;
}

function setVacation(){
    let zeroMin = (vacationVal < 10) ? '0' : '';
    timeSet = vacationVal * 60;
    savedTime = timeSet;
    min.innerHTML = zeroMin + timeSet / 60;
    sec.innerHTML = "00";

    focusBtn.disabled = false;
    relaxBtn.disabled = false;
    vacationBtn.disabled = true;
}

function executeTimer(){
    if(beginBtn.innerHTML === "Begin"){
        beginBtn.innerHTML = "Pause";
        beginBtn.style.backgroundColor = "green";

        if(beginBtn.innerHTML === "Pause"){
            let minute = Math.floor(timeSet / 60);
            let second = Math.floor(timeSet % 60);

            let zeroMin = (minute < 10) ? '0' : '';
            let zeroSec = (second < 10) ? '0' : '';

            min.innerHTML = zeroMin + minute;
            sec.innerHTML = zeroSec + second;

            title.innerHTML = min.innerHTML + ":" + sec.innerHTML 
                            + " | Pomodoro Timer";

            timeSet--;

            if(timeSet < 0){
                beginBtn.innerHTML = "Begin";
                beginBtn.style.backgroundColor = "rgb(111, 255, 133)";
                title.innerHTML = "Pomodoro Timer";
            }
        }

        const interval = setInterval(()=>{
            if(beginBtn.innerHTML === "Pause"){
                let minute = Math.floor(timeSet / 60);
                let second = Math.floor(timeSet % 60);

                let zeroMin = (minute < 10) ? '0' : '';
                let zeroSec = (second < 10) ? '0' : '';

                min.innerHTML = zeroMin + minute;
                sec.innerHTML = zeroSec + second;

                title.innerHTML = min.innerHTML + ":" + sec.innerHTML 
                            + " | Pomodoro Timer";

                timeSet--;

                if(timeSet < 0){
                    beginBtn.innerHTML = "Begin";
                    beginBtn.style.backgroundColor = "rgb(111, 255, 133)";
                    title.innerHTML = "Pomodoro Timer";
                    clearInterval(interval);
                }
            }
            else{
                clearInterval(interval);
            }
        }, 1000);
    }
    else{
        beginBtn.innerHTML = "Begin";
        beginBtn.style.backgroundColor = "rgb(111, 255, 133)";
    }
}

function resetTimer(){
    timeSet = savedTime;

    if(beginBtn.innerHTML === "Begin"){
        let zeroMin = (relaxVal < 10) ? '0' : '';
        min.innerHTML = zeroMin + timeSet / 60;
        sec.innerHTML = "00";
    }
}

function displayLogin(){
    if(loginPanel.style.display === "none"){
        loginPanel.style.display = "block";
    }
}

function displaySettings(){
    if(settingsPanel.style.display === "none"){
        settingsPanel.style.display = "block";
    }
}

function closeSettings(){
    settingsPanel.style.display = "none";

    validateInputs();
}

function validateInputs(){
    //check user changed focus and relax values
    if(inputFocus.value != ""){
        focusVal = inputFocus.value;
    }

    if(inputRelax.value != ""){
        relaxVal = inputRelax.value;
    }

    if(inputVacation.value != ""){
        vacationVal = inputVacation.value;
    }
}