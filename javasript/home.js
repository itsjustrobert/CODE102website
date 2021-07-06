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
function picasso(){
    var pablo = prompt("On a scale 1 to 10: How much do YOU like Picasso?");
    for(let i = 0; i < pablo; i++) {
      document.write('<img src="https://static.simpsonswiki.com/images/thumb/a/a3/Pablo_Picasso.png/250px-Pablo_Picasso.png" alt="picture of picasso"/>');
      //images not working for some odd reason for some odd reason
      console.log(i); 
    } 
}

askQuestion();
picasso();




