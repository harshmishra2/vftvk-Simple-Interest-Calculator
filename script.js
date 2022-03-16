function compute()
{
    // p = document.getElementById("principal").value;

//getting all values to get started with calculation using id tags of html elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;

//Creating interest text
 document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}

//function to update the rate value
function getSliderValue(){
    document.getElementById("ratespan").innerHTML = document.getElementById("rate").value;
}