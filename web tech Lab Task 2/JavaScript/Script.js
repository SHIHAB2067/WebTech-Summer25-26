let count = 0;        
let lockTime = 0;     

function checkLogin() {

    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;
    let m = document.getElementById("msg");

    
    if (Date.now() < lockTime) {
        m.innerHTML = "Locked! Wait 5 minutes.";
        return false;
    }

    
    if (u == "" || p == "") {
        m.innerHTML = "Fill all fields!";
        return false;
    }

    
    if (u == "AIUB" && p == "$_student") {
        m.style.color = "green";
        m.innerHTML = "Successfully Logged In";
        count = 0;
        return false;
    }

    
    count++;

    if (count == 1) {
        m.innerHTML = "You have 3 attempts left.";
    }
    else if (count == 2) {
        m.innerHTML = "You have 2 attempts left.";
    }
    else if (count == 3) {
        m.innerHTML = "You have 1 attempt left. You are locked for 5 minutes.";
        lockTime = Date.now() + (5 * 60 * 1000); // 5 min lock
    }

    return false;
}