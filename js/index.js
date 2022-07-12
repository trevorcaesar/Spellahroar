// 1.) Words to learn how to read for the kid.

let words = [
  { word: "flair", s1: "fl", s2: "air"},
  { word: "stair", s1: "st", s2: "air"},
  { word: "hair", s1: "h", s2: "air"},
  { word: "lair", s1: "l", s2: "air"},
  { word: "fair", s1: "f", s2: "air"},
  { word: "glair", s1: "gl", s2: "air"},
  { word: "chair", s1: "ch", s2: "air"},
];
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

    document.getElementById("s1").innerHTML = words[2].s1 + " - ";
    document.getElementById("s2").innerHTML = '&nbsp' + words[2].s2;


// 3.) On click of a button, display a new word with the same suffix
// Example: fl - air

document.getElementById("nextWord").addEventListener("click", newWord);


function newWord() {

  if(words[i] == undefined){
    console.log("No more words."); // TO DO: Do something after last word.
    i = 0; // For now, just display the first word again and start at the beginning of the loop.
  }

  document.getElementById("s1").innerHTML = words[i].s1 + " - ";
  document.getElementById("s2").innerHTML = '&nbsp' + words[i].s2;

  i++;

  document.getElementById("magicCheck").value = ""; //reset input for the magic Check
  document.getElementById("magicCheck").focus(); //keep the input active for typing the next word

  wizardScore++;
  document.getElementById("wizardScore").innerHTML = wizardScore;
  callConfetti();
}


// 4.) On click of a button, display a new word that starts in CH
// Example: ch - art

document.getElementById("nextPre").addEventListener("click", newPre);

i = index2;

function newPre() {

  if(words2[i] == undefined){
    console.log("No more words."); // TO DO: Do something after last word.
    i = 0; // For now, just display the first word again and start at the beginning of the loop.
  }

  document.getElementById("s1").innerHTML = words2[i].s1 + " - ";
  document.getElementById("s2").innerHTML = '&nbsp' + words2[i].s2;
  i++;

  document.getElementById("magicCheck").value = ""; //reset input for the magic Check
  document.getElementById("magicCheck").focus(); //keep the input active for typing the next word

  wizardScore++;
  document.getElementById("wizardScore").innerHTML = wizardScore;
  callConfetti();
}

// 5.) An input area where the user can type in the word and when they do so correctly

var magicCheck = document.getElementById('magicCheck');
function checkInput() {
  var value = magicCheck.value;
  let correctWord = document.getElementById("s1").innerHTML + document.getElementById("s2").innerHTML;
  correctWord = correctWord.replace('-', '');
  correctWord = correctWord.replace('&nbsp;', '');
  correctWord = correctWord.replace('  ', '');
  console.log(correctWord);
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

// On register write username and wizard password to local storage entry [ username, password, wizardScore ]

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
