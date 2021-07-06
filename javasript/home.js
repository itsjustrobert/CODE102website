function askQuestion(){
    var numberfound = false;
    while(numberfound ==false){
        var number = prompt("enter a number 1 -10");
        if(number == "7"){
            alert("That's Correct");
            numberfound = true;
        }
        else{
            alert("INCORRECT!");
        }
    
    }
}    

askQuestion();

