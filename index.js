var drpdwn1value=document.querySelector("#dropDown1");
var drpdwn2value=document.querySelector("#dropDown2");
var lengthinput1value=document.querySelector("#first_input");
var lengthinput2value=document.querySelector("#second_input");
var frstActive=true;

lengthinput1value.addEventListener("input",function(){
    frstActive=true;
    convert1();
});
lengthinput2value.addEventListener("input",function(){
    frstActive=false;
    convert1();
});
drpdwn1value.addEventListener("input", function() {
    convert1();
});
drpdwn2value.addEventListener("input", function(){
    convert1(); 
});


function convert1(){


    
        switch(drpdwn1value.value){
            case "metre":
    
            switch(drpdwn2value.value){
                
                case "metre":
                    if(frstActive)lengthinput2value.value=lengthinput1value.value;
                    else lengthinput1value.value=currencyinput2value.value;

                    break;
                case "centimetre":
                    if(frstActive)lengthinput2value.value=lengthinput1value.value*100;
                    else lengthinput1value.value=lengthinput2value.value/100;
                    break;
                case "kilometre":
                    if(frstActive)lengthinput2value.value=lengthinput1value.value/1000;
                    else lengthinput1value.value=lengthinput2value.value*1000;
                    break;
                case "decimetre":
                    if(frstActive)lengthinput2value.value=lengthinput1value.value*10;
                    else lengthinput1value.value=lengthinput2value.value/10;
                    break;
                case "milimetre":
                    if(frstActive)lengthinput2value.value=lengthinput1value.value*1000;
                    else lengthinput1value.value=lengthinput2value.value/1000;
                    break;
                case "micrometre":
                    if(frstActive)lengthinput2value.value=lengthinput1value.value*1000000;
                    else lengthinput1value.value=lengthinput2value.value/1000000;
                    break;
                case "nanometre":
                    if(frstActive)lengthinput2value.value=lengthinput1value.value*1000000000;
                    else lengthinput1value.value=lengthinput2value.value/1000000000;
                    break;    
            }
            break;
    
            case "centimetre":
    
                switch(drpdwn2value.value){
                
                    case "metre":
                        if(frstActive)lengthinput2value.value=lengthinput1value.value/100;
                        else lengthinput1value.value=lengthinput2value.value*100;
                        break;
                    case "centimetre":
                        if(frstActive)lengthinput2value.value=lengthinput1value.value;
                        else lengthinput1value.value=lengthinput2value.value;
                        break;
                    case "kilometre":
                        if(frstActive)lengthinput2value.value=lengthinput1value.value/100000;
                        else lengthinput1value.value=lengthinput2value.value*100000;
                        break;
                    case "decimetre":
                        if(frstActive)lengthinput2value.value=lengthinput1value.value/10;
                        else lengthinput1value.value=lengthinput2value.value*10;
                        break;
                    case "milimetre":
                        if(frstActive)lengthinput2value.value=lengthinput1value.value*10;
                        else lengthinput1value.value=lengthinput2value.value/10;
                        break;
                    case "micrometre":
                        if(frstActive)lengthinput2value.value=lengthinput1value.value*10000;
                        else lengthinput1value.value=lengthinput2value.value/10000;
                        break;
                    case "nanometre":
                        if(frstActive)lengthinput2value.value=lengthinput1value.value*10000000;
                        else lengthinput1value.value=lengthinput2value.value/10000000;
                        break;    
                }
                break;
            
                case "kilometre":
    
                    switch(drpdwn2value.value){
                
                        case "metre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*1000;
                            else lengthinput1value.value=lengthinput2value.value/1000;
                            break;
                        case "centimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*100000;
                            else lengthinput1value.value=lengthinput2value.value/100000;
                            break;
                        case "kilometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value;
                            else lengthinput1value.value=lengthinput2value.value;
                            break;
                        case "decimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*10000;
                            else lengthinput1value.value=lengthinput2value.value/10000;
                            break;
                        case "milimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*1000000;
                            else lengthinput1value.value=lengthinput2value.value/1000000;
                            break;
                        case "micrometre":
                            if(frstActive)lengthinput2value.valulengthinput1value.value*1000000000;
                            else lengthinput1value.value=lengthinput2value.value/1000000000;
                            break;
                        case "nanometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*1000000000000;
                            else lengthinput1value.value=lengthinput2value.value/1000000000000;
                            break;    
                    }
                    break;
                
                case "decimetre":
    
                    switch(drpdwn2value.value){
                
                        case "metre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/10;
                            else lengthinput1value.value=lengthinput2value.value*10;
                            break;
                        case "centimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*10;
                            else lengthinput1value.value=lengthinput2value.value/10;
                            break;
                        case "kilometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/10000;
                            else lengthinput1value.value=lengthinput2value.value*10000;
                            break;
                        case "decimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value;
                            else lengthinput1value.value=lengthinput2value.value;
                            break;
                        case "milimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*100;
                            else lengthinput1value.value=lengthinput2value.value/100;
                            break;
                        case "micrometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*100000;
                            else lengthinput1value.value=lengthinput2value.value/100000;
                            break;
                        case "nanometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*100000000;
                            else lengthinput1value.value=lengthinput2value.value/100000000;
                            break;    
                    }
                    break;
    
                case "milimetre":
    
                    switch(drpdwn2value.value){
                
                        case "metre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000;
                            else currencyinput1value.value=currencyinput2value.value*1000;
                            break;
                        case "centimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/10;
                            else lengthinput1value.value=lengthinput2value.value*10;
                            break;
                        case "kilometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000000;
                            else lengthinput1value.value=lengthinput2value.value*1000000;
                            break;
                        case "decimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/100;
                            else lengthinput1value.value=lengthinput2value.value*100;
                            break;
                        case "milimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value;
                            else lengthinput1value.value=lengthinput2value.value;
                            break;
                        case "micrometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*1000;
                            else lengthinput1value.value=lengthinput2value.value/1000;
                            break;
                        case "nanometre":
                            
                        if(frstActive)lengthinput2value.value=lengthinput1value.value*1000000;
                            else lengthinput1value.value=lengthinput2value.value/1000000;
                            break;    
                    }
                    break;
                
                case "micrometre":
    
                    switch(drpdwn2value.value){
                
                        case "metre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000000;
                            else lengthinput1value.value=lengthinput2value.value*1000000;
                            break;
                        case "centimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/10000;
                            else lengthinput1value.value=lengthinput2value.value*10000;
                            break;
                        case "kilometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000000000;
                            else lengthinput1value.value=lengthinput2value.value*1000000000;
                            break;
                        case "decimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/100000;
                            else lengthinput1value.value=lengthinput2value.value*100000;
                            break;
                        case "milimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000;
                            else lengthinput1value.value=lengthinput2value.value*1000;
                            break;
                        case "micrometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value;
                            else lengthinput1value.value=lengthinput2value.value;
                            break;
                        case "nanometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value*1000;
                            else lengthinput1value.value=lengthinput2value.value/1000;
                            break;    
                    }
                    break;
                
                case "nanometre":
    
                    switch(drpdwn2value.value){
                
                        case "metre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000000000;
                            else lengthinput1value.value=lengthinput2value.value*1000000000;
                            break;
                        case "centimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/10000000;
                            else lengthinput1value.value=lengthinput2value.value*10000000;
                            break;
                        case "kilometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000000000000;
                            else lengthinput1value.value=lengthinput2value.value*1000000000000;
                            break;
                        case "decimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/100000000;
                            else lengthinput1value.value=lengthinput2value.value*100000000;
                            break;
                        case "milimetre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000000;
                            else lengthinput1value.value=lengthinput2value.value*1000000;
                            break;
                        case "micrometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value/1000;
                            else lengthinput1value.value=lengthinput2value.value*1000;
                            break;
                        case "nanometre":
                            if(frstActive)lengthinput2value.value=lengthinput1value.value;
                            else lengthinput1value.value=lengthinput2value.value;
                            break;    
                    }
                    break;

    

   

    }
}


    

