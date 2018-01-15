
/* part one */


 var num = "Enter a number";

var x = prompt(num); {
  var total = 0;
  
  for (i = 0; i <= x; i++) {
    total = total + i;
  }
}

alert(total)





/* part 3 */


/*   var x = '!';

var input = "Would you like to print your name?";

var output = prompt(input); 
{ if( output ==='yes'){ console.log('Hello my name is Adam');}
else{ console.log('would you like to print your name again?');};}  */










/*  part 4  */

 var text;
var time = prompt("What time of day is it?");
switch(time) {
    case "morning":
        text = "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
        break;
    case "noon":
        text = "Since it is noon, you should be eating lunch. We suggest a salad.";
        break;
    case "evening":
        text = "Since it is evening, you should be eating dinner. We suggest chicken and rice.";
        break;
    default:
        text = "morning, noon ,or evening?";
        break;
}   

alert(text) 
