function compute()
{
    p = document.getElementById("principal").value;
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert('Enter a positive number')
    }

    //When Compute Interest is clicked, set its inner html property to the below text
    document.getElementById("result").innerHTML = interest;
    "If you deposit " + principal + "at an interest rate of " + rate + "You will receive an amount of " + amount + "in the year" + year;

}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval;
}
