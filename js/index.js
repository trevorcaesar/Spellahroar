// 1.) Words to learn how to read for the kid.
// TODO: Later pull from JSON file

let words = [
// TODO: Clean up to make sure all 114 items have their sylibles in place correctly.
  { word: "kitty", s1: "kit", s2: "ty"},
  { word: "cookie", s1: "cook", s2: "ie"},
  { word: "window", s1: "win", s2: "dow"},
  { word: "sunny", s1: "sun", s2: "ny"},
  { word: "zebra", s1: "zeb", s2: "ra"},
  { word: "monkey", s1: "mon", s2: "key"},
  { word: "garden", s1: "gar", s2: "den"},
  { word: "castle", s1: "cas", s2: "tle"},
  { word: "oven", s1: "ov", s2: "en"},
  { word: "rocket", s1: "roc", s2: "ket"},
  { word: "mommy", s1: "mom", s2: "my"},
  { word: "apple", s1: "app", s2: "le"},
  { word: "daddy", s1: "dad", s2: "dy"},
  { word: "circle", s1: "cir", s2: "cle"},
  { word: "turtle", s1: "tur", s2: "tle"},
  { word: "carrot", s1: "car", s2: "rot"},
  { word: "basket", s1: "bas", s2: "ket"},
  { word: "blindfold", s1: "blind", s2: "fold"},
  { word: "absent", s1: "ab", s2: "sent"},
  { word: "seven", s1: "sev", s2: "en"},
  { word: "sister", s1: "sis", s2: "ter"},
  { word: "woman", s1: "wo", s2: "man"},
  { word: "frozen", s1: "fro", s2: "zen"},
  { word: "pancake", s1: "pan", s2: "cake"},
  { word: "garbage", s1: "gar", s2: "bage"},
  { word: "teacher", s1: "tea", s2: "cher"},
  { word: "rabbit", s1: "rab", s2: "bit"},
  { word: "mother", s1: "moth", s2: "er"},
  { word: "paper", s1: "pa", s2: "per"},
  { word: "cartoon", s1: "car", s2: "toon"},
  { word: "candy", s1: "can", s2: "dy"},
  { word: "pencil", s1: "pen", s2: "cil"},
  { word: "donate", s1: "don", s2: "ate"},
  { word: "spider", s1: "spi", s2: "der"},
  { word: "boxer", s1: "box", s2: "er"},
  { word: "ketchup", s1: "ket", s2: "chup"},
  { word: "tiger", s1: "ti", s2: "ger"},
  { word: "doctor", s1: "doc", s2: "tor"},
  { word: "glasses", s1: "gl", s2: "asses"},
  { word: "necklace", s1: "nek", s2: "lace"},
  { word: "pocket", s1: "pock", s2: "et"},
  { word: "cowboy", s1: "cow", s2: "boy"},
  { word: "baseball", s1: "base", s2: "ball"},
  { word: "number", s1: "num", s2: "ber"},
  { word: "napkin", s1: "nap", s2: "kin"},
  { word: "zipper", s1: "zip", s2: "per"},
  { word: "winter", s1: "win", s2: "ter"},
  { word: "popcorn", s1: "pop", s2: "corn"},
  { word: "summer", s1: "sum", s2: "mer"},
  { word: "hallway", s1: "hall", s2: "way"},
  { word: "people", s1: "peo", s2: "ple"},
  { word: "jacket", s1: "ja", s2: "cket"},
  { word: "earring", s1: "ear", s2: "ring"},
  { word: "father", s1: "fat", s2: "her"},
  { word: "birthday", s1: "birth", s2: "day"},
  { word: "study", s1: "stu", s2: "dy"},
  { word: "purple", s1: "pur", s2: "ple"},
  { word: "honey", s1: "hon", s2: "ey"},
  { word: "student", s1: "stu", s2: "dent"},
  { word: "princess", s1: "prin", s2: "cess"},
  { word: "pumpkin", s1: "pump", s2: "kin"},
  { word: "science", s1: "sci", s2: "ence"},
  { word: "music", s1: "mus", s2: "ic"},
  { word: "teddy", s1: "ted", s2: "dy"},
  { word: "water", s1: "wa", s2: "ter"},
  { word: "ladder", s1: "lad", s2: "der"},
  { word: "toothbrush", s1: "tooth", s2: "brush"},
  { word: "tissue", s1: "tiss", s2: "ue"},
  { word: "table", s1: "ta", s2: "ble"},
  { word: "backpack", s1: "back", s2: "pack"},
  { word: "binder", s1: "bin", s2: "der"},
  { word: "coffee", s1: "coff", s2: "ee"},
  { word: "taco", s1: "ta", s2: "co"},
  { word: "hockey", s1: "hock", s2: "ey"},
  { word: "letter", s1: "let", s2: "ter"},
  { word: "towel", s1: "tow", s2: "el"},
  { word: "balloon", s1: "ba", s2: "lloon"},
  { word: "pizza", s1: "piz", s2: "za"},
  { word: "baby", s1: "ba", s2: "by"},
  { word: "snowflake", s1: "snow", s2: "flake"},
  { word: "firetruck", s1: "fire", s2: "truck"},
  { word: "bacon", s1: "ba", s2: "con"},
  { word: "bunny", s1: "bun", s2: "ny"},
  { word: "neighbor", s1: "neigh", s2: "bor"},
  { word: "sleeping", s1: "sleep", s2: "ing"},
  { word: "surprise", s1: "sur", s2: "prise"},
  { word: "sandwich", s1: "sand", s2: "wich"},
  { word: "farmer", s1: "far", s2: "mer"},
  { word: "Monday", s1: "Mon", s2: "day"},
  { word: "reading", s1: "read", s2: "ing"},
  { word: "forehead", s1: "fore", s2: "head"},
  { word: "weekend", s1: "week", s2: "end"},
  { word: "shampoo", s1: "sham", s2: "poo"},
  { word: "address", s1: "add", s2: "ress"},
  { word: "grandma", s1: "grand", s2: "ma"},
  { word: "thursday", s1: "thurs", s2: "day"},
  { word: "dinner", s1: "din", s2: "ner"},
  { word: "breakfast", s1: "break", s2: "fast"},
  { word: "pepper", s1: "pep", s2: "per"},
  { word: "closet", s1: "clo", s2: "set"},
  { word: "friday", s1: "fri", s2: "day"},
  { word: "finger", s1: "fin", s2: "ger"},
  { word: "tinfoil", s1: "tin", s2: "foil"},
  { word: "april", s1: "a", s2: "pril"},
  { word: "oval", s1: "ov", s2: "al"},
  { word: "cherry", s1: "ch", s2: "erry"},
  { word: "question", s1: "quest", s2: "ion"},
  { word: "bathroom", s1: "bath", s2: "room"},
  { word: "airplane", s1: "air", s2: "plane"},
  { word: "perfect", s1: "per", s2: "fect"},
  { word: "thousand", s1: "thous", s2: "and"},
  { word: "country", s1: "count", s2: "ry"},
  { word: "freedom", s1: "free", s2: "dom"},
  { word: "husband", s1: "hus", s2: "band"},
];

// TODO: Later expand into more objects where the s1 or s2 are all matching.
// This way we can load items in a series which will allow the boy to practice sounds of words together in groups
let words2 = [
  { word: "charge", s1: "ch", s2: "arge"},
  { word: "chart", s1: "ch", s2: "art"},
  { word: "chop", s1: "ch", s2: "op"},
  { word: "chew", s1: "ch", s2: "ew"},
  { word: "chip", s1: "ch", s2: "ip"},
  { word: "chew", s1: "ch", s2: "ew"},
];

let index = words.length; // Determine the length of words
let index2 = words2.length; // Determine the length of words2
let i = 1;

wizardScore = 0; // Set an initial score the user has.
document.getElementById("wizardScore").innerHTML = wizardScore;

const startConfetti = () => {
            setTimeout(function() {
                confetti.start()
            }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
        };

        //  Stop

        const stopConfetti = () => {
            setTimeout(function() {
                confetti.stop()
            }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
        };

function callConfetti() {
  if (wizardScore / 10 >= 10){
    startConfetti();
    stopConfetti();
  }
}

// 2.) Display an initial word.
// Example: ch - air

    document.getElementById("s1").innerHTML = words[0].s1 + "-";
    document.getElementById("s2").innerHTML = '&nbsp' + words[0].s2;


// 3.) On click of a button, display a new word with the same suffix
// Example: fl - air

document.getElementById("nextWord").addEventListener("click", newWord);


function newWord() {
  i++;

  if(i!=0){

  if(words[i] == undefined){
    console.log("No more words."); // TO DO: Do something after last word.
    i = 0; // For now, just display the first word again and start at the beginning of the loop.
  }

  document.getElementById("s1").innerHTML = words[i].s1 + "-";
  document.getElementById("s2").innerHTML = '&nbsp' + words[i].s2;

  document.getElementById("magicCheck").value = ""; //reset input for the magic Check
  document.getElementById("magicCheck").focus(); //keep the input active for typing the next word

  wizardScore++;
  document.getElementById("wizardScore").innerHTML = wizardScore;
  callConfetti();
  }
}


// 4.) On click of a button, display a new word that starts in CH
// Example: ch - art

// document.getElementById("nextPre").addEventListener("click", newPre);
//
// i = index2;
//
// function newPre() {
//
//   if(words2[i] == undefined){
//     console.log("No more words."); // TO DO: Do something after last word.
//     i = 0; // For now, just display the first word again and start at the beginning of the loop.
//   }
//
//   document.getElementById("s1").innerHTML = words2[i].s1 + " - ";
//   document.getElementById("s2").innerHTML = '&nbsp' + words2[i].s2;
//   i++;
//
//   document.getElementById("magicCheck").value = ""; //reset input for the magic Check
//   document.getElementById("magicCheck").focus(); //keep the input active for typing the next word
//
//   wizardScore++;
//   document.getElementById("wizardScore").innerHTML = wizardScore;
//   callConfetti();
// }

// 5.) An input area where the user can type in the word and when they do so correctly

let magicCheck = document.getElementById('magicCheck');
function checkInput() {
  let value = magicCheck.value;
  let correctWord = document.getElementById("s1").innerHTML+document.getElementById("s2").innerHTML;
      correctWord = correctWord.replace('-','')
      correctWord = correctWord.replace('&nbsp;','')
  console.log("The correct word should be " +correctWord);
  if (value === correctWord) {
    console.log("Correct!");
    wizardScore+=10; // +10 Wizard Points are added,
    //  Make overlay color flash quickly
    // Clear the value of the #magicCheck input
    document.getElementById("wizardScore").innerHTML = wizardScore;
    callConfetti(); // and a celebration transistion is called.
  } else {
    console.log("Keep trying...");
  }
}




// 6.) Need to have a sign up and login - just use local storage for now.

// On document load => present sign in / register UI
// Cool for that UI: https://codepen.io/oliviale/pen/ymbmqa

// On register write username and wizard password to local storage entry [ username, password, wizardScore ]

function Login()
{

  //For now we'll just hide the .container-login100 anytime a user clicks login
  let loginCont = document.getElementById("loginCont");
  loginCont.classList.add("hidden");

  setTimeout(function playMusic(){
    document.getElementById("my_audio").play();// Add Harry Potter theme song playing in the background on a loop 5 seconds after the page loads.

  })//start playing music on login

    document.getElementById("magicCheck").focus(); // Place the focus on the input field so user can start typing words as they sound them out.


  //NEXT TODO: =====>
  //On Submit of login form
  //https://codepen.io/karleenchoie/pen/RwNaQzw

  //Get value of user from uname
  //Get value of psw

  //Check if items exist in local storage

  //If items exist, then hide .container-login100

  //Else - write items to local storage,
  //Then hide .container-login100

  //Figure out then storing and retrieving WizardScore in local storage

}
// On login => check username and wizard password with local storage
// If => username && password === local entry storage then
// Hide login registration and show word / buttons / input UI





// 7.) Need to store wizardScore to local storage and make cool things happen based on the wizard score.
// Set wizardScore = wizardScore from local storage ( Update wizardScore+=10 to write to local storage )

// 8.) Write a script to build words varible or JSON file by
// scraping from links like https://www.playosmo.com/kids-learning/3-letter-words-starting-with-o/
// target => first-of-type .wp-block-table => foreach strong > td > in tr > tbody > table
// follow next URL => .menu-item-1517 => ul > li > ul > li > a.href

// 9.) Need to adjust the WORD object to pull from a JSON file or a database.

// 10.) Need to make database relational to more easily get prefix and sufix items.
