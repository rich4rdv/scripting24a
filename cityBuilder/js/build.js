//console log just to test that your JS is linked properly
console.log("Js link successful!");

//create a variable for the number of buildings in the city and start it at zero
var buildings = 0;

//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads

//Functions -- 
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
    //-- Print a message to teh console
    //--Add one to the variable that is tracking the number of buildings
    //---Print a message with the number of buildings
    //---Place an image graphic into the other div

    function one(){
        console.log("1");
        buildings=buildings+1;
        document.getElementById('bmsg').innerHTML = "You have now "+buildings+" buildings in your city!";
        var one = document.createElement("img");
        one.src = "images/BuildingBlock1.png";  
        document.getElementById('cityGraphic').appendChild(one)
        
    }

    function two(){
        console.log("2");
        buildings=buildings+1;
        document.getElementById('bmsg').innerHTML = "You have now "+buildings+" buildings in your city!";
        var two = document.createElement("img");
        two.src = "images/BuildingBlock2.png";  
        document.getElementById('cityGraphic').appendChild(two)
        
    }
    function three(){
        console.log("3");
        buildings=buildings+1;
        document.getElementById('bmsg').innerHTML = "You have now "+buildings+" buildings in your city!";
        var three = document.createElement("img");
        three.src = "images/BuildingBlock3.png";  
        document.getElementById('cityGraphic').appendChild(three)
    }
    function four(){
        console.log("4");
        buildings=buildings+1;
        document.getElementById('bmsg').innerHTML = "You have now "+buildings+" buildings in your city!";
        var four = document.createElement("img");
        four.src = "images/BuildingBlock4.png";  
        document.getElementById('cityGraphic').appendChild(four)
    }

    function clr(){
        console.log("0");
        buildings=0;

        document.getElementById('bmsg').innerHTML = "You have now "+buildings+" buildings in your city!";
        document.getElementById('cityGraphic').replaceChildren();
    }
    

//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building


//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building

