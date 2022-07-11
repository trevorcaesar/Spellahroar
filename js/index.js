// 1.) Create an object of words with each sylibal defined.
// Example: ( 'Chair','ch','air' )
let words = [
  { word: "chair", s1: "ch", s2: "air"},
  { word: "stair", s1: "st", s2: "air"},
  { word: "hair", s1: "h", s2: "air"},
  { word: "lair", s1: "l", s2: "air"},
  { word: "fair", s1: "f", s2: "air"},
  { word: "glair", s1: "gl", s2: "air"},
  { word: "flair", s1: "fl", s2: "air"},
];

let index = words.length;
// console.log("index is now: " + index);

// 2.) One word at a time, display each sylibal.
// Example: ch - air

  for(i=0;i < words.length; i++){

    console.log(words[i].word);
    document.getElementById("s1").innerHTML = words[i].s1 + " - ";
    document.getElementById("s2").innerHTML = '&nbsp' + words[i].s2;

  }

// 3.) On click of a button, display a new word with the same prefix
// Example: ch - ick

// Set i as words.length
// Get new word in position ++

document.getElementById("nextPre").addEventListener("click", newPreWord);

wizardScore = 0;
i = index;

function newPreWord() {

  if(words[i] == undefined){
    console.log("No more words."); // FEATURE REQUEST: If no more words exist show start a new lesson button, or a button to cash in wizard points, or start over.
    i = 0; // For now, just display the first word again and start at the beginning of the loop.
  }
  console.log("index is now: " + i);
  document.getElementById("s1").innerHTML = words[i].s1 + " - ";
  document.getElementById("s2").innerHTML = '&nbsp' + words[i].s2;
  i++;

  // Write a function that adds a point to a total score everytime
  // On click of a Wizard Point button score++
  ii++;
  //console.log("index is now: " + index);
  wizardScore++;
  console.log(wizardScore);
}


// 4.) On click of a button, display a new word with the same suffix
// Example: sl - ick

// 5.) On click of a button, display a picture of word.
// Example: Check reading of ( word )

// 6.) Need to store wizardScore to local storage
// 7.) Need to have a login

// 8.) Need to connect to a database.

// 9.) Need to adjust the object to pull from a JSON file or a database.
