window.onload = load;
function load() {
    var i = 0;
        var q1a;
        document.querySelector(".q1a1").addEventListener("change", q1a1);
        function q1a1() {
            q1a = document.querySelector(".q1a1").value;  
        }
        document.querySelector(".q1a2").addEventListener("change", q1a2);
        function q1a2() {
            q1a = document.querySelector(".q1a2").value;  
        }
        document.querySelector(".q1a3").addEventListener("change", q1a3);
        function q1a3() {
            q1a = document.querySelector(".q1a3").value;  
        }
        document.querySelector(".q1a4").addEventListener("change", q1a4);
        function q1a4() {
            q1a = document.querySelector(".q1a4").value;  
        }
    function submitQ1() {
        if (q1a == "q1a1") {
            document.querySelector("#q1a1").style.backgroundColor = "red";
            document.querySelector("#q1a2").style.backgroundColor = "white";
            document.querySelector("#q1a3").style.backgroundColor = "white";
            document.querySelector("#q1a4").style.backgroundColor = "white";
        }  else if (q1a == "q1a2") {
            document.querySelector("#q1a1").style.backgroundColor = "white";
            document.querySelector("#q1a2").style.backgroundColor = "red";
            document.querySelector("#q1a3").style.backgroundColor = "white";
            document.querySelector("#q1a4").style.backgroundColor = "white";
        } else if (q1a == "q1a3") {
            document.querySelector("#q1a1").style.backgroundColor = "white";
            document.querySelector("#q1a2").style.backgroundColor = "white";
            document.querySelector("#q1a3").style.backgroundColor = "red";
            document.querySelector("#q1a4").style.backgroundColor = "white";
        } else if (q1a == "q1a4") {
            document.querySelector("#q1a1").style.backgroundColor = "white";
            document.querySelector("#q1a2").style.backgroundColor = "white";
            document.querySelector("#q1a3").style.backgroundColor = "white";
            document.querySelector("#q1a4").style.backgroundColor = "green";
            i++;
        }
    }
    var q2a;
    document.querySelector(".q2a1").addEventListener("change", q2a1);
    function q2a1() {
        q2a = document.querySelector(".q2a1").value; 
    }
    document.querySelector(".q2a2").addEventListener("change", q2a2);
    function q2a2() {
        q2a = document.querySelector(".q2a2").value;
    }
    document.querySelector(".q2a3").addEventListener("change", q2a3);
    function q2a3() {
        q2a = document.querySelector(".q2a3").value; 
    }   
function submitQ2() {
    if (q2a == "q2a1") {
        document.querySelector("#q2a1").style.backgroundColor = "red";
        document.querySelector("#q2a2").style.backgroundColor = "white";
        document.querySelector("#q2a3").style.backgroundColor = "white";
    }  else if (q2a == "q2a2") {
        document.querySelector("#q2a1").style.backgroundColor = "white";
        document.querySelector("#q2a2").style.backgroundColor = "red";
        document.querySelector("#q2a3").style.backgroundColor = "white";
    } else if (q2a == "q2a3") {
        document.querySelector("#q2a1").style.backgroundColor = "white";
        document.querySelector("#q2a2").style.backgroundColor = "white";
        document.querySelector("#q2a3").style.backgroundColor = "green";
        i++;
    }
}
    var q3a;
    document.querySelector(".q3a1").addEventListener("change", q3a1);
    function q3a1() {
        q3a = document.querySelector(".q3a1").value; 
    }
    document.querySelector(".q3a2").addEventListener("change", q3a2);
    function q3a2() {
        q3a = document.querySelector(".q3a2").value;
    }
    document.querySelector(".q3a3").addEventListener("change", q3a3);
    function q3a3() {
        q3a = document.querySelector(".q3a3").value; 
    }   
function submitQ3() {
    if (q3a == "q3a1") {
        document.querySelector("#q3a1").style.backgroundColor = "red";
        document.querySelector("#q3a2").style.backgroundColor = "white";
        document.querySelector("#q3a3").style.backgroundColor = "white";
    }  else if (q3a == "q3a2") {
        document.querySelector("#q3a1").style.backgroundColor = "white";
        document.querySelector("#q3a2").style.backgroundColor = "red";
        document.querySelector("#q3a3").style.backgroundColor = "white";
    } else if (q3a == "q3a3") {
        document.querySelector("#q3a1").style.backgroundColor = "white";
        document.querySelector("#q3a2").style.backgroundColor = "white";
        document.querySelector("#q3a3").style.backgroundColor = "green";
        i++;
    }
}
//q4
var q4a;
document.querySelector(".q4a1").addEventListener("change", q4a1);
function q4a1() {
    q4a = document.querySelector(".q4a1").value;  
}
document.querySelector(".q4a2").addEventListener("change", q4a2);
function q4a2() {
    q4a = document.querySelector(".q4a2").value;  
}
document.querySelector(".q4a3").addEventListener("change", q4a3);
function q4a3() {
    q4a = document.querySelector(".q4a3").value;  
}
document.querySelector(".q4a4").addEventListener("change", q4a4);
function q4a4() {
    q4a = document.querySelector(".q4a4").value;  
}
function submitQ4() {
if (q4a == "q4a1") {
    document.querySelector("#q4a1").style.backgroundColor = "green";
    document.querySelector("#q4a2").style.backgroundColor = "white";
    document.querySelector("#q4a3").style.backgroundColor = "white";
    document.querySelector("#q4a4").style.backgroundColor = "white";
    i++;
}  else if (q4a == "q4a2") {
    document.querySelector("#q4a1").style.backgroundColor = "white";
    document.querySelector("#q4a2").style.backgroundColor = "red";
    document.querySelector("#q4a3").style.backgroundColor = "white";
    document.querySelector("#q4a4").style.backgroundColor = "white";
} else if (q4a == "q4a3") {
    document.querySelector("#q4a1").style.backgroundColor = "white";
    document.querySelector("#q4a2").style.backgroundColor = "white";
    document.querySelector("#q4a3").style.backgroundColor = "red";
    document.querySelector("#q4a4").style.backgroundColor = "white";
} else if (q4a == "q4a4") {
    document.querySelector("#q4a1").style.backgroundColor = "white";
    document.querySelector("#q4a2").style.backgroundColor = "white";
    document.querySelector("#q4a3").style.backgroundColor = "white";
    document.querySelector("#q4a4").style.backgroundColor = "red";
}
}
//q5
var q5a;
document.querySelector(".q5a1").addEventListener("change", q5a1);
function q5a1() {
    q5a = document.querySelector(".q5a1").value;  
}
document.querySelector(".q5a2").addEventListener("change", q5a2);
function q5a2() {
    q5a = document.querySelector(".q5a2").value;  
}
document.querySelector(".q5a3").addEventListener("change", q5a3);
function q5a3() {
    q5a = document.querySelector(".q5a3").value;  
}
document.querySelector(".q5a4").addEventListener("change", q5a4);
function q5a4() {
    q5a = document.querySelector(".q5a4").value;  
}
function submitQ5() {
if (q5a == "q5a1") {
    document.querySelector("#q5a1").style.backgroundColor = "red";
    document.querySelector("#q5a2").style.backgroundColor = "white";
    document.querySelector("#q5a3").style.backgroundColor = "white";
    document.querySelector("#q5a4").style.backgroundColor = "white";
}  else if (q5a == "q5a2") {
    document.querySelector("#q5a1").style.backgroundColor = "white";
    document.querySelector("#q5a2").style.backgroundColor = "red";
    document.querySelector("#q5a3").style.backgroundColor = "white";
    document.querySelector("#q5a4").style.backgroundColor = "white";
} else if (q5a == "q5a3") {
    document.querySelector("#q5a1").style.backgroundColor = "white";
    document.querySelector("#q5a2").style.backgroundColor = "white";
    document.querySelector("#q5a3").style.backgroundColor = "green";
    document.querySelector("#q5a4").style.backgroundColor = "white";
    i++;
} else if (q5a == "q5a4") {
    document.querySelector("#q5a1").style.backgroundColor = "white";
    document.querySelector("#q5a2").style.backgroundColor = "white";
    document.querySelector("#q5a3").style.backgroundColor = "white";
    document.querySelector("#q5a4").style.backgroundColor = "red";
}
}
    document.querySelector(".qs").addEventListener("click", submitQ1);
    document.querySelector(".qs").addEventListener("click", submitQ2);
    document.querySelector(".qs").addEventListener("click", submitQ3);
    document.querySelector(".qs").addEventListener("click", submitQ4);
    document.querySelector(".qs").addEventListener("click", submitQ5);
    document.querySelector(".qs").addEventListener("click", submitFinal);
    function submitFinal() {
        var result = (i / 5) * 100;
        document.querySelector("#result").innerHTML = "Your Score Is " + result + "%";
        console.log(i);  
    }
    






}