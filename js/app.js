
var userage = 18;
let subscribed= true;

//CHANGE VALUES OF userage VARIABLE TO 18, ANY NUMBER <18, OR ANY NUMBER > 18 TO SEE THE RESULTS IN CONSOLE 

if((userage <18) && (subscribed != true) ){
        console.log ("user under 18 and not subscribed");
    }  
   else if((userage>=18) && (subscribed != true)){
    console.log ("user is 18 or above and  not subscribed");
   } 
   else if (userage<18 && (subscribed == true)){
    console.log ("user is under 18 and subscribed");

   }
   else if ((userage>=18) && (subscribed == true)) {
    console.log ("user is 18 or above and subscribed");
   } 
    else
    {
        console.log("you are in an Error Mode! ");
    }
