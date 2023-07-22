var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    
    button.onclick = function(){
    
        if(content.className == "open"){
    
            content.className == "";
            button.innerHTML = "Show More";
        }
        else{
    
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    
    };

    var colourChanger = document.getElementById("colour-change");
    var colours = ["red","blue","green","yellow","pink"];
    var counter = 0;

    function changeColour(){
        
        if(counter <= colours.length){
            counter = 0;
        }

        colourChanger.style.background = colours[counter];
        counter++;

    };

    var myTimer = setInterval(changeColour, 3000);

    colourChanger.onclick = function(){

        clearInterval(myTimer);
        colourChanger.innerHTML = "Timer Stopped";

    };