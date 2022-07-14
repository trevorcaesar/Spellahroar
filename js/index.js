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

// Recently adjusted the code so that the words are built dynamically on load
// and on an event listener associated to a button.

// Currently only pulling from words and not words2

// DETERMINE => How would you like the user to be able to access these sets?
//              Maybe when they get to a certain point level,
//              Set the dictionary to words or words2 varible
//              Reset current word in storage to 0

let words2 = [
  { word: "ladybug",s1: "la",s2: "dy",s3: "bug"},
  { word: "triangle",s1: "tri",s2: "an",s3: "gle"},
  { word: "newspaper",s1: "news",s2: "pa",s3: "per"},
  { word: "sunflower",s1: "sun",s2: "fl",s3: "ower"},
  { word: "cheeseburger",s1: "cheese",s2: "burg",s3: "er"},
  { word: "elephant",s1: "el",s2: "e",s3: "phant"},
  { word: "raspberry",s1: "rasp",s2: "ber",s3: "ry"},
  { word: "bulldozer",s1: "bull",s2: "doz",s3: "er"},
  { word: "detective",s1: "de",s2: "tec",s3: "tive"},
  { word: "wheelbarrow",s1: "wheel",s2: "barr",s3: "ow"},
  { word: "microwave",s1: "mic",s2: "ro",s3: "wave"},
  { word: "apricot",s1: "ap",s2: "ri",s3: "cot"},
  { word: "astronaut",s1: "as",s2: "tro",s3: "naut"},
  { word: "eleven",s1: "e",s2: "lev",s3: "en"},
  { word: "saturday",s1: "sat",s2: "ur",s3: "day"},
  { word: "tomorrow",s1: "to",s2: "mor",s3: "row"},
  { word: "hamburger",s1: "ham",s2: "bur",s3: "ger"},
  { word: "coloring",s1: "col",s2: "or",s3: "ing"},
  { word: "tomato",s1: "to",s2: "mat",s3: "o"},
  { word: "telephone",s1: "tel",s2: "e",s3: "phone"},
  { word: "gigantic",s1: "gi",s2: "gan",s3: "tic"},
  { word: "camera",s1: "cam",s2: "er",s3: "a"},
  { word: "video",s1: "vid",s2: "e",s3: "o"},
  { word: "marshmallow",s1: "marsh",s2: "mal",s3: "low"},
  { word: "magazine",s1: "mag",s2: "a",s3: "zine"},
  { word: "president",s1: "pres",s2: "i",s3: "dent"},
  { word: "beautiful",s1: "beaut",s2: "i",s3: "ful"},
  { word: "library",s1: "li",s2: "brar",s3: "y"},
  { word: "afternoon",s1: "af",s2: "ter",s3: "noon"},
  { word: "pajama",s1: "pa",s2: "jam",s3: "a"},
  { word: "december",s1: "de",s2: "cem",s3: "ber"},
  { word: "basketball",s1: "bas",s2: "ket",s3: "ball"},
  { word: "banana",s1: "ba",s2: "nan",s3: "a"},
  { word: "vacation",s1: "va",s2: "ca",s3: "tion"},
  { word: "october",s1: "oc",s2: "tob",s3: "er"},
  { word: "celery",s1: "cel",s2: "er",s3: "y"},
  { word: "cucumber",s1: "cu",s2: "cum",s3: "ber"},
  { word: "underwear",s1: "un",s2: "der",s3: "wear"},
  { word: "butterfly",s1: "but",s2: "ter",s3: "fly"},
  { word: "computer",s1: "com",s2: "pu",s3: "ter"},
  { word: "umbrella",s1: "um",s2: "bre",s3: "lla"},
  { word: "fingerpaint",s1: "fin",s2: "ger",s3: "paint"},
  { word: "strawberry",s1: "st",s2: "raw",s3: "berry"},
  { word: "octopus",s1: "oc",s2: "to",s3: "pus"},
  { word: "broccoli",s1: "br",s2: "occ",s3: "oli"},
  { word: "dinosaur",s1: "di",s2: "no",s3: "saur"},
  { word: "dishwasher",s1: "dish",s2: "wash",s3: "er"},
  { word: "spaghetti",s1: "spa",s2: "ghet",s3: "ti"},
  { word: "ponytail",s1: "po",s2: "ny",s3: "tail"},
  { word: "bicycle",s1: "bi",s2: "cyc",s3: "le"},
  { word: "neighborhood",s1: "neigh",s2: "bor",s3: "hood"},
  { word: "dangerous",s1: "da",s2: "nger",s3: "ous"},
  { word: "government",s1: "gov",s2: "ern",s3: "ment"},
  { word: "lemonade",s1: "lem",s2: "on",s3: "ade"},
  { word: "disrespect",s1: "dis",s2: "re",s3: "spect"},
  { word: "disagree",s1: "dis",s2: "ag",s3: "ree"},
  { word: "rectangle",s1: "rec",s2: "tang",s3: "le"},
  { word: "tradition",s1: "tra",s2: "di",s3: "tion"},
  { word: "reflection",s1: "re",s2: "flec",s3: "tion"},
  { word: "container",s1: "con",s2: "tain",s3: "er"},
  { word: "refreshment",s1: "re",s2: "fresh",s3: "ment"},
  { word: "employment",s1: "em",s2: "ploy",s3: "ment"},
  { word: "paragraph",s1: "par",s2: "a",s3: "graph"},
  { word: "family",s1: "fam",s2: "il",s3: "y"},
  { word: "chocolate",s1: "choc",s2: "o",s3: "late"},
  { word: "piano",s1: "pi",s2: "an",s3: "o"},
  { word: "animal",s1: "an",s2: "i",s3: "mal"},
  { word: "blueberry",s1: "blue",s2: "berr",s3: "y"},
  { word: "celebrate",s1: "cel",s2: "eb",s3: "rate"},
  { word: "history",s1: "his",s2: "tor",s3: "y"},
  { word: "holiday",s1: "hol",s2: "i",s3: "day"},
  { word: "envelope",s1: "en",s2: "vel",s3: "ope"},
  { word: "pollution",s1: "po",s2: "llu",s3: "tion"},
  { word: "calendar",s1: "cal",s2: "en",s3: "dar"},
  { word: "halloween",s1: "hall",s2: "o",s3: "ween"},
  { word: "pineapple",s1: "pine",s2: "app",s3: "le"},
  { word: "adjective",s1: "ad",s2: "jec",s3: "tive"},
  { word: "volleyball",s1: "vol",s2: "ley",s3: "ball"},
  { word: "hospital",s1: "hos",s2: "pi",s3: "tal"},
  { word: "piggybank",s1: "pig",s2: "gy",s3: "bank"},
  { word: "policeman",s1: "po",s2: "lice",s3: "man"},
  { word: "tortilla",s1: "tort",s2: "i",s3: "lla"},
  { word: "screwdriver",s1: "screw",s2: "dri",s3: "ver"},
  { word: "grandmother",s1: "grand",s2: "moth",s3: "er"},
  { word: "fingernail",s1: "fin",s2: "ger",s3: "nail"},
  { word: "vitamin",s1: "vi",s2: "ta",s3: "min"},
  { word: "sandwiches",s1: "sand",s2: "wich",s3: "es"},
  { word: "handwriting",s1: "hand",s2: "writ",s3: "ing"},
  { word: "november",s1: "no",s2: "vem",s3: "ber"},
  { word: "barbeque",s1: "barb",s2: "e",s3: "que"},
  { word: "grandfather",s1: "grand",s2: "fa",s3: "ther"},
  { word: "principal",s1: "princ",s2: "i",s3: "pal"},
  { word: "popsicle",s1: "pop",s2: "si",s3: "cle"},
  { word: "applesauce",s1: "app",s2: "le",s3: "sauce"},
  { word: "blueberries",s1: "blue",s2: "berr",s3: "ies"},
  { word: "tablecloth",s1: "ta",s2: "ble",s3: "cloth"},
  { word: "instrument",s1: "in",s2: "str",s3: "ument"},
  { word: "daffodil",s1: "daff",s2: "o",s3: "dil"},
  { word: "multiply",s1: "mul",s2: "ti",s3: "ply"},
  { word: "reporter",s1: "re",s2: "port",s3: "er"},
  { word: "calculate",s1: "cal",s2: "cu",s3: "late"},
  { word: "opinion",s1: "o",s2: "pin",s3: "ion"},
  { word: "forgetful",s1: "for",s2: "get",s3: "ful"},
  { word: "character",s1: "cha",s2: "rac",s3: "ter"},
  { word: "kangaroo",s1: "kan",s2: "ga",s3: "roo"},
  { word: "understand",s1: "un",s2: "der",s3: "stand"},
  { word: "Africa",s1: "Afr",s2: "ic",s3: "a"},
  { word: "favorite",s1: "fav",s2: "or",s3: "ite"},
  { word: "consonant",s1: "con",s2: "so",s3: "nant"},
  { word: "syllable",s1: "syl",s2: "la",s3: "ble"},
  { word: "memory",s1: "mem",s2: "o",s3: "ry"},
  { word: "mystery",s1: "mys",s2: "ter",s3: "y"},
  { word: "happiness",s1: "hap",s2: "pi",s3: "ness"},
  { word: "potato",s1: "po",s2: "ta",s3: "to"},
];

// Set Inital Library of Words
let dictionary = words;

// Determine the length of words varibles
let index = dictionary.length;

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
  cleanUpLastWord();

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
    if (wizardScore >= 100){
      dictionary = words2;
    }
}

// TODO: It would be cool to write more evaluations on wizardScore to interact with the DOM
// in ways that will keep the user engaged.


wordPosition = localStorage.getItem('wordPosition');


function cleanUpLastWord(){
    let lastSyl = document.getElementById("wordContainer").lastChild.innerHTML;
    let editedlastSyl = lastSyl.slice(0, -1);
    document.getElementById("wordContainer").lastChild.innerHTML = editedlastSyl;
}

function deleteChildren() {
        var e = document.querySelector("div#wordContainer");
        e.innerHTML = "";
    }

function getFirstWord(){

  Object.entries(dictionary[wordPosition]).map(([key, value]) => {
    if(key == "word"){
      document.getElementById("wordContainer").append(Object.assign(document.createElement('div'),{id:"word"},{textContent:value}));
    }else{
      document.getElementById("wordContainer").append(Object.assign(document.createElement('div'),{id:key},{textContent:value+"-"}));
    }
});


// Display an initial word on load so interface is ready when they login or register.
// Example: ch - air

// document.getElementById("wordContainer").append(Object.assign(document.createElement('div'),{class:"button-wrapper"},{id="nextWord"}));
// document.getElementById("nextWord").append(Object.assign(document.createElement('button'),{class:"potter-button"},{textContent:"Next Word"}));


  // document.getElementById("s1").innerHTML = words[wordPosition].s1 + "-";
  // document.getElementById("s2").innerHTML = '&nbsp' + words[wordPosition].s2;

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
  if(dictionary[wordPosition] == undefined){
    // TO DO: Do something after last word.
    console.log("No more words.");
    // For now, just display the first word again and start at the beginning of the loop.
    wordPosition = 0;
  }

  // For any result, let's update the word shown to the user.
  deleteChildren();
  getFirstWord();
  cleanUpLastWord();

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
  let correctWord = document.getElementById("word").innerHTML;
      correctWord = correctWord.replace('-','');
      correctWord = correctWord.replace('&nbsp;','');

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
