var input1value=document.querySelector("#currencyfirst_input");
var input2value=document.querySelector("#currencysecond_input");
var dropdown1value=document.querySelector("#currencydropDown1");
var dropdown2value=document.querySelector("#currencydropDown2");
var active;
input1value.addEventListener("input",function(){
    active=true;
    convert();
})
input2value.addEventListener("input",function(){
    active=false;
    convert();
})
dropdown1value.addEventListener("input",convert);
dropdown2value.addEventListener("input",convert);

function convert() {
    switch (dropdown1value.value) {
        case "us_dollar":
            switch (dropdown2value.value) {
                case "us_dollar":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;
                    break;
                case "euro":
                    if(active)input2value.value=input1value.value*0.8398;
                    else input1value.value=input2value.value/0.8398;
                    break;
                case "inr_rupees":
                    if(active)input2value.value=input1value.value*73.77;
                    else input1value.value=input2value.value/73.77;
                    break;
            
                default:
                    break;
            }
            break;
        case "euro":
            switch (dropdown2value.value) {
                case "us_dollar":
                    if(active)input2value.value=input1value.value*1.1907;
                    else input1value.value=input2value.value/1.1907;
                    break;
                case "euro":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;
                    break;
                case "inr_rupees":
                    if(active)input2value.value=input1value.value*87.86;
                    else input1value.value=input2value.value/87.86;
                    break;
            
                default:
                    break;
            }
            break;
        case "inr_rupees":
            switch (dropdown2value.value) {
                case "us_dollar":
                    if(active)input2value.value=input1value.value*0.0136;
                    else input1value.value=input2value.value/0.0136;
                    break;
                case "euro":
                    if(active)input2value.value=input1value.value*0.0114;
                    else input1value.value=input2value.value/0.0114;
                    break;
                case "inr_rupees":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;
                    break;
            
                default:
                    break;
            }
            break;
    
        default:
            break;
    }
}