// Get the current user, if there is one.
const currentUser = sessionStorage.getItem('key');

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

    let storedUsers = JSON.parse(localStorage.getItem('users'));

    if(storedUsers != null){
        let howManyUsers = storedUsers.length;
        storedUsers.push({key: howManyUsers, uname: userName, pw: pw, wizardScoreTotal: 0, wordPosition: 1});
        localStorage.setItem('users', JSON.stringify(storedUsers));
        sessionStorage.setItem('key',howManyUsers);
      } else {
        let howManyUsers = 0;
        localStorage.setItem('users', JSON.stringify([{key: howManyUsers, uname: userName, pw: pw, wizardScoreTotal: 0, wordPosition: 1}]));
        sessionStorage.setItem('key',howManyUsers);
      }

      afterLoginOrSignup();

}


//Login
function Login(){

    let userName = document.getElementById('uname').value;
    let userPw = document.getElementById('psw').value;

    let storedUsers = JSON.parse(localStorage.getItem('users'));
    if(storedUsers) {
      for ( let u = 0; u<storedUsers.length; u++){
          if (userName === storedUsers[u].uname && userPw === storedUsers[u].pw){
            localStorage.setItem('users', JSON.stringify([{key: u, uname: userName, pw: userPw, wizardScoreTotal: 0, wordPosition: 1}]));
            sessionStorage.setItem('key',u);
            afterLoginOrSignup();
          }
      }
      // TO DO: Error handling.
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
  // TO DO: Need to update this in the users object on local storage somehow

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

// Any time someone has 20, tell them they get to go swimming.
if (wizardScore === 20){
  console.log("You get to go swimming.");
}

// Any time someone has 20, tell them they get to have sushi.
if (wizardScore === 30){
  console.log("You get to have sushi for dinner.");
}

// Any time someone has more than 100 points, change the word library to the harder words.
    if (wizardScore >= 100){
      dictionary = words2;
    }
}

// TODO: It would be cool to write more evaluations on wizardScore to interact with the DOM
//       in ways that will keep the user engaged.


// Get the current word position for the users
// TO DO: Need to update this in the users object on local storage somehow

wordPosition = localStorage.getItem('wordPosition');

// Remove the trailing slash from the last syllable
function cleanUpLastWord(){
    let lastSyl = document.getElementById("wordContainer").lastChild.innerHTML;
    let editedlastSyl = lastSyl.slice(0, -1);
    document.getElementById("wordContainer").lastChild.innerHTML = editedlastSyl;
}

// Clear the word container so a new word can be built
function clearWord() {
    let clear = document.querySelector("div#wordContainer");
    clear.innerHTML = "";
}

// Get the initial word to display for the user to read and type
function getFirstWord(){
  Object.entries(dictionary[wordPosition]).map(([key, value]) => {
    if(key == "word"){
      document.getElementById("wordContainer").append(Object.assign(document.createElement('div'),{id:"word"},{textContent:value}));
    }else{
      document.getElementById("wordContainer").append(Object.assign(document.createElement('div'),{id:key},{textContent:value+"-"}));
    }
  });

// Make the count of the users word position increase
// and set it in local storage.
  wordPosition++;
  localStorage.setItem('wordPosition',wordPosition);
// TO DO: Need to update this in the users object on local storage somehow

}

// On click of a button or form submit, display a new word
document.getElementById("nextWord").addEventListener("click", newWord);

function newWord() {
  // Get the value of the word position in local storage and use it to pull new word.
  // TO DO: Need to update this in the users object on local storage somehow
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
  clearWord();
  getFirstWord();

  // TODO: Need to write a check statement to make sure the user has typed the words
  //       before they are allowed to get a wizard point or a new word.
  cleanUpLastWord();

  // Reset input for the Magic Check and set the focus on that field.
  document.getElementById("magicCheck").value = "";

  // Keep the input active for typing the next word easily.
  document.getElementById("magicCheck").focus();

  // Reward the users Wizard Point and Word Position totals.
  wizardScore++;
  wordPosition++;

  // Update the local storage to reflect their new totals.
  // TO DO: Need to update this in the users object on local storage somehow
  localStorage.setItem('wizardScoreTotal',wizardScore);
  localStorage.setItem('wordPosition',wordPosition);

  // Update their score in the UI.
  document.getElementById("wizardScore").innerHTML = wizardScore;

  // Make it rain confetti if the user has earned it.
  // TODO => Make more cool celebration interactivities based on their Wizard Points.
  callConfetti();
  }
}

// Let's create target a field the user can type the word into.
let magicCheck = document.getElementById('magicCheck');

// And checks the current word with the input a user types.
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
    // TO DO: Need to update this in the users object on local storage somehow
    wizardScore++;

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



// NEXT TODO: Figure out how to write to and pull from the Wizard Point and Word Position items
//            in the local storage user object for the current logged in user.



// TODO => Need to adjust the WORD object to pull from a JSON file or a database.



// TODO => Need to port to database and add proper registration / login / updates to score.
