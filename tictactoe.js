flag = 1
document.addEventListener('DOMContentLoaded', win_loss());
function win_loss(){

    let btn1 = document.querySelector('#mybtn1').innerHTML;
    let btn2 = document.querySelector('#mybtn2').innerHTML;
    let btn3 = document.querySelector('#mybtn3').innerHTML;
    let btn4 = document.querySelector('#mybtn4').innerHTML;
    let btn5 = document.querySelector('#mybtn5').innerHTML;
    let btn6 = document.querySelector('#mybtn6').innerHTML;
    let btn7 = document.querySelector('#mybtn7').innerHTML;
    let btn8 = document.querySelector('#mybtn8').innerHTML;
    let btn9 = document.querySelector('#mybtn9').innerHTML;

    if ((btn1 === 'X' && btn2 === 'X' && btn3 === 'X') ||
        (btn4 === 'X' && btn5 === 'X' && btn6 === 'X') ||
        (btn7 === 'X' && btn8 === 'X' && btn9 === 'X') || 
        (btn1 === 'X' && btn4 === 'X' && btn7 === 'X') ||
        (btn2 === 'X' && btn5 === 'X' && btn8 === 'X') || 
        (btn3 === 'X' && btn6 === 'X' && btn9 === 'X') ||
        (btn1 === 'X' && btn5 === 'X' && btn9 === 'X') || 
        (btn3 === 'X' && btn5 === 'X' && btn7 === 'X')){
            disableAll();
            document.querySelector('#myLabel').innerText = 'Player X Wins! Click Reset';
        }
        else if ((btn1 === 'O' && btn2 === 'O' && btn3 === 'O') ||
        (btn4 === 'O' && btn5 === 'O' && btn6 === 'O') ||
        (btn7 === 'O' && btn8 === 'O' && btn9 === 'O') || 
        (btn1 === 'O' && btn4 === 'O' && btn7 === 'O') ||
        (btn2 === 'O' && btn5 === 'O' && btn8 === 'O') || 
        (btn3 === 'O' && btn6 === 'O' && btn9 === 'O') ||
        (btn1 === 'O' && btn5 === 'O' && btn9 === 'O') || 
        (btn3 === 'O' && btn5 === 'O' && btn7 === 'O')){
            disableAll();
            document.querySelector('#myLabel').innerText = 'Player O Wins! Click Reset';
        }
        else{
            document.querySelector('#myLabel').innerText = 'Is game draw?';
        }

}

function disableAll(){
    for (let i = 1; i<=9; i++){
        document.querySelector(`#mybtn${i}`).disabled = true;
    }
}

function toggle1(){
    const btn1 = document.querySelector('#mybtn1')   
    // Button 1
    if (flag == 1){    
        btn1.textContent = 'X';
        document.querySelector('#mybtn1').disabled = true;
        flag = 0;
    }
    else {
        btn1.textContent = 'O'
        document.querySelector('#mybtn1').disabled = true;
        flag = 1;
    }
}
function toggle2(){
    const btn2 = document.querySelector('#mybtn2')    
    // Button 2
    if (flag == 1){    
        btn2.textContent = 'X';
        document.querySelector('#mybtn2').disabled = true;
        flag = 0;
    }
    else {
        btn2.textContent = 'O'
        document.querySelector('#mybtn2').disabled = true;
        flag = 1;
    }
}
function toggle3(){
    const btn3 = document.querySelector('#mybtn3')    
    // Button1
    if (flag == 1){    
        btn3.textContent = 'X';
        document.querySelector('#mybtn3').disabled = true;
        flag = 0;
    }
    else {
        btn3.textContent = 'O'
        document.querySelector('#mybtn3').disabled = true;
        flag = 1;
    }
}
function toggle4(){
    const btn4 = document.querySelector('#mybtn4')    
    // Button1
    if (flag == 1){    
        btn4.textContent = 'X';
        document.querySelector('#mybtn4').disabled = true;
        flag = 0;
    }
    else {
        btn4.textContent = 'O'
        document.querySelector('#mybtn4').disabled = true;
        flag = 1;
    }
}
function toggle5(){
    const btn5 = document.querySelector('#mybtn5')    
    // Button1
    if (flag == 1){    
        btn5.textContent = 'X';
        document.querySelector('#mybtn5').disabled = true;
        flag = 0;
    }
    else {
        btn5.textContent = 'O'
        document.querySelector('#mybtn5').disabled = true;
        flag = 1;
    }
}
function toggle6(){
    const btn6 = document.querySelector('#mybtn6')    
    // Button6
    if (flag == 1){    
        btn6.textContent = 'X';
        document.querySelector('#mybtn6').disabled = true;
        flag = 0;
    }
    else {
        btn6.textContent = 'O'
        document.querySelector('#mybtn6').disabled = true;
        flag = 1;
    }
}
function toggle7(){
    const btn7 = document.querySelector('#mybtn7')    
    // Button7
    if (flag == 1){    
        btn7.textContent = 'X';
        document.querySelector('#mybtn7').disabled = true;
        flag = 0;
    }
    else {
        btn7.textContent = 'O'
        document.querySelector('#mybtn7').disabled = true;
        flag = 1;
    }
}
function toggle8(){
    const btn8 = document.querySelector('#mybtn8')    
    // Button8
    if (flag == 1){    
        btn8.textContent = 'X';
        document.querySelector('#mybtn8').disabled = true;
        flag = 0;
    }
    else {
        btn8.textContent = 'O'
        document.querySelector('#mybtn8').disabled = true;
        flag = 1;
    }
}
function toggle9(){
    const btn9 = document.querySelector('#mybtn9')    
    // Button9
    if (flag == 1){    
        btn9.textContent = 'X';
        document.querySelector('#mybtn9').disabled = true;
        flag = 0;
    }
    else {
        btn9.textContent = 'O'
        document.querySelector('#mybtn9').disabled = true;
        flag = 1;
    }
}

function reset(){
    location.reload(); 
    document.querySelector('#mybtn1').innerHTML = "";
    document.querySelector('#mybtn2').innerHTML = "";
    document.querySelector('#mybtn3').innerHTML = "";
    document.querySelector('#mybtn4').innerHTML = "";
    document.querySelector('#mybtn5').innerHTML = "";
    document.querySelector('#mybtn6').innerHTML = "";
    document.querySelector('#mybtn7').innerHTML = "";
    document.querySelector('#mybtn8').innerHTML = "";
    document.querySelector('#mybtn9').innerHTML = "";
    document.querySelector('#myLabel').innerText = 'Game Status';

}


