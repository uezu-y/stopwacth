var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop"); 
var resetBtn = document.getElementById("reset");
var dispTime = document.getElementById("time");      

var timer;              
var startTime;          
var elapsedTime = 0;    
var stopTime = 0;       


// スタートボタン押した時
function start(){
    
    startTime = Date.now();

    measure();

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

// ストップボタン押した時
function stop(){
    
    clearInterval(timer);

    stopTime += Date.now() - startTime;

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

// リセットボタン押した時
function reset(){
    
    clearInterval(timer);

    elapsedTime = 0;
    stopTime = 0;
    dispTime.textContent = "00:00:00.0";

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

// 時間を計測する
function measure() {
    
    timer = setTimeout(function () {
        
        // 経過時間を設定して、画面へ表示する
        elapsedTime = Date.now() - startTime + stopTime;
        dispTime.textContent = new Date(elapsedTime).toISOString().slice(11, 21);

        measure();
    }, 10);
}



