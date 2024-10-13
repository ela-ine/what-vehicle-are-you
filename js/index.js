
var results = {
    "i": 0,
    "e": 0,
    "f": 0,
    "t": 0,
    "n": 0,
    "s": 0,
    "p": 0,
    "j": 0
}

var question_index = 0;
var total_questions = Object.keys(questions).length;

// when user hits start button -> start test
function startTest() {
    const startPage = document.getElementById("start");
    const testPage = document.getElementById("test");
    startPage.setAttribute("hidden", true);
    testPage.removeAttribute("hidden");
    populateTest();
}

// populate test questions/choices
function populateTest() {
    const question = questions[question_index];

    const question_text = document.getElementById("question");
    question_text.innerHTML = question.question;

    const image = document.getElementById("story-image");
    image.setAttribute("src", "img/story/" + question_index.toString() + ".png");

    const choices_container = document.getElementById("choices");
    choices_container.innerHTML = "";

    for (let i = 0; i < question.choices.length; i++) {
        const choice = question.choices[i];
        const choice_button = document.createElement("button");
        choice_button.innerHTML = choice["choice"];
        choice_button.setAttribute("class", "choice");
        choice_button.onclick = function() { submitChoice(choice) };
        choices_container.appendChild(choice_button);
    }
}

// add to results tally, pull up next question
function submitChoice(choice) {
    const mapping = choice["mapping"];

    for (const char of mapping) {
        if (!results[mapping]) {
            results[mapping] = 0;
        }
    
        results[mapping] += 1;
    }
    
    if ("next" in choice) {
        question_index = choice["next"]
    } else {
        question_index++;
    }

    if (!(question_index in questions)) {
        const testPage = document.getElementById("test");
        testPage.setAttribute("hidden", true);
        showResults();
        return;
    }

    populateTest()
}

// calculate results
function calculateResults() {
    console.log(results);
    var result = 
        (results["i"] > results["e"] ? "i" : "e") +
        (results["n"] > results["s"] ? "n" : "s") +
        (results["t"] > results["f"] ? "t" : "f") +
        (results["p"] > results["j"] ? "p" : "j");
    
    return result;
}

// show corresponding profile to result
function showResults() {
    var result = calculateResults();
    const img_id = "img/profiles/" + result + ".png";

    const resultsPage = document.getElementById("results");
    const personality = document.getElementById("personality");
    resultsPage.removeAttribute("hidden");
    const text = document.getElementById("results-text");
    personality.setAttribute("src", img_id);
    text.innerText = "you are " + personalities[result] + "!";
}

// clear results, hide results page, start test
function reset() {
    question_index = 0;

    for (const key in results) {
        results[key] = 0;
    }

    const resultsPage = document.getElementById("results");
    resultsPage.setAttribute("hidden", "true");
    startTest();
}