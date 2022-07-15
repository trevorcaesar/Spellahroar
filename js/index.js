// Get the current user, if there is one.
const currentUser = sessionStorage.getItem('key');
const storedUsers = JSON.parse(localStorage.getItem('users'));

// Set Inital Library of Words
let dictionary = words;

// Determine the length of words varibles
let index = dictionary.length;

// set inital value of i
let i = 1;

// Function for User Sign Up
function Signup(){

    let userName = document.getElementById('uname').value;
    let pw = document.getElementById('psw').value;

    // Do some basic validation on the form
    // TODO: instead of alerts - write the messages to the form
    if(userName.length == 0){
        alert('Please fill in your username');

    }else if(pw.length == 0){
        alert('Please fill in password');

    }else if(userName.length == 0 && pw.length == 0){
        alert('Please fill in your username and password');

    }else{

        if(storedUsers){
            let howManyUsers = storedUsers.length;
            storedUsers.push({key: howManyUsers, uname: userName, pw: pw, wizardScoreTotal: 0, wordPosition: 1});
            localStorage.setItem('users', JSON.stringify(storedUsers));
            sessionStorage.setItem('key',howManyUsers);
          } else {
            let howManyUsers = 0;
            localStorage.setItem('users', JSON.stringify([{key: howManyUsers, uname: userName, pw: pw, wizardScoreTotal: 0, wordPosition: 1}]));
            sessionStorage.setItem('key',howManyUsers);
          }
        }

        // TODO - eventually add proper login and registration.
        // Right now just use local storage

        // OLD CODE
        // localStorage.setItem('username', name);
        // localStorage.setItem('pw', pw);

        // Initalize the Wizard Score point value they have.

        // OLD CODE
        // localStorage.setItem('wizardScoreTotal',0);

        // Initalize the word they are on by assigining it a value.

        // OLD CODE
        // localStorage.setItem('wordPosition',1);

        afterLoginOrSignup();

}

//Login
function Login(){

    let userName = document.getElementById('uname').value;
    let userPw = document.getElementById('psw').value;

    if(storedUsers) {
      for ( let u = 0; u<storedUsers.length; u++){
          if (userName === storedUsers[u].uname && userPw === storedUsers[u].pw){
            localStorage.setItem('users', JSON.stringify([{key: u, uname: userName, pw: userPw, wizardScoreTotal: 0, wordPosition: 1}]));
            sessionStorage.setItem('key',u);
            afterLoginOrSignup();
          }
      }
      //return alert('Access denied. Valid username and password is required.');
    }
}

function addToLocalStorageObject(name, key, value) {

	// Get the existing data
	var existing = localStorage.getItem(name);

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? JSON.parse(existing) : {};

	// Add new data to localStorage Array
	existing[key] = value;

	// Save back to localStorage
	localStorage.setItem(name, JSON.stringify(existing));

};

// After a successful login or registration...
function afterLoginOrSignup(){

  // Hide the login container
  // TODO: Instead of just adding the hidden class
  //       lets make the loginCont div fade out.
  // Get the information for the current user from localStorage


  addToLocalStorageObject("wizardScoreTotal", currentUser, 100);

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
