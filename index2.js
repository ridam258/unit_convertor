var input1value=document.querySelector("#weightfirst_input");
var input2value=document.querySelector("#weightsecond_input");
var dropdown1value=document.querySelector("#weightdropDown1");
var dropdown2value=document.querySelector("#weightdropDown2");
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

function convert(){
    switch (dropdown1value.value) {
        case "gram":
            switch (dropdown2value.value) {
                case "gram":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;
                    break;
                case "kilogram":
                    if(active)input2value.value=input1value.value/1000;
                    else input1value.value=input2value.value*1000;
                    break;
                case "tonne":
                    if(active)input2value.value=input1value.value/1000000;
                    else input1value.value=input2value.value*1000000;
                    break;
                case "miligram":
                    if(active)input2value.value=input1value.value*1000;
                    else input1value.value=input2value.value/1000;
                    break;
                case "quintal":
                    if(active)input2value.value=input1value.value/100000;
                    else input1value.value=input2value.value*100000;
                    break;
                case "pound":
                    if(active)input2value.value=input1value.value*0.00220462262;
                    else input1value.value=input2value.value/0.00220462262;
                    break;
                    
                default:
                    break;
            }
            break;
        case "kilogram":
            switch (dropdown2value.value) {
                case "gram":
                    if(active)input2value.value=input1value.value*1000;
                    else input1value=input2value/1000;
                    break;
                case "kilogram":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;
                    break;
                case "tonne":
                    if(active)input2value.value=input1value.value/1000;
                    else input1value.value=input2value.value*1000;break;
                case "miligram":
                    if(active)input2value.value=input1value.value*1000000;
                    else input1value.value=input2value.value/1000000;break;
                case "quintal":
                    if(active)input2value.value=input1value.value/100;
                    else input1value.value=input2value.value*100;break;
                case "pound":
                    if(active)input2value.value=input1value.value*2.20462262;
                    else input1value.value=input2value.value/2.20462262;break;
                    
                default:
                    break;
            }
            break;
        case "tonne":
            switch (dropdown2value.value) {
                case "gram":
                    if(active)input2value.value=input1value.value*1000000;
                    else input1value.value=input2value.value/1000000;
                    break;
                case "kilogram":
                    if(active)input2value.value=input1value.value*100;
                    else input1value.value=input2value.value/100;break;
                case "tonne":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;break;
                case "miligram":
                    if(active)input2value.value=input1value.value*1000000000;
                    else input1value.value=input2value.value/1000000000;break;
                case "quintal":
                    if(active)input2value.value=input1value.value*10;
                    else input1value.value=input2value.value/10;break;
                case "pound":
                    if(active)input2value.value=input1value.value*2204.62262;
                    else input1value.value=input2value.value/2204.62262;break;
                    
                default:
                    break;
            }
            break;
        case "miligram":
            switch (dropdown2value.value) {
                case "gram":
                    if(active)input2value.value=input1value.value/1000;
                    else input1value.value=input2value.value*1000;
                    break;
                case "kilogram":
                    if(active)input2value.value=input1value.value/1000000;
                    else input1value.value=input2value.value*1000000;break;
                case "tonne":
                    if(active)input2value.value=input1value.value/1000000000;
                    else input1value.value=input2value.value*1000000000;break;
                case "miligram":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;break;
                case "quintal":
                    if(active)input2value.value=input1value.value/100000000;
                    else input1value.value=input2value.value*100000000;break;
                case "pound":
                    if(active)input2value.value=input1value.value*0.00000220462262;
                    else input1value.value=input2value.value/2.20462262;break;
                    
                default:
                    break;
            }
            break;
        case "quintal":
            switch (dropdown2value.value) {
                case "gram":
                    if(active)input2value.value=input1value.value*100000;
                    else input1value.value=input2value.value/100000;
                    break;
                case "kilogram":
                    if(active)input2value.value=input1value.value*100;
                    else input1value.value=input2value.value/100;break;
                case "tonne":
                    if(active)input2value.value=input1value.value/10;
                    else input1value.value=input2value.value*10;break;
                case "miligram":
                    if(active)input2value.value=input1value.value*100000000;
                    else input1value.value=input2value.value/100000000;break;
                case "quintal":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;break;
                case "pound":
                    if(active)input2value.value=input1value.value*220.462262;
                    else input1value.value=input2value.value/220.462262;break;
                    
                default:
                    break;
            }
            break;
        case "pound":
            switch (dropdown2value.value) {
                case "gram":
                    if(active)input2value.value=input1value.value*453.59237;
                    else input1value.value=input2value.value/453.59237;
                    break;
                case "kilogram":
                    if(active)input2value.value=input1value.value*0.45359237;
                    else input1value.value=input2value.value/0.45359237;break;
                case "tonne":
                    if(active)input2value.value=input1value.value*0.00045359237;
                    else input1value.value=input2value.value/0.00045359237;break;
                case "miligram":
                    if(active)input2value.value=input1value.value*453592.37;
                    else input1value.value=input2value.value/453592.37;break;
                case "quintal":
                    if(active)input2value.value=input1value.value*0.0045359237;
                    else input1value.value=input2value.value/0.0045359237;break;
                case "pound":
                    if(active)input2value.value=input1value.value;
                    else input1value.value=input2value.value;
                    
                default:
                    break;
            }
        
        default:
            break;
    }

}
