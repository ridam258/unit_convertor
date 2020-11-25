var weightinput1value=document.querySelector("#weightfirst_input");
var weightinput2value=document.querySelector("#weightsecond_input");
var weightdropdown1value=document.querySelector("#weightdropDown1");
var weightdropdown2value=document.querySelector("#weightdropDown2");
var weightactive;
weightinput1value.addEventListener("input",function(){
    weightactive=true;
    weightconvert();
})
weightinput2value.addEventListener("input",function(){
    weightactive=false;
    weightconvert();
})
weightdropdown1value.addEventListener("input",weightconvert);
weightdropdown2value.addEventListener("input",weightconvert);

function weightconvert(){
    switch (weightdropdown1value.value) {
        case "gram":
            switch (weightdropdown2value.value) {
                case "gram":
                    if(weightactive)weightinput2value.value=weightinput1value.value;
                    else weightinput1value.value=weightinput2value.value;
                    break;
                case "kilogram":
                    if(weightactive)weightinput2value.value=weightinput1value.value/1000;
                    else weightinput1value.value=weightinput2value.value*1000;
                    break;
                case "tonne":
                    if(weightactive)weightinput2value.value=weightinput1value.value/1000000;
                    else weightinput1value.value=weightinput2value.value*1000000;
                    break;
                case "miligram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*1000;
                    else weightinput1value.value=weightinput2value.value/1000;
                    break;
                case "quintal":
                    if(weightactive)weightinput2value.value=weightinput1value.value/100000;
                    else weightinput1value.value=weightinput2value.value*100000;
                    break;
                case "pound":
                    if(weightactive)weightinput2value.value=weightinput1value.value*0.00220462262;
                    else weightinput1value.value=weightinput2value.value/0.00220462262;
                    break;
                    
                default:
                    break;
            }
            break;
        case "kilogram":
            switch (weightdropdown2value.value) {
                case "gram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*1000;
                    else weightinput1value=weightinput2value/1000;
                    break;
                case "kilogram":
                    if(weightactive)weightinput2value.value=weightinput1value.value;
                    else weightinput1value.value=weightinput2value.value;
                    break;
                case "tonne":
                    if(weightactive)weightinput2value.value=weightinput1value.value/1000;
                    else weightinput1value.value=weightinput2value.value*1000;break;
                case "miligram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*1000000;
                    else weightinput1value.value=weightinput2value.value/1000000;break;
                case "quintal":
                    if(weightactive)weightinput2value.value=weightinput1value.value/100;
                    else weightinput1value.value=weightinput2value.value*100;break;
                case "pound":
                    if(weightactive)weightinput2value.value=weightinput1value.value*2.20462262;
                    else weightinput1value.value=weightinput2value.value/2.20462262;break;
                    
                default:
                    break;
            }
            break;
        case "tonne":
            switch (weightdropdown2value.value) {
                case "gram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*1000000;
                    else weightinput1value.value=weightinput2value.value/1000000;
                    break;
                case "kilogram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*100;
                    else weightinput1value.value=weightinput2value.value/100;break;
                case "tonne":
                    if(weightactive)weightinput2value.value=weightinput1value.value;
                    else weightinput1value.value=weightinput2value.value;break;
                case "miligram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*1000000000;
                    else weightinput1value.value=weightinput2value.value/1000000000;break;
                case "quintal":
                    if(weightactive)weightinput2value.value=weightinput1value.value*10;
                    else weightinput1value.value=weightinput2value.value/10;break;
                case "pound":
                    if(weightactive)weightinput2value.value=weightinput1value.value*2204.62262;
                    else weightinput1value.value=weightinput2value.value/2204.62262;break;
                    
                default:
                    break;
            }
            break;
        case "miligram":
            switch (weightdropdown2value.value) {
                case "gram":
                    if(weightactive)weightinput2value.value=weightinput1value.value/1000;
                    else weightinput1value.value=weightinput2value.value*1000;
                    break;
                case "kilogram":
                    if(weightactive)weightinput2value.value=weightinput1value.value/1000000;
                    else weightinput1value.value=weightinput2value.value*1000000;break;
                case "tonne":
                    if(weightactive)weightinput2value.value=weightinput1value.value/1000000000;
                    else weightinput1value.value=weightinput2value.value*1000000000;break;
                case "miligram":
                    if(weightactive)weightinput2value.value=weightinput1value.value;
                    else weightinput1value.value=weightinput2value.value;break;
                case "quintal":
                    if(weightactive)weightinput2value.value=weightinput1value.value/100000000;
                    else weightinput1value.value=weightinput2value.value*100000000;break;
                case "pound":
                    if(weightactive)weightnput2value.value=weightinput1value.value*0.00000220462262;
                    else weightinput1value.value=weightinput2value.value/2.20462262;break;
                    
                default:
                    break;
            }
            break;
        case "quintal":
            switch (weightdropdown2value.value) {
                case "gram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*100000;
                    else weightinput1value.value=weightinput2value.value/100000;
                    break;
                case "kilogram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*100;
                    else weightinput1value.value=weightinput2value.value/100;break;
                case "tonne":
                    if(weightactive)weightinput2value.value=weightinput1value.value/10;
                    else weightinput1value.value=weightinput2value.value*10;break;
                case "miligram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*100000000;
                    else weightnput1value.value=weightinput2value.value/100000000;break;
                case "quintal":
                    if(weightactive)weightinput2value.value=weightinput1value.value;
                    else weightinput1value.value=weightinput2value.value;break;
                case "pound":
                    if(weightactive)weightinput2value.value=weightinput1value.value*220.462262;
                    else weightinput1value.value=weightinput2value.value/220.462262;break;
                    
                default:
                    break;
            }
            break;
        case "pound":
            switch (weightdropdown2value.value) {
                case "gram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*453.59237;
                    else weightinput1value.value=weightinput2value.value/453.59237;
                    break;
                case "kilogram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*0.45359237;
                    else weightinput1value.value=weightinput2value.value/0.45359237;break;
                case "tonne":
                    if(weightactive)weightinput2value.value=weightinput1value.value*0.00045359237;
                    else weightinput1value.value=weightinput2value.value/0.00045359237;break;
                case "miligram":
                    if(weightactive)weightinput2value.value=weightinput1value.value*453592.37;
                    else weightinput1value.value=weightinput2value.value/453592.37;break;
                case "quintal":
                    if(weightactive)weightinput2value.value=weightinput1value.value*0.0045359237;
                    else weightinput1value.value=weightinput2value.value/0.0045359237;break;
                case "pound":
                    if(weightactive)weightinput2value.value=weightinput1value.value;
                    else weightinput1value.value=weightinput2value.value;
                    
                default:
                    break;
            }
        
        default:
            break;
    }

}
