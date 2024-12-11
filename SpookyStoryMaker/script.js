//console log just to test that your JS is linked properly
console.log("Js link successful!");

//create a variable for the number of buildings in the city and start it at zero
var buildings = 0;


function createStory() {
  console.log("Story Created!");
  //going to grab user entry and store it in variables in JavaScript
  //document.getElementById grabs HTML ids
  //JavaScript is insanely case sensitive
  var title = document.getElementById("title").value;
  var name = document.getElementById("name").value;
  var insect = document.getElementById("insect").value;
  var gadget = document.getElementById("gadget").value;
  var age = document.getElementById("age").value;
  var duration = document.getElementById("duration").value;
  var place = document.getElementById("where").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;
  
  //push out back to HTML with .innerHTML

  document.getElementById("head").innerHTML="<br>"+title;
  document.getElementById("story").style.visibility = "visible";

  document.getElementById("story").innerHTML ="<br>"+"It was too late when he realized there is no coming back."+
  +name+" stood still in front of the mirror, staring at his bruises, trying to remember all those broken pieces of last nights memories."+
  "There is water running out of the clogged bathroom sink, a "+insect+" lands on his shoulder and the room stings. He feels no pain."+
  "He feels nothing. "+name+" has already lost it, the very last teardrop. His eyes are dry. His arms are trembling. His breath so silent."+
  "The static noise from the "+gadget+" engulfs the silence in the motel room. He looks up to the face he had come to hate the most. "
  +name+"’s fist came shattering into the mirror. Just as his knuckles touch the glass, the radio goes off."+
  "“ The "+age+"-year-old boy who went missing "+duration+" ago has been reported dead.  Officials found "+name+"’s body in the woods by the "
  +place+". Shockingly, the officials found a strange unidentified mark on the back of his "+body+", with glyphs that have not been able to be decrypted yet.”"+
  "Just as the reporter ends, "+name+" snaps back to his senses. His arm falls to his side. He slowly turns around and struggles to inspect the back of his "
  +body+" through the reflection. Just as he turned his "+body+" towards the foggy mirror, the light goes out. The darkness envelops him. His senses gave up on him. "+
  "The "+gadget+" static has faded away. Crickets and mosquitoes take over the concert. Suddenly, the pieces of his memory that he lost, crawls back into his head. "+
  "He starts to remember. "+name+" runs back into his room. He swiftly grabs the zippo on the "+table+" and tries to light it, but the flint has worn down. "+
  "However, with his starving struggle to find out the truth, "+name+" finally gets it to fire up. His arm swings to the hanging calendar on the back of the door. "+
  "As his fingers run though the crossed off dates, his pupils expand, pulling in all the darkness in the room. He looks at the date, it has been "+duration+" since yesterday. "
  +name+" takes two steps back, all these questions unanswered in his brain and all this pain unbearable in his heart. "+name+" screams aloud, as loud as he can. "+
  "Nothing can be heard as "+name+" has lost his ability to speak. He tries relentlessly, not a single note escapes his parched throat."+
  "His lifeless eyes start to collapse, his weary legs start to shudder, his pale fingers curling, as all the lost memory fragments rush into his stunned mind,"
  +name+"’s unconscious body drops down. <br> Thud. <br><br><i>Author: "+author+"</i>";
}


    
