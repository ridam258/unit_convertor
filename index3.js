var currencyinput1value=document.querySelector("#currencyfirst_input");
var currencyinput2value=document.querySelector("#currencysecond_input");
var currencydropdown1value=document.querySelector("#currencydropDown1");
var currencydropdown2value=document.querySelector("#currencydropDown2");
var currencyactive;
currencyinput1value.addEventListener("input",function(){
currencyactive=true;
    convert();
})
currencyinput2value.addEventListener("input",function(){
    currencyactive=false;
    convert();
})
currencydropdown1value.addEventListener("input",convert);
currencydropdown2value.addEventListener("input",convert);

function convert() {
    switch (currencydropdown1value.value) {
        case "us_dollar":
            switch (currencydropdown2value.value) {
                case "us_dollar":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value;
                    else currencyinput1value.value=currencyinput2value.value;
                    break;
                case "euro":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value*0.8398;
                    else currencyinput1value.value=currencyinput2value.value/0.8398;
                    break;
                case "inr_rupees":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value*73.77;
                    else currencyinput1value.value=currencyinput2value.value/73.77;
                    break;
            
                default:
                    break;
            }
            break;
        case "euro":
            switch (currencydropdown2value.value) {
                case "us_dollar":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value*1.1907;
                    else currencyinput1value.value=currencyinput2value.value/1.1907;
                    break;
                case "euro":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value;
                    else currencyinput1value.value=currencyinput2value.value;
                    break;
                case "inr_rupees":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value*87.86;
                    else currencyinput1value.value=currencyinput2value.value/87.86;
                    break;
            
                default:
                    break;
            }
            break;
        case "inr_rupees":
            switch (currencydropdown2value.value) {
                case "us_dollar":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value*0.0136;
                    else currencyinput1value.value=currencyinput2value.value/0.0136;
                    break;
                case "euro":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value*0.0114;
                    else currencyinput1value.value=currencyinput2value.value/0.0114;
                    break;
                case "inr_rupees":
                    if(currencyactive)currencyinput2value.value=currencyinput1value.value;
                    else currencyinput1value.value=currencyinput2value.value;
                    break;
            
                default:
                    break;
            }
            break;
    
        default:
            break;
    }
}