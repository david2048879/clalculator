function gethistory(){
   return document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
   return document.getElementById("output-value").innerText;
}
function printoutput(num){
    if(num==""){
    document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = num;
    }
}
function getFormattedNumber(num){
    var n = new number(num);
    var value= n.toLocalestring("en");
    return value;
}
var operator = document.getElementsByClassName("operator");
for(var i =0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id =="clear"){
            printhistory("");
            printoutput("");
        }
            else if(this.id=="backspace"){
                var output=getoutput().toString();
                if(output){
                    output=output.substr(0,output.length-1);
                    printoutput(output);
                }
                            }
                            else{
                                var output=getoutput();
                                var history=gethistory();
                               if(output!=""){
                                    output=output;
                                    history=history + output;
                                    if(this.id=="="){
                                        var result = eval(history);
                                       printoutput(result);
                                       printhistory(""); 
                                    }
                                    else{
                                        history=history + this.id;
                                        printhistory(history);
                                        printoutput("")
                                    }
                                }
                            }
    });
}
var number = document.getElementsByClassName("number");
for(var i =0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        var output=getoutput();
        if(output !==NaN){
            output=output + this.id
            printoutput(output);
        }
    });
}