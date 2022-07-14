// 1.) Words to learn how to read for the kid.
// TODO: Later pull from JSON file

let words = [
  { word: "kitty", s1: "kit", s2: "ty"},
  { word: "cookie", s1: "cook", s2: "ie"},
  { word: "window", s1: "win", s2: "dow"},
  { word: "sunny", s1: "sun", s2: "ny"},
  { word: "zebra", s1: "zeb", s2: "ra"},
  { word: "monkey", s1: "mon", s2: "key"},
  { word: "garden", s1: "gar", s2: "den"},
  { word: "castle", s1: "cas", s2: "tle"},
  { word: "oven", s1: "ov", s2: "en"},
  { word: "rocket", s1: "rock", s2: "et"},
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
  { word: "glasses", s1: "glass", s2: "es"},
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
// This way we can load items in a series which will allow the boy to practice
//      sounds of words together in groups

let words2 = [
  { word: "charge", s1: "ch", s2: "arge"},
  { word: "chart", s1: "ch", s2: "art"},
  { word: "chop", s1: "ch", s2: "op"},
  { word: "chew", s1: "ch", s2: "ew"},
  { word: "chip", s1: "ch", s2: "ip"},
  { word: "chew", s1: "ch", s2: "ew"},
];

// Determine the length of words varibles
let index = words.length;
let index2 = words2.length;

// set inital value of i
let i = 1;

// Function for User Sign Up
function Signup(){

    let name = document.getElementById('uname');
    let pw = document.getElementById('psw');

    // Do some basic validation on the form
    // TODO: instead of alerts - write the messages to the form
    if(name.value.length == 0){
        alert('Please fill in your username');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in your username and password');

    }else{

        // TODO - eventually add proper login and registration.
        // Right now just use local storage
        localStorage.setItem('username', name.value);
        localStorage.setItem('pw', pw.value);
        // Initalize the Wizard Score point value they have.
        localStorage.setItem('wizardScoreTotal',0);
        // Initalize the word they are on by assigining it a value.
        localStorage.setItem('wordPosition',1);
        console.log("account created.");
        afterLoginOrSignup();

    }
}

//Login
function Login(){
    let storedName = localStorage.getItem('username');
    let storedPw = localStorage.getItem('pw');

        // If a user has registered, then their wizard score has been set to
        // 0 or they have a current wizard score...
        // Let's get that so their progress is reflected.

        wizardScore = localStorage.getItem('wizardScoreTotal');

        // If a user has registered, then to track the word they are on
        // a value has been set. Let's get that vaule so their progress is reflected.

        wordPosition = localStorage.getItem('wordPosition');

    let userName = document.getElementById('uname');
    let userPw = document.getElementById('psw');
    let userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
      afterLoginOrSignup();
    }else{
      alert('Error on login');
    }
}

// After a successful login or registration...
function afterLoginOrSignup(){

  // Hide the login container
  // TODO: Instead of just adding the hidden class
  //       lets make the loginCont div fade out.

  let loginCont = document.getElementById("loginCont");
  loginCont.classList.add("hidden");

  // Get local stored wizard point total
  let wizardScoreTotal = localStorage.setItem('wizardScoreTotal',wizardScore);
  let getWizardScoreLocal = localStorage.getItem('wizardScoreTotal');

  //check to see if localstrage wizardScoreTotal is greater than 0
  if(getWizardScoreLocal >= 0){
      // If they have a wizard score, set it on the UI so their coin has that value shown
      document.getElementById("wizardScore").innerHTML = wizardScore;
  }
  if(getWizardScoreLocal == "[object HTMLSpanElement]" || getWizardScoreLocal == undefined){
      // If they are just logging in for the first time, set their score to 0 and show that.
      wizardScore = 0;
      localStorage.setItem('wizardScoreTotal',wizardScore);
      document.getElementById("wizardScore").innerHTML = wizardScore;
  }

  // Call function that gets the first word to display
  // based on current word value in storage
  getFirstWord();

  // Start playing music on login
  setTimeout(function playMusic(){
    document.getElementById("my_audio").play();
  })

  // Place the focus on the input field so user can start typing words as they sound them out.
  document.getElementById("magicCheck").focus();
}

// Function to start or stop confetti overlay.
const startConfetti = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000);
};

const stopConfetti = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000);
};

// Any time someone has more than 10 points, make confetti fall.
function callConfetti() {
    if (wizardScore >= 10){
      startConfetti();
      stopConfetti();
    }
}

// TODO: It would be cool to write more evaluations on wizardScore to interact with the DOM
// in ways that will keep the user engaged.

function getFirstWord(){
// Display an initial word on load so interface is ready when they login or register.
// Example: ch - air
  wordPosition = localStorage.getItem('wordPosition');
  document.getElementById("s1").innerHTML = words[wordPosition].s1 + "-";
  document.getElementById("s2").innerHTML = '&nbsp' + words[wordPosition].s2;

  // After loading the initial word, increase the word position score
  // and write that to local storage.
  wordPosition++;
  localStorage.setItem('wordPosition',wordPosition);

  console.log("The index of the current word is: " +wordPosition);
}
//
// On click of a button or form submit, display a new word

document.getElementById("nextWord").addEventListener("click", newWord);

function newWord() {
  // Get the value of the word position in local storage and use it to pull new word.
  wordPosition = localStorage.getItem('wordPosition');

  if(wordPosition!=0){

  // Check to see if no result is recieved.
  if(words[wordPosition] == undefined){
    // TO DO: Do something after last word.
    console.log("No more words.");
    // For now, just display the first word again and start at the beginning of the loop.
    wordPosition = 0;
  }

  // For any result, let's update the word shown to the user.
  document.getElementById("s1").innerHTML = words[wordPosition].s1 + "-";
  document.getElementById("s2").innerHTML = '&nbsp' + words[wordPosition].s2;

  // Reset input for the Magic Check and set the focus on that field.
  document.getElementById("magicCheck").value = "";

  // Keep the input active for typing the next word easily.
  document.getElementById("magicCheck").focus();

  // Reward the users Wizard Point and Word Position totals.
  wizardScore++;
  wordPosition++;

  // Update the local storage to reflect their new totals.
  localStorage.setItem('wizardScoreTotal',wizardScore);
  localStorage.setItem('wordPosition',wordPosition);

  // Update their score in the UI.
  document.getElementById("wizardScore").innerHTML = wizardScore;

  // Make it rain confetti if the user has earned it.
  // TODO => Make more cool celebration interactivities based on their Wizard Points.
  callConfetti();
  }
}

// Lets create a field that checks the current word with the input a user can type.

let magicCheck = document.getElementById('magicCheck');
function checkInput() {
  let value = magicCheck.value;

  // Since the words are displayed with their sylibles,
  // we will have to clean up the word first by removing the - and empty space character.
  let correctWord = document.getElementById("s1").innerHTML+document.getElementById("s2").innerHTML;
      correctWord = correctWord.replace('-','')
      correctWord = correctWord.replace('&nbsp;','')

  console.log("The correct word should be " +correctWord);

  // Now lets preform a check to see if the word is correct.
  if (value === correctWord) {
    console.log("Correct!");
    // Reward the user with a point.
    wizardScore++;

    // TODO: Make overlay color flash quickly.

    // Update their score in the UI.
    document.getElementById("wizardScore").innerHTML = wizardScore;

    // Make it rain confetti if the user has earned it.
    callConfetti();

  } else {
    // While they have not typed the correct response, encourage them to keep trying.
    // TODO: Maybe we should consider having a section of the UI display these messages.
    console.log("Keep trying...");
  }
}



// NEXT TODO: Rewrite so that the user profile is stored in an array
//       so that multiple users can register.



// TODO => Need to adjust the WORD object to pull from a JSON file or a database.



// TODO => Need to port to database and add proper registration / login / updates to score.
