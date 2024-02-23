const TRUTH = 1; const DARE = 2; const NEVER = 3; const PEOPLE_TRIVIA = 4; const WILDCARD = 5; const KARAOKE = 6; const MOST_LIKELY = 7; const CHARADES = 8; const VALENTINES = 9;

const NUM_TRUTH = 123; const NUM_DARE = 50; const NUM_NEVER = 101; const NUM_PEOPLE_TRIVIA = 77; const NUM_WILDCARD = 60; const NUM_KARAOKE = 54; const NUM_MOST_LIKELY = 77; const NUM_CHARADES = 61;
const NUM_VALENTINES = 105;

const TOTAL_CARDS = NUM_TRUTH + NUM_DARE + NUM_KARAOKE + NUM_NEVER + NUM_PEOPLE_TRIVIA + NUM_WILDCARD + NUM_MOST_LIKELY + NUM_CHARADES + NUM_VALENTINES;

var activeCategories = [];

var used = new Set();

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 39:
      // console.log("Right key is pressed.");
      shuffleNext(0);
      break;
    case 32:
      event.preventDefault();
      // console.log("space key is pressed.");
      shuffleNext(0);
      break;
  }
};

function startShuffle() {
  // console.log("starting shuffle 0");
  activeCategories.push(TRUTH);
  activeCategories.push(DARE);
  // console.log("starting shuffle");
  activeCategories.push(NEVER);
  activeCategories.push(PEOPLE_TRIVIA);
  activeCategories.push(WILDCARD);
  activeCategories.push(KARAOKE);
  activeCategories.push(MOST_LIKELY);
  activeCategories.push(CHARADES);
  activeCategories.push(VALENTINES);
}

function changeCategories(checkbox, categoryNum) {
  if (checkbox.checked) {
    addCategory(categoryNum);
  } else {
    removeCategory(categoryNum);
  }

}

function addCategory(categoryNum) {
  activeCategories.push(categoryNum);
}

function removeCategory(categoryNum) {
  for (var i = 0; i < activeCategories.length; i++) {
    if (activeCategories[i] == categoryNum) {
      activeCategories.splice(i, 1);
      return;
    }
  }
}

function shuffleNext(repeats) {
  if (activeCategories.length == 0) {
    document.getElementById("errorMessage").innerHTML = "Please select at least 1 category!";
    return;
  }
  document.getElementById("errorMessage").innerHTML = "";

  let category = 0;
  let cardNumber = 0;
  let imgTitle = "";

  //should return number between 0-5 then 1-6
  category = activeCategories[Math.floor(Math.random() * activeCategories.length)];

  if (category == TRUTH) {
    cardNumber = Math.floor(Math.random() * NUM_TRUTH) + 1;
  }
  else if (category == DARE) {
    cardNumber = Math.floor(Math.random() * NUM_DARE) + 1;
  }
  else if (category == NEVER) {
    cardNumber = Math.floor(Math.random() * NUM_NEVER) + 1;
  }
  else if (category == PEOPLE_TRIVIA) {
    cardNumber = Math.floor(Math.random() * NUM_PEOPLE_TRIVIA) + 1;
  }
  else if (category == WILDCARD) {
    cardNumber = Math.floor(Math.random() * NUM_WILDCARD) + 1;
  }
  else if (category == MOST_LIKELY) {
    cardNumber = Math.floor(Math.random() * NUM_MOST_LIKELY) + 1;
  }
  else if (category == CHARADES) {
    cardNumber = Math.floor(Math.random() * NUM_CHARADES) + 1;
  }
  else if (category == KARAOKE) {
    cardNumber = Math.floor(Math.random() * NUM_KARAOKE) + 1;
  }
  else if (category == VALENTINES) {
    cardNumber = Math.floor(Math.random() * NUM_VALENTINES) + 1;
  }
  if (cardNumber == 1) {
    shuffleNext(repeats);
    return;
  }
  var cardId = category * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    // console.log("Was going to repeat " + cardId);
    shuffleNext(repeats + 1);
    return;
  }
  used.add(category * 1000 + cardNumber);
  imgTitle = category + "/" + cardNumber + ".png";
  document.getElementById("shuffle-id").src = imgTitle;
}

function truthNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_TRUTH) + 1;
  if (cardNumber == 1) {
    truthNext(repeats);
    return;
  }
  let imgTitle = "1/" + cardNumber + ".png";
  var cardId = TRUTH * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    // console.log("Was going to repeat " + cardId);
    truthNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("truth-id").src = imgTitle;

}

function dareNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_DARE) + 1;
  if (cardNumber == 1) {
    dareNext(repeats);
    return;
  }
  let imgTitle = "2/" + cardNumber + ".png";
  var cardId = DARE * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    dareNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("dare-id").src = imgTitle;
}

function neverNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_NEVER) + 1;
  if (cardNumber == 1) {
    neverNext(repeats);
    return;
  }
  let imgTitle = "3/" + cardNumber + ".png";
  var cardId = NEVER * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    neverNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("never-id").src = imgTitle;
}

function triviaNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_PEOPLE_TRIVIA) + 1;
  if (cardNumber == 1) {
    triviaNext(repeats);
    return;
  }
  let imgTitle = "4/" + cardNumber + ".png";
  var cardId = PEOPLE_TRIVIA * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    triviaNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("trivia-id").src = imgTitle;
}

function wildcardNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_WILDCARD) + 1;
  if (cardNumber == 1) {
    wildcardNext(repeats);
    return;
  }
  let imgTitle = "5/" + cardNumber + ".png";
  var cardId = WILDCARD * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    wildcardNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("wildcard-id").src = imgTitle;
}

function karaokeNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_KARAOKE) + 1;
  if (cardNumber == 1) {
    karaokeNext(repeats);
    return;
  }
  let imgTitle = "6/" + cardNumber + ".png";
  var cardId = KARAOKE * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    karaokeNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("karaoke-id").src = imgTitle;
}

function mostLikelyNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_MOST_LIKELY) + 1;
  if (cardNumber == 1) {
    mostLikelyNext(repeats);
    return;
  }
  let imgTitle = "7/" + cardNumber + ".png";
  var cardId = MOST_LIKELY * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    mostLikelyNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("most-likely-id").src = imgTitle;
}

function charadesNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_CHARADES) + 1;
  if (cardNumber == 1) {
    charadesNext(repeats);
    return;
  }
  let imgTitle = "8/" + cardNumber + ".png";
  var cardId = CHARADES * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    charadesNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("charades-id").src = imgTitle;
}

function valentinesNext(repeats) {
  let cardNumber = Math.floor(Math.random() * NUM_VALENTINES) + 1;
  if (cardNumber == 1) {
    valentinesNext(repeats);
    return;
  }
  let imgTitle = "9/" + cardNumber + ".png";
  var cardId = VALENTINES * 1000 + cardNumber;
  if (used.has(cardId) && used.size < TOTAL_CARDS - 50 && repeats < 7) {
    console.log("Was going to repeat " + cardId);
    valentinesNext(repeats + 1);
    return;
  }
  used.add(cardId);
  document.getElementById("valentines-id").src = imgTitle;
}