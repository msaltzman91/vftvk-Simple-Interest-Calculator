function compute(){
    //This Variable References the Principal Value
    var principal = document.getElementById("principal").value;
    //This Variable References the Interest Rate Slider
    var rate = document.getElementById("rate").value;
    //This Variable References the No. of Years Dropbox
    var years = document.getElementById("years").value;
    //This Variable Calculates the interest
    var interest = principal * years * rate / 100;
    //This Variable Displays the Current Year
    var year = new Date().getFullYear()+parseInt(years);
    //This Variable References the Result
    var result = document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"   
    return result
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    return rateval
}
function checkdata(){
    var principal = document.getElementById("principal").value;
    //Check if Amount field is Zero or a Negative Number
    if(isNan(principal.value)){
    alert("Please enter a Positive Number");
    principal.focus();
    return false
    }
}       
