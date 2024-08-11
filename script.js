
var results = {
    // tally for personality results
    "personality1": 0,
    "personality2": 0,
    // ...
}

var question_index = 0;
var total_questions = questions.length;

// when user hits start button -> start test
function startTest() {
    const startPage = document.getElementById("start");
    const testPage = document.getElementById("test");
    startPage.setAttribute("hidden", true);
    testPage.removeAttribute("hidden");
    populateTest();
}

function populateTest() {
    const question = questions[question_index];

    const question_text = document.getElementById("question");
    question_text.innerText = question.question;

    const image = document.getElementById("story-image");
    image.setAttribute("src", "img/")

    const choices_container = document.getElementById("choices");
    choices_container.innerHTML = '';

    for (let i = 0; i < question.choices.length; i++) {
        const choice = question.choices[i];
        const choice_button = document.createElement("button");
        choice_button.innerText = choice["choice"];
        choice_button.setAttribute("class", "choice");
        choice_button.onclick = function() { submitChoice(choice["mapping"]) };
        choices_container.appendChild(choice_button);
    }
}

function submitChoice(mapping) {
    results[mapping] += 1;
    question_index++;

    if (question_index == total_questions) {
        const testPage = document.getElementById("test");
        testPage.setAttribute("hidden", true);
        showResults();
        return;
    }

    populateTest()
}

function showResults() {
    var result = "";

    for (const key in results) {
        if (!result) {
            result = key;
        }

        if (results[key] > results[result]) {
            result = key;
        }
    }
    
    const img_id = "img/".concat(result, ".png");

    const resultsPage = document.getElementById("results");
    const personality = document.getElementById("personality");
    resultsPage.removeAttribute("hidden");
    const text = document.getElementById("results-text");
    personality.setAttribute("src", img_id);
    text.innerText = "you are ".concat(result, "!");
}